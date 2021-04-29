export const initialState = {
  basket: [],
  user: null,
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => +amount + +item.price, 0);
// https://stackoverflow.com/questions/23247859/better-way-to-sum-a-property-value-in-an-array
// basket?.reduce((amount, item) => item.price + amount, 0);

function reducer(state, action) {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      //Logic for adding item to basket
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "EMPTY_BASKET":
      return {
        ...state,
        basket: [],
      };
    case "REMOVE_FROM_BASKET":
      // Logic to remove items from basket

      // find the index of the item in the cart array
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      // we copy the basket here
      let newBasket = [...state.basket];

      if (index >= 0) {
        // item exists in basket, remove it
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.id} as its not in basket)`
        );
      }
      return {
        ...state,
        basket: newBasket,
      };
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
}
export default reducer;
