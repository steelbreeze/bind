import { Observable } from './Observable';
import { Value } from './Value';
import { IUpdate } from './IUpdate';
export declare function propertyToValue<TState>(elementId: string, observable: Observable<TState>, propertyName?: string, f?: (value: Value) => Value): IUpdate<TState>;
