import { Injectable } from '@angular/core';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  private DATA: Item[] = [
    {
      id: '1',
      label: 'BMW',
      checked: false,
      children: [],
      expanded: false,
    },
    {
      id: '2',
      label: 'Audi',
      checked: false,
      expanded: false,
      children: [
        {
          id: '11',
          label: '80',
          checked: false,
          children: [],
          expanded: false,
        },
        {
          id: '12',
          label: 'A3',
          checked: false,
          children: [],
          expanded: false,
        },
        {
          id: '13',
          label: 'A4',
          checked: false,
          children: [
            {
              id: '21',
              label: 'Водитель 1',
              checked: false,
              expanded: false,
            },
            {
              id: '22',
              label: 'Водитель 2',
              checked: false,
              expanded: false,
            },
            {
              id: '23',
              label: 'Водитель 3',
              checked: false,
              expanded: false,
            },
            {
              id: '24',
              label: 'Водитель 4',
              checked: false,
              expanded: false,
            },
            {
              id: '25',
              label: 'Водитель 5',
              checked: false,
              expanded: false,
            },
            {
              id: '26',
              label: 'Водитель 6',
              checked: false,
              expanded: false,
            },
            {
              id: '27',
              label: 'Водитель 7',
              checked: false,
              expanded: false,
            },
            {
              id: '28',
              label: 'Водитель 8',
              checked: false,
              expanded: false,
            },
            {
              id: '29',
              label: 'Водитель 9',
              checked: false,
              expanded: false,
            },
            {
              id: '30',
              label: 'Водитель 10',
              checked: false,
              expanded: false,
            },
          ],
          expanded: false,
        },
        {
          id: '14',
          label: 'A5',
          checked: false,
          children: [],
          expanded: false,
        },
        {
          id: '15',
          label: 'A6',
          checked: false,
          children: [],
          expanded: false,
        },
        {
          id: '16',
          label: 'A7',
          checked: false,
          children: [],
          expanded: false,
        },
        {
          id: '17',
          label: 'A8',
          checked: false,
          children: [],
          expanded: false,
        },
        {
          id: '18',
          label: 'Q3',
          checked: false,
          children: [],
          expanded: false,
        },
        {
          id: '19',
          label: 'Q5',
          checked: false,
          children: [],
          expanded: false,
        },
        {
          id: '20',
          label: 'Q7',
          checked: false,
          children: [],
          expanded: false,
        },
      ]
    },
    {
      id: '3',
      label: 'Mercedes-Benz',
      checked: false,
      children: [],
      expanded: false,
    },
    {
      id: '4',
      label: 'Porsche',
      checked: false,
      children: [],
      expanded: false,
    },
    {
      id: '5',
      label: 'Ferrari',
      checked: false,
      children: [
        {
          id: '31',
          label: '360',
          checked: false,
          children: [],
          expanded: false,
        },
        {
          id: '32',
          label: '458',
          checked: false,
          children: [],
          expanded: false,
        },
        {
          id: '33',
          label: 'f430',
          checked: false,
          children: [
            {
              id: '36',
              label: 'Водитель 11',
              checked: false,
              expanded: false,
            },
            {
              id: '37',
              label: 'Водитель 12',
              checked: false,
              expanded: false,
            },
            {
              id: '38',
              label: 'Водитель 13',
              checked: false,
              expanded: false,
            },
            {
              id: '39',
              label: 'Водитель 14',
              checked: false,
              expanded: false,
            },
            {
              id: '40',
              label: 'Водитель 15',
              checked: false,
              expanded: false,
            },
          ],
          expanded: false,
        },
        {
          id: '34',
          label: '599',
          checked: false,
          children: [],
          expanded: false,
        },
        {
          id: '35',
          label: '612',
          checked: false,
          children: [],
          expanded: false,
        },
      ],
      expanded: false,
    },
    {
      id: '6',
      label: 'Lamborghini',
      checked: false,
      children: [],
      expanded: false,
    },
    {
      id: '7',
      label: 'Volkswagen',
      checked: false,
      children: [],
      expanded: false,
    },
    {
      id: '8',
      label: 'Mitsubishi',
      checked: false,
      children: [],
      expanded: false,
    },
    {
      id: '9',
      label: 'Nissan',
      checked: false,
      children: [],
      expanded: false,
    },
    {
      id: '10',
      label: 'Kia',
      checked: false,
      children: [],
      expanded: false,
    },
  ];

  get() {
    return this.DATA;
  }
}
