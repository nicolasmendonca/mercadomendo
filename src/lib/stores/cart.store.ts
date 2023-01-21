import { writable } from 'svelte/store';


export type CartItem = {
    id: number
    name: string
    price: number
  }

export class Cart {
  public items: CartItem[];

  constructor(items: CartItem[]) {
    this.items = items;
  }

  get countedItems() {
    type CountedItems = Array<CartItem & { quantity: number }>
    return this.items.reduce<CountedItems>((acc, item) => {
      const existingItem = acc.find((i) => i.id === item.id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        acc.push({ ...item, quantity: 1 });
      }
      return acc;
    }
    , []);
  }

  get total() {
    return this.countedItems.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);
  }

  public addItem = (item: CartItem) => {
    return new Cart([...this.items, item])
  }
}

export const cartStore = writable(new Cart([]));
