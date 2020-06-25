import { Observable } from "./Observable";
import { IUpdate } from "./IUpdate";

export function value<TState>(element: HTMLInputElement | HTMLSelectElement, observable: Observable<TState>, getString: (state: TState) => string, notify: boolean = true): IUpdate<TState> {
    // for input field, bind to the value attribute
    return observable.attach(state => {
        const value = getString(state);

        if (element.value !== value) { // TODO: change check to the origin of the upadate
            element.value = value;
        }
    }, notify);
}
