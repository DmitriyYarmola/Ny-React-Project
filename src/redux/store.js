import profileReducer from "./profile-reducer"
import sideBarReducer from "./sidebar-reducer"
import dialogsReducer from "./dialogs-reducer"


let store = {
    _state: {

        profilePage: {

            postsData: [
                { id: 1, title: 'My story', message: 'Hello, how are you?' },
                { id: 1, title: 'Second post', message: 'Test message, oh dadada' }
            ],
            newPostText: 'dmitriy yarmola '
        },

        dialogsPage: {

            messagesData: [

                { id: 1, message: "Hi" },
                { id: 2, message: "How are you?" },
                { id: 3, message: "What do you do" },
                { id: 4, message: "Ho-ho" },
            ],

            newMessageText: '',

            dialogsData: [
                { id: 1, name: "Dima" },
                { id: 2, name: "Rostik" },
                { id: 3, name: "Andrey" },
                { id: 4, name: "Maxim" },
                { id: 5, name: "Roma" }
            ],
        },

        sidebar: {
            friendList: [
                { id: 1, name: 'Alax' },
                { id: 2, name: 'Dmitriy' },
                { id: 3, name: 'Martin' },

            ]
        },

        


    },

    getStore() {
        return this._state
    },

    rerenderEntireTree() {
        console.log('state changed')
    },

    subscribe(observer) {
        this.rerenderEntireTree = observer
    },

    dispatch(action) {
        profileReducer(this._state.profilePage, action)
        dialogsReducer(this._state.dialogsPage, action)
        sideBarReducer(this._state.sidebar, action)

        this.rerenderEntireTree(this._state)
    }



}


export default store