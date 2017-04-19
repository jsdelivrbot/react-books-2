// state is not applicable state, only the state
// this reducer is responsible for

// Redux is responisble for our application state.
// Component state is complete different then our application state.

export default function (state = null, action) {
  switch (action.type) {
    case 'BOOK_SELECTED':
      return action.payload;
    default:
  }

  return state;
}
