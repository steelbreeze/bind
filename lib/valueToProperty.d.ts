import { Observable } from './Observable';
/**
 * Binds an Observable object to value changes within an HTMLInputElement or HTMLSelectElement.
 * @typeParam TState - The type of the underlying state.
 * @param elementId - The id of the element to monitor changes of value.
 * @param observable - The observable state to update upon a change.
 * @param propertyName - The name of the property with the observable state to update; defaults to the elementId.
 * @param f - An optional function to convert the element value prior to updating the observable state.
 */
export declare function valueToProperty<TState>(elementId: string, observable: Observable<TState>, propertyName?: string, f?: (value: any) => any): void;
