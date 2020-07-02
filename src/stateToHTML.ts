import { Observable } from './Observable';
import { Observer } from './Observer';

export function stateToHTML<TState>(element: HTMLElement, observable: Observable<TState>, f: (state: TState) => string, notify: boolean = true): Observer<TState> {
    // any other HTMLElement, bind to the innerHTML attribute
    return observable.attach(((state: TState) => element.innerHTML = f(state)), notify);
}
