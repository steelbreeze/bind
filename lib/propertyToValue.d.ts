import { Observable } from './Observable';
import { Value } from './Value';
import { IObserver } from './IObserver';
export declare function propertyToValue<TState>(elementId: string, observable: Observable<TState>, propertyName?: string, f?: (value: Value) => Value): IObserver<TState>;
