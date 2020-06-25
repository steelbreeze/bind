import { Observable } from "./Observable";
import { IUpdate } from "./IUpdate";

export function text<TState>(element: HTMLElement, observable: Observable<TState>, getString: (state: TState) => string, notify: boolean = true): IUpdate<TState> {
    // any other HTMLElement, bind to the innerHTML attribute
    return observable.attach(state => element.innerText = getString(state), notify);
}
