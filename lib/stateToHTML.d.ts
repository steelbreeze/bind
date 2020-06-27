import { Observable } from './Observable';
import { IUpdate } from './IUpdate';
export declare function stateToHTML<TState>(elementId: string, observable: Observable<TState>, f: (state: TState) => string): IUpdate<TState>;
