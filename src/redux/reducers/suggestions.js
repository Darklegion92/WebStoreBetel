const defaultState = [];

export default function reducer(state = defaultState, { type, payload }) {
  switch (type) {
    case 'findSuggestions':{
      return (
        {
          id: 1,
          tutle: 'findSuggestions'
        }
      )
    }
    default:
      return state;
  }
}
