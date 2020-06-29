import { Observable } from './Observable';
import { IObserver } from './IObserver';
export declare function stateToHTML<TState>(elementId: string, observable: Observable<TState>, f: (state: TState) => string, notify?: boolean): IObserver<TState>;
