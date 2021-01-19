export default (state = "", action) => {
  switch (action.type) {
    case "MESSAGE_CENTER":
      return action.payload;

    default:
      return state;
  }
};
