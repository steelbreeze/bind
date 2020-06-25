import { Observable } from "./Observable";

export function from<TState>(element: HTMLInputElement | HTMLSelectElement, observable: Observable<TState>, updateState: (value: string, state: TState) => TState): void {
    // for input fields, add an event listner for value changes
    element.onchange = () => {
        const state = updateState(element.value, observable.getState());

        if (state !== observable.getState()) {
            observable.setState(state);
        }
    };
}

