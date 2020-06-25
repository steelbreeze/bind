import { IUpdate } from './IUpdate';
/**
 * Implementation of the Observer pattern, allowing observers to attach to an object an be notified when its state changes.
 * @param TState The type of the underlying state.
 */
export declare class Observable<TState> {
    state: TState;
    observers: Array<IUpdate<TState>>;
    /**
     * Creates a new instance of the Observer class
     * @param state The initial state.
     */
    constructor(state: TState);
    /**
     * Receive updates when the state changes.
     * @param update A function to call when the state changes.
     * @param notify Optional flag to control if the observer should be notified upon attaching to receive the latest value.
     * @returns Returns the update function (so it can be later detached if required).
     */
    attach(update: IUpdate<TState>, notify?: boolean): IUpdate<TState>;
    /**
     * Stop receiving updates when the state changes.
     * @param update A previously attached function.
     */
    detach(update: IUpdate<TState>): void;
    /**
     * Updates all observers upon state change.
     */
    private notify;
    /**
     * Updates the state of the observable object, calling all observers to be notified.
     * @param state The new state for the observable object.
     */
    setState(state: TState, notify?: boolean): void;
    /**
     * Gets the current state of the observaable object.
     * @returns Returns the current state of the observable object
     */
    getState(): TState;
}
