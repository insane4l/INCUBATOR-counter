import { CounterOptionsType } from "./counterReducer";

export const loadOptions = () => {
    try {
        const serializedState = localStorage.getItem('counter-options');
        if (serializedState) return JSON.parse(serializedState);
    } catch(e) {
        return undefined;
    }
};


export const saveOptions = (state: PersistedStateType) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('counter-options', serializedState);
    } catch(e) {

    }
};

type PersistedStateType = {
    counter: {options: CounterOptionsType}
}