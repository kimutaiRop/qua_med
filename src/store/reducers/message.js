import * as actionType from "../actions/actionType";
import { updateObject } from "../utility";

const initialState = {
  messages: [],
  chats: []
};

const addMessage = (state, action) => {
  return updateObject(state, {
    messages: [...state.messages, action.message]
  });
};

const setMessages = (state, action) => {
  return updateObject(state, {
    messages: action.messages.reverse()
  });
};

const setChats = (state, action) => {
  return updateObject(state, {
    chats: action.chats
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.ADD_MESSAGE:
      return addMessage(state, action);
    case actionType.SET_MESSAGES:
      return setMessages(state, action);
    case actionType.GET_CHATS_SUCCESS:
      return setChats(state, action);
    default:
      return state;
  }
};

export default reducer;
