import { Observable } from './Observable';

/**
 * Binds an Observable object to value changes within an HTMLInputElement or HTMLSelectElement.
 * @typeParam TState - The type of the underlying state.
 * @param elementId - The id of the element to monitor changes of value.
 * @param observable - The observable state to update upon a change.
 * @param propertyName - The name of the property with the observable state to update; defaults to the elementId.
 * @param f - An optional function to convert the element value prior to updating the observable state.
 */
export function valueToProperty<TState>(elementId: string, observable: Observable<TState>, propertyName: string = elementId, f: (value: any) => any = (value: any) => value): void {
    const element = document.getElementById(elementId);

    if (element) {
        if (element instanceof HTMLInputElement || element instanceof HTMLSelectElement) {
            // for input fields, add an event listner for value changes
            element.onchange = () => {
                let state: any = observable.state || {};
                let value: any = f(element.value);

                // only update the observable state if it has changed
                if (value !== state[propertyName]) {
                    state[propertyName] = value;

                    observable.state = state;
                }
            };
        } else {
            throw new Error(`${elementId} is not an HTMLInputElement or HTMLSelectElement`);
        }
    } else {
        throw new Error(`${elementId} is not an element`);
    }
}
