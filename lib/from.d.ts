import { Observable } from "./Observable";
export declare function from<TState>(element: HTMLInputElement | HTMLSelectElement, observable: Observable<TState>, updateState: (value: string, state: TState) => TState): void;
