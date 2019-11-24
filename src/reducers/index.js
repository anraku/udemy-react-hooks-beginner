export const reducer = (state, action) => {
  switch (action.type) {
    case 'create':
      return state.events.push(
        {
          id: action.payload.id,
          title: action.payload.title,
          body: action.payload.body
        }
      );
    case 'delete':
      return state.events.filter(n => n !== action.payload.id)
    case 'all_delete':
      return { events: [] };
    default:
      throw new Error();
  }
}

export const initialState = {
  events: [
    { id:1, title: "タイトル1", body: "ボディ1" },
    { id:2, title: "タイトル2", body: "ボディ2" },
  ]
}