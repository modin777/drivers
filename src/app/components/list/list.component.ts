import { Subscription } from 'rxjs';
import { Item } from './../../models/item';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { CarsService } from 'src/app/services/cars.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.styl']
})
export class ListComponent implements OnInit, OnDestroy {

  constructor(
    private carsService: CarsService
  ) { }

  items: Item[] = [];
  subscription: Subscription;

  ngOnInit() {
    this.subscription = this.carsService.listData$.subscribe((items: Item[]) => {
      this.items = items;
    });

    this.carsService.getListData();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
