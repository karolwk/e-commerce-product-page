import { reducer } from './reducers';
import { ActionType } from './actions-types';
import { InitialState } from './reducers';
import { exampleItems } from '../shared/exampleItems';

describe('reducer', () => {
  const initialState: InitialState = {
    items: [],
    itemCount: 0,
  };

  it('should add items to basket and properly count them', () => {
    let state = { ...initialState };

    state = reducer(state, {
      type: ActionType.ADD_TO_CART,
      payload: exampleItems[0],
    });

    expect(state.items[0]).toEqual(exampleItems[0]);
    expect(state.itemCount).toEqual(3);

    state = reducer(state, {
      type: ActionType.ADD_TO_CART,
      payload: exampleItems[1],
    });

    expect(state.items.length).toEqual(2);
    expect(state.itemCount).toEqual(5);
  });

  it('should not duplicate existing item just increment it quantity', () => {
    let state = { ...initialState };

    state = reducer(state, {
      type: ActionType.ADD_TO_CART,
      payload: exampleItems[0],
    });
    state = reducer(state, {
      type: ActionType.ADD_TO_CART,
      payload: exampleItems[0],
    });

    expect(state.items.length).toEqual(1);
    expect(state.items[0].quantity).toEqual(6);
    expect(state.itemCount).toEqual(6);
  });

  it('should remove items from basket and properly count them', () => {
    let state = { ...initialState };
    state = reducer(state, {
      type: ActionType.ADD_TO_CART,
      payload: exampleItems[0],
    });
    state = reducer(state, {
      type: ActionType.ADD_TO_CART,
      payload: exampleItems[1],
    });

    state = reducer(state, { type: ActionType.REMOVE_FROM_CART, payload: 1 });
    expect(state.items.length).toEqual(1);
    expect(state.items[0].id).toEqual(2);
    expect(state.itemCount).toEqual(2);
    state = reducer(state, { type: ActionType.REMOVE_FROM_CART, payload: 2 });
    state = reducer(state, { type: ActionType.REMOVE_FROM_CART, payload: 2 });
    expect(state.itemCount).toEqual(0);
    expect(state.items.length).toEqual(0);
  });
});
