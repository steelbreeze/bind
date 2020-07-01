import { Observable } from './Observable';
import { Observer } from './Observer';

export function stateToHTML<TState>(elementId: string, observable: Observable<TState>, f: (state: TState) => string, notify: boolean = true): Observer<TState> {
    const element = document.getElementById(elementId);

    if (element) {
        // any other HTMLElement, bind to the innerHTML attribute
        return observable.attach(((state: TState) => element.innerHTML = f(state)), notify);
    } else {
        throw new Error(`${elementId} is not an element`);
    }
}
