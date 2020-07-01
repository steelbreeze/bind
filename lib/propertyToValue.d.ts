import { Observable } from './Observable';
import { Observer } from './Observer';
/**
 * Binds an HTMLInputElement or HTMLSelectElement's value to changes in an Observable object.
 * @typeParam TState The type of the underlying state.
 * @param elementId The id of the .
 * @param observable The observable state to update upon a change.
 * @param propertyName The name of the property with the observable state to update; defaults to the elementId.
 * @param f An optional function to convert the element value prior to updating the observable state.
 * @param notify An optional parameter to notify the control immediately; defaults to true.
 */
export declare function propertyToValue<TState>(elementId: string, observable: Observable<TState>, propertyName?: string, f?: (value: any) => any, notify?: boolean): Observer<TState>;
