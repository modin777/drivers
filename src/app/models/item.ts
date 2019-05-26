export class Item {
  id: string;
  label: string;
  checked: boolean;
  children?: Item[];
  expanded: boolean;
}
