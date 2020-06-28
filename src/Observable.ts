import { IObserver } from './IObserver';

/**
 * Implementation of the Observer pattern, allowing observers to attach to an object an be notified when its state changes.
 * @param TState The type of the underlying state.
 */
export class Observable<TState> {
    private observers: Array<IObserver<TState>> = [];
    private _state: TState;

    /**
     * Creates a new instance of the Observer class
     * @param state The initial state.
     */
    public constructor(state: TState) {
        this._state = state;
    }

    /**
     * Receive updates when the state changes.
     * @param observer A function to call when the state changes.
     * @param notify Optional flag to control if the observer should be notified upon attaching to receive the latest value.
     * @returns Returns the update function (so it can be later detached if required).
     */
    attach(observer: IObserver<TState>, notify: boolean = true): IObserver<TState> {
        this.observers.push(observer);

        if (notify) {
            observer(this.state);
        }

        return observer;
    }

    /**
     * Stop receiving updates when the state changes.
     * @param observer A previously attached function.
     */
    public detach(observer: IObserver<TState>): void {
        const index = this.observers.indexOf(observer);

        if (index !== -1) {
            this.observers.splice(index, 1);
        }
    }

    /**
     * Update the curent state and notify any observers
     */
    set state(value: TState) {
        this._state = value;

        // update the observers
        for (const observer of this.observers) {
            observer(this.state);
        }
    }

    /**
     * Returns the currernt state of the observable.
     */
    get state() {
        return this._state;
    }
}
