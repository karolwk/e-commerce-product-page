import { ItemDetails } from './reducers';
import { ActionType } from './actions-types';

export interface RemoveFromCartAction {
  type: ActionType.REMOVE_FROM_CART;
  payload: number;
}

export interface AddToCartAction {
  type: ActionType.ADD_TO_CART;
  payload: ItemDetails;
}

export type Action = RemoveFromCartAction | AddToCartAction;
