import { Observable } from "./Observable";
import { IUpdate } from "./IUpdate";
export declare function text<TState>(element: HTMLElement, observable: Observable<TState>, getString: (state: TState) => string, notify?: boolean): IUpdate<TState>;
