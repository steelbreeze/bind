import { Observable } from "./Observable";
import { IUpdate } from "./IUpdate";
export declare function html<TState>(element: HTMLElement, observable: Observable<TState>, getString: (state: TState) => Array<string>, notify?: boolean): IUpdate<TState>;
