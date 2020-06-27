import { Observable } from './Observable';
import { IUpdate } from './IUpdate';

export function stateToHTML<TState>(elementId: string, observable: Observable<TState>, f: (state: TState) => string): IUpdate<TState> {
    const element = document.getElementById(elementId);

    if (element) {
        // any other HTMLElement, bind to the innerHTML attribute
        return observable.attach(((state: TState) => element.innerHTML = f(state)));
    } else {
        throw new Error(`${elementId} is not an element`);
    }
}
