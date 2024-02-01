function Reducer(state, action) {
  //It should be a pure function!......state is the previous values and the action is the values that pass when the dispatch is calling
  switch (action.type) {
    case "data-update":
      return {
        ...state,
        data: state.data + action.data,
      };
    case "color-update":
      return {
        ...state,
        color: action.data,
      };
  }
}
export default Reducer;