import { createStore } from "redux";
import booksJsonData from '../07_Utils/01_Data.json';

//Step 3. Reducer is invoked for dispatched action(add, delete, ...), and modifies the state accordingly
const bookReducer = (state = [], action) => {
    if (state.length === 0) {
        state = booksJsonData;
    }
    if (action.type === 'add') {
        if (action.payload) {
            console.log("2. add Logic Reached :- ", action);
            //Take a copy here!
            const copyState = [...state];
            copyState.push(action.payload); //const reference is being modified, so no impact
            return copyState;
        }
    }
    if (action.type === 'delete') {
        console.log("2. delete Logic Reached :- ", action.payload.id);
        if (action.payload) {
            //Take a copy here!
            let copiedState = [...state];
            let updatedState = copiedState.filter(eachBook => eachBook.id !== action.payload.id);
            return updatedState;
        }
    }
    return state;
}

//Step 1 :- Define your store!
export const bookStore = createStore(bookReducer);

//3. This will tell us the current state value.
bookStore.subscribe(() => {
    console.log("3. Current State :- ", bookStore.getState());
}) 