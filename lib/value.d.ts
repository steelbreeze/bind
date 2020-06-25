import { Observable } from "./Observable";
import { IUpdate } from "./IUpdate";
export declare function value<TState>(element: HTMLInputElement | HTMLSelectElement, observable: Observable<TState>, getString: (state: TState) => string, notify?: boolean): IUpdate<TState>;
