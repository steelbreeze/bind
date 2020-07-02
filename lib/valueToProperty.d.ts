import { Observable } from './Observable';
/**
 * Binds an Observable object to value changes within an HTMLInputElement or HTMLSelectElement.
 * @typeParam TState - The type of the underlying state.
 * @param element The element whose value to update a property of the observable state from.
 * @param observable The observable state to update upon a change.
 * @param propertyName The name of the property with the observable state to update; defaults to the element's id.
 * @param f - An optional function to convert the element value prior to updating the observable state.
 */
export declare function valueToProperty<TState>(element: HTMLInputElement | HTMLSelectElement, observable: Observable<TState>, propertyName?: string, f?: (value: any) => any): void;
