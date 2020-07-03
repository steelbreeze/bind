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
    attach(observer: Observer<TState>, notify: boolean): Observer<TState>;
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
     * @param target The type of binding to perform, one of: [textContent], [innerHTML], or [value].
     * @param notify Optional flag to control if the element should be updated immediately based on the curent underlying state.
     */
    to(element: HTMLElement, target: (element: HTMLElement, f: (state: TState) => string) => Observer<TState>, f: (state: TState) => string, notify?: boolean): Observer<TState>;
    /**
     * Receive state changes from value changes of an HTMLInputElement of HTMLSelectElement.
     * @param element
     * @param f A function to update the underlying state when the value changes.
     */
    from(element: HTMLInputElement | HTMLSelectElement, f: (state: TState, value: string) => void): void;
}
/**
 * Creates an [Observer] that updates an elements textContent upon a state change.
 * @param element The element to update.
 * @param f The function to convert from the observable state to the text content.
 * @returns Returns an [Observer].
 */
export declare function textContent<TState>(element: HTMLElement, f: (state: TState) => string): (state: TState) => string;
/**
 * Creates an [Observer] that updates an elements innerHTML upon a state change.
 * @param element The element to update.
 * @param f The function to convert from the observable state to the HTML content.
 * @returns Returns an [Observer].
 */
export declare function innerHTML<TState>(element: HTMLElement, f: (state: TState) => string): (state: TState) => string;
/**
 * Creates an [Observer] that updates an elements value upon a state change.
 * @param element The element to update.
 * @param f The function to convert from the observable state to the value.
 * @returns Returns an [Observer].
 */
export declare function value<TState>(element: HTMLSelectElement | HTMLInputElement, f: (state: TState) => string): (state: TState) => string;
