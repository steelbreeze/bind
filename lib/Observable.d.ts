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
     * @param state The underlying state.
     */
    constructor(state: TState);
    /**
     * Subscribe for a callback when the underlying state changes.
     * @param observer A function to call when the state changes; takes the underlying state as a parameter.
     * @param notify Optional flag to control if the observer should be notified immediately with the curent value.
     */
    attach(observer: Observer<TState>, notify?: boolean): Observer<TState>;
    /**
     * Unsubscribe to stop receiving updates when the state changes.
     * @param observer A previously subscribed observer.
     */
    detach(observer: Observer<TState>): void;
    /**
     * Create a callback function that will update the observable state in response to an event
     * @param f A callback to use to update the state.
     */
    update(f: (state: TState) => void): void;
    private notify;
    replace(state: TState): void;
}
