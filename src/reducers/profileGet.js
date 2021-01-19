export default (state = [], action) => {
  switch (action.type) {
    case "PROFİLE_GET":
      return action.payload;

    default:
      return state;
  }
};
