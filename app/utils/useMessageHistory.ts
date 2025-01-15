import { create } from 'zustand';
export interface MessageObject{
  message:string,
  sender:string 
}
export interface MessageHistoryStore {
  botMessages: MessageObject[];
  userMessages: MessageObject[];
  messageHistory: MessageObject[]
  promptMessageHistory: string

  addBotMessage: (message: MessageObject) => void
  addUserMessage: (message: MessageObject) => void
  addToMessageHistory: (message: MessageObject) => void
  addToPromptMessageHistory: (message: string) => void

  deleteHistory: () => void
}

const useMessageHistoryData = create<MessageHistoryStore>((set) => ({
    botMessages: [],
    userMessages: [],
    messageHistory: [],
    promptMessageHistory: "",

    addUserMessage: (newUserMessage: MessageObject) => set((state) => ({userMessages: [...state.userMessages, newUserMessage]})),
    addBotMessage: (newBotMessage:MessageObject)=> set((state)=>({botMessages: [...state.botMessages, newBotMessage]})),
    addToMessageHistory: (newMessage: MessageObject) => set((state) => ({messageHistory: [...state.messageHistory, newMessage]})),  
    addToPromptMessageHistory: (newPromptMessage: string) => set((state) => ({promptMessageHistory: state.promptMessageHistory + '\n' +newPromptMessage})),
    
    deleteHistory: () => set({botMessages: [], userMessages: [], messageHistory: [], promptMessageHistory: ""})
}));

export default useMessageHistoryData;
