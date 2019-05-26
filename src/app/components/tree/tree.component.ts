import { Item } from './../../models/item';
import { CarsService } from './../../services/cars.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.styl']
})
export class TreeComponent implements OnInit, OnDestroy {

  constructor(
    private carsService: CarsService
  ) { }

  items = [];
  subscription: Subscription;

  ngOnInit() {
    this.subscription = this.carsService.treeData$.subscribe((items: Item[]) => {
      this.items = items;
    });

    this.carsService.getTreeData();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onCheck({ id, status }: {id: string, status: boolean}) {
    this.carsService.check(id, status);
  }

  onExpand({ id, status }: { id: string, status: boolean }) {
    this.carsService.expand(id, status);
  }

}
