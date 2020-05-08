const ADD_MESSAGE = "ADD-MESSAGE";


export type MessagesDataType = {
  id: number
  message: string
}

export type dialogsData = {
  id: number
  name: string
}
let initialState   = {
  messagesData: [
    { id: 1 , message: "Hi" },
    { id: 2, message: "How are you?" },
    { id: 3, message: "What do you do" },
    { id: 4, message: "Ho-ho" },
  ] as Array<MessagesDataType>,

  dialogsData: [
    { id: 1, name: "Dima" },
    { id: 2, name: "Rostik" },
    { id: 3, name: "Andrey" },
    { id: 4, name: "Maxim" },
    { id: 5, name: "Roma" },
  ] as Array<dialogsData>,
};

type InitialStateType = typeof initialState
const dialogsReducer = (state = initialState, action: ActionsTypes):InitialStateType => {
  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = {
        id: 6,
        message: action.message,
      };
      return {
        ...state,
        messagesData: [...state.messagesData, newMessage],
      };
    default:
      return state;
  }
};

type ActionsTypes = AddMessageType
type AddMessageType = {
  type: typeof ADD_MESSAGE 
  message: string
}
export const addMessage = (message: string):AddMessageType => ({
  type: ADD_MESSAGE,
  message: message,
});

export default dialogsReducer;
