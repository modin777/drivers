import { DataService } from './data.service';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Item } from '../models/item';


@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor(
    private data: DataService
  ) {
    this.init();
  }

  private DATA = this.data.get();

  treeData$ = new Subject();
  listData$ = new Subject();


  // Функция ищет элемент по id
  private searchById(data: Item[], id: string) {
    let result = null;

    for (const item of data) {
      if (item.id === id) {
        result = item;
        break;

      } else {
        if (item.children && item.children.length && this.searchById(item.children, id)) {
          result = this.searchById(item.children, id);
          break;
        }
      }
    }

    return result;
  }

  // Функция итерирует структуру данных, включая вложенные элементы
  private iterate(data: Item[], callback) {
    for (const item of data) {

      if (item.children && item.children.length) {
        this.iterate(item.children, callback);
      }

      callback(item);
    }
  }

  // Сохраняем в ls
  private saveToLS() {
    localStorage.setItem('cars', JSON.stringify(this.DATA));
  }

  // Забираем из ls
  private getFromLS() {
    if (localStorage.getItem('cars')) {
      return JSON.parse(localStorage.getItem('cars'));

    } else {
      return null;
    }
  }

  // Находим главного родителя по id потомка
  private getParent(childId) {
    let parent;

    for (const item of this.DATA) {
      this.iterate(item.children, child => {
        if (child.id === childId) {
          parent = item;
        }
      });
    }

    return parent;
  }

  // Устанавливаем чекбокс родителя в зависимости от потомков
  private checkStatuses(item) {
    if (item && item.children && item.children.length) {
      let allChecked = true;
      let allUnchecked = true;
      let indeterminate = false;

      // Перебираем всех потомков
      for (const child of item.children) {

        // Если хотя бы у одного статус indeterminate, значит у родителя тоже indeterminate
        if (child.indeterminate) {
          indeterminate = true;
          allChecked = false;
          allUnchecked = false;
          break;
        }

        // Если хотя бы один активен
        if (child.checked) {
          allUnchecked = false;

          // Если хотя бы один не активен
        } else {
          allChecked = false;
        }
      }

      item.checked = allChecked;
      item.indeterminate = indeterminate || (!allChecked && !allUnchecked);
    }
  }

  init() {
    this.DATA = this.getFromLS() || this.DATA;
  }

  getTreeData() {
    this.treeData$.next(this.DATA);
  }

  getListData() {
    const data = [];

    this.iterate(this.DATA, (item) => {
      if (!item.children && item.checked) {
        data.push(item);
      }
    });

    this.listData$.next(data);
  }

  expand(id: string, val: boolean) {
    const item = this.searchById(this.DATA, id);

    if (!item) { return; }

    item.expanded = val;

    this.getListData();
    this.treeData$.next(this.DATA);
    this.saveToLS();
  }

  check(id: string, val: boolean) {
    const item = this.searchById(this.DATA, id);
    const parent = this.getParent(id);

    if (!item) { return; }

    item.checked = val;
    item.indeterminate = false;


    if (item.children && item.children.length) {
      this.iterate(item.children, children => {
        children.checked = val;
      });
    }

    this.getListData();

    if (parent) {
      this.iterate(parent.children, child => {
        this.checkStatuses(child);
      });

      this.checkStatuses(parent);

    } else {
      this.iterate(item.children, child => {
        this.checkStatuses(child);
      });

      this.checkStatuses(parent);
    }

    this.treeData$.next(this.DATA);
    this.saveToLS();
  }

}
