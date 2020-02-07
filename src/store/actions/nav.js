import * as actionType from "./actionType";

export const openAddChatPopup = () => {
  return {
    type: actionType.OPEN_ADD_CHAT_POPUP
  };
};

export const closeAddChatPopup = () => {
  return {
    type: actionType.CLOSE_ADD_CHAT_POPUP
  };
};
