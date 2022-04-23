import { combineReducers, createStore } from "redux";
import { loadOptions, saveOptions } from "./localStorage";
import { counterReducer } from "./counterReducer";

const rootReducer = combineReducers({
    counter: counterReducer
});

const persistedState = loadOptions();

export const store = createStore(rootReducer, persistedState);

store.subscribe(() => {
    saveOptions({
        counter: store.getState().counter
        // counter: {
        //     options: store.getState().counter.options
        // }
    })
})

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>

// @ts-ignore
window.store = store;