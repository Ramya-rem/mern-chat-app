import {create} from 'zustand';
const useConversation=create((set) =>({
    //going to be our Global state now that shpuld be obj
    selectedConversation: null, //default is null
	setSelectedConversation: (selectedConversation) => set({ selectedConversation }),
	messages: [],//bydefault meg can be empty array
	setMessages: (messages) => set({ messages }),

}));

export default useConversation;

//we would like to crarte hook to fetch the conversations fromour database