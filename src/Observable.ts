import { IUpdate } from './IUpdate';

/**
 * Implementation of the Observer pattern, allowing observers to attach to an object an be notified when its state changes.
 * @param TState The type of the underlying state.
 */
export class Observable<TState> {
    observers: Array<IUpdate<TState>> = [];

    /**
     * Creates a new instance of the Observer class
     * @param state The initial state.
     */
    public constructor(public state: TState) {
    }

    /**
     * Receive updates when the state changes.
     * @param update A function to call when the state changes.
     * @param notify Optional flag to control if the observer should be notified upon attaching to receive the latest value.
     * @returns Returns the update function (so it can be later detached if required).
     */
    attach(update: IUpdate<TState>, notify: boolean = true): IUpdate<TState> {
        this.observers.push(update);

        if (notify) {
            update(this.state);
        }

        return update;
    }

    /**
     * Stop receiving updates when the state changes.
     * @param update A previously attached function.
     */
    public detach(update: IUpdate<TState>): void {
        const index = this.observers.indexOf(update);

        if (index !== -1) {
            this.observers.splice(index, 1);
        }
    }

    /**
     * Updates all observers upon state change.
     */
    private notify(): void {
        for (const observer of this.observers) {
            observer(this.state);
        }
    }

    /**
     * Updates the state of the observable object, calling all observers to be notified.
     * @param state The new state for the observable object.
     */
    public setState(state: TState, notify: boolean = true): void {
        this.state = state;

        if (notify) {
            this.notify();
        }
    }

    /**
     * Gets the current state of the observaable object.
     * @returns Returns the current state of the observable object
     */
    public getState(): TState {
        return this.state;
    }
}
