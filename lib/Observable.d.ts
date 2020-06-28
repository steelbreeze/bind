import { IObserver } from './IObserver';
/**
 * Implementation of the Observer pattern, allowing observers to attach to an object an be notified when its state changes.
 * @param TState The type of the underlying state.
 */
export declare class Observable<TState> {
    private observers;
    private _state;
    /**
     * Creates a new instance of the Observer class
     * @param state The initial state.
     */
    constructor(state: TState);
    /**
     * Receive updates when the state changes.
     * @param observer A function to call when the state changes.
     * @param notify Optional flag to control if the observer should be notified upon attaching to receive the latest value.
     * @returns Returns the update function (so it can be later detached if required).
     */
    attach(observer: IObserver<TState>, notify?: boolean): IObserver<TState>;
    /**
     * Stop receiving updates when the state changes.
     * @param observer A previously attached function.
     */
    detach(observer: IObserver<TState>): void;
    /**
     * Update the curent state and notify any observers
     */
    set state(value: TState);
    /**
     * Returns the currernt state of the observable.
     */
    get state(): TState;
}
