import { Observable } from './Observable';
import { Observer } from './Observer';
export declare function stateToHTML<TState>(elementId: string, observable: Observable<TState>, f: (state: TState) => string, notify?: boolean): Observer<TState>;
