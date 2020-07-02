import { Observable } from './Observable';
import { Observer } from './Observer';
export declare function stateToHTML<TState>(element: HTMLElement, observable: Observable<TState>, f: (state: TState) => string, notify?: boolean): Observer<TState>;
