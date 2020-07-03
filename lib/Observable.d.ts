import { Observer } from './Observer';
/**
 * Implementation of the Observer pattern, allowing observers to attach to an object an be notified when its state changes. Additionally provides helper methods to bind to and from HTML elements.
 * @typeParam TState The type of the underlying state.
 */
export declare class Observable<TState> {
    state: TState;
    /**
     * The callbacks to call on a state change.
     * @private
     */
    private observers;
    /**
     * Creates a new instance of the Observer class
     * @param state The initial underlying state.
     */
    constructor(state: TState);
    /**
     * Subscribe for a callback when the underlying state changes.
     * @param observer A function to call when the state changes; takes the underlying state as a parameter.
     * @param notify Optional flag to control if the observer should be notified immediately with the curent value.
     */
    attach(observer: Observer<TState>, notify: boolean): void;
    /**
     * Unsubscribe to stop receiving updates when the state changes.
     * @param observer A previously subscribed observer.
     */
    detach(observer: Observer<TState>): void;
    /**
     * Update the underlying state and notify observers.
     */
    setState(state: TState): void;
    /**
     * Update all observers with the current underlying state.
     * @private
     */
    private notify;
    /**
     * Bind to state changes by updating the textContent of any HTMLElement.
     * @param element The HTMLElement to update on state changes.
     * @param f A function that takes the underlying state and returns the desired text.
     * @param notify Optional flag to control if the element should be updated immediately based on the curent underlying state.
     */
    toText(element: HTMLElement, f: (state: TState) => string | null, notify?: boolean): Observer<TState>;
    /**
     * Bind to state changes by updating the innerHTML of any HTMLElement.
     * @param element The HTMLElement to update on state changes.
     * @param f A function that takes the underlying state and returns the desired HTML.
     * @param notify Optional flag to control if the element should be updated immediately based on the curent underlying state.
     */
    toHTML(element: HTMLElement, f: (state: TState) => string, notify?: boolean): Observer<TState>;
    /**
     * Bind to state changes by updating the value of an HTMLInputElement or HTMLSelectElement.
     * @param element The HTMLInputElement or HTMLSelectElement to update on state changes.
     * @param f A function that takes the underlying state and returns the desired value.
     * @param notify Optional flag to control if the element should be updated immediately based on the curent underlying state.
     */
    toValue(element: HTMLInputElement | HTMLSelectElement, f: (state: TState) => string, notify?: boolean): Observer<TState>;
    fromValue(element: HTMLInputElement | HTMLSelectElement, f: (state: TState, value: string) => void): void;
}
