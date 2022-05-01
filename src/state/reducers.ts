import { Action } from './actions';
import { ActionType } from './actions-types';

export interface InitialState {
  items: ItemDetails[];
  itemCount: number;
}

export interface ItemDetails {
  id: number;
  name: string;
  description?: string;
  discount: number;
  imgPath: string;
  quantity: number;
  price: number;
  images: {
    mainPath: string;
    thumbnailPath: string;
  }[];
}

const countItems = (items: ItemDetails[]): number => {
  let counter = 0;
  if (!items.length) {
    return counter;
  }

  items.forEach((ele) => {
    counter += ele.quantity;
  });
  return counter;
};

const findDuplicates = (id: number, items: ItemDetails[]): boolean => {
  let isDuplicate = false;
  items.forEach((ele) => {
    if (ele.id === id) {
      isDuplicate = true;
    }
  });
  return isDuplicate;
};

export const reducer = (state: InitialState, action: Action): InitialState => {
  switch (action.type) {
    case ActionType.ADD_TO_CART:
      if (findDuplicates(action.payload.id, state.items)) {
        const newItems = state.items.map((ele) => {
          if (ele.id === action.payload.id) {
            return { ...ele, quantity: ele.quantity + action.payload.quantity };
          }
          return ele;
        });
        return { items: newItems, itemCount: countItems(newItems) };
      }

      const newItems = [...state.items, action.payload];

      return { items: newItems, itemCount: countItems(newItems) };

    case ActionType.REMOVE_FROM_CART:
      const removedItems = state.items.filter(
        (ele) => ele.id !== action.payload
      );
      return { items: removedItems, itemCount: countItems(removedItems) };

    default:
      return state;
  }
};
