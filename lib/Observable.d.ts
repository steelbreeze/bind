import { Observer } from './Observer';
/**
 * Implementation of the Observer pattern, allowing observers to attach to an object an be notified when its state changes.
 * @typeParam TState The type of the underlying state.
 */
export declare class Observable<TState> {
    private observers;
    private _state;
    /**
     * Creates a new instance of the Observer class
     * @param state The initial underlying state.
     */
    constructor(state: TState);
    /**
     * Receive updates when the state changes.
     * @param observer A function to call when the state changes.
     * @param notify Optional flag to control if the observer should be notified upon attaching to receive the latest value.
     * @returns Returns the update function (so it can be later detached if required).
     */
    attach(observer: Observer<TState>, notify?: boolean): Observer<TState>;
    /**
     * Stop receiving updates when the state changes.
     * @param observer A previously attached function.
     */
    detach(observer: Observer<TState>): void;
    /**
     * The underlying state being observed.
     */
    set state(value: TState);
    get state(): TState;
}
