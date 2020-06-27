import { Observable } from './Observable';
import { Value } from './Value';
import { IUpdate } from './IUpdate';

export function propertyToValue<TState>(elementId: string, observable: Observable<TState>, propertyName: string = elementId, f: (value: Value) => Value = (value: Value) => value): IUpdate<TState> {
    const element = document.getElementById(elementId);

    if (element) {
        if (element instanceof HTMLInputElement || element instanceof HTMLSelectElement) {
            // for input field, bind to the value attribute
            return observable.attach((state: any) => {
                const value: any = f(state[propertyName]);

                if (element.value !== value) {
                    element.value = value;
                }
            });
        } else {
            throw new Error(`${elementId} is not an HTMLElement or HTMLSelectElement`);
        }
    } else {
        throw new Error(`${elementId} is not an element`);
    }
}
