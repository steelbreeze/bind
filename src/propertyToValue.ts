import { Observable } from './Observable';
import { Observer } from './Observer';

/**
 * Binds an HTMLInputElement or HTMLSelectElement's value to changes in an Observable object.
 * @typeParam TState The type of the underlying state.
 * @param element The element whose value to bind a property of the observable state to.
 * @param observable The observable state to update upon a change.
 * @param propertyName The name of the property with the observable state to update; defaults to the element's id.
 * @param f An optional function to convert the element value prior to updating the observable state.
 * @param notify An optional parameter to notify the control immediately; defaults to true.
 */
export function propertyToValue<TState>(element: HTMLInputElement | HTMLSelectElement, observable: Observable<TState>, propertyName: string = element.id, f: (value: any) => any = (value: any) => value, notify: boolean = true): Observer<TState> {
    // for input field, bind to the value attribute
    return observable.attach((state: any) => {
        const value: any = f(state ? state[propertyName] : undefined);

        if (element.value !== value) {
            element.value = value;
        }
    }, notify);
}
