import { Observable } from "./Observable";
import { IUpdate } from "./IUpdate";

// TODO: replace element func with clasess and use those to represent the HTML structure

export function html<TState>(element: HTMLElement, observable: Observable<TState>, getString: (state: TState) => Array<string>, notify: boolean = true): IUpdate<TState> {
    // any other HTMLElement, bind to the innerHTML attribute
    return observable.attach(state => element.innerHTML = getString(state).join(""), notify);
}
