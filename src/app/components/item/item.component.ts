import { Item } from './../../models/item';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.styl']
})
export class ItemComponent implements OnInit {

  @Input() id: string;
  @Input() label: string;
  @Input() children: Item[];
  @Input() checked: boolean;
  @Input() expanded: boolean;
  @Input() indeterminate: boolean;

  @Output() onCheck: EventEmitter<{id: string, status: boolean}> = new EventEmitter();
  @Output() onExpand: EventEmitter<{id: string, status: boolean}> = new EventEmitter();


  constructor() { }


  ngOnInit() {

  }

  expand(event?) {
    if (!event) {
      event = {
        id: this.id,
        status: !this.expanded
      };
    }

    this.onExpand.emit(event);
  }

  check() {
    this.onCheck.emit({
      id: this.id,
      status: this.checked
    });
  }

  onCheckChildren(event) {
    this.onCheck.emit(event);
  }

}
