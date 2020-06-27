import { Observable } from './Observable';
import { Value } from './Value';
/**
 * Updates a property within observable state when the value of an HTMLInputElement or HTMLSelectElement changes.
 * @param elementId The id of the element to monitor changes of value.
 * @param observable The observable state to update upon a change.
 * @param propertyName The name of the property with the observable state to update; defaults to the elementId.
 * @param f An optional function to convert the element value prior to updating the observable state.
 */
export declare function valueToProperty<TState>(elementId: string, observable: Observable<TState>, propertyName?: string, f?: (value: Value) => Value): void;
