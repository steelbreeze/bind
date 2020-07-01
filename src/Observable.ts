import { Observer } from './Observer';

/**
 * Implementation of the Observer pattern, allowing observers to attach to an object an be notified when its state changes.
 * @typeParam TState The type of the underlying state.
 */
export class Observable<TState> {
    private observers: Array<Observer<TState>> = [];
    private _state: TState;

    /**
     * Creates a new instance of the Observer class
     * @param state The initial underlying state.
     */
    public constructor(state: TState) {
        // create the initial state
        this._state = state;
    }

    /**
     * Receive updates when the state changes.
     * @param observer A function to call when the state changes.
     * @param notify Optional flag to control if the observer should be notified upon attaching to receive the latest value.
     * @returns Returns the update function (so it can be later detached if required).
     */
    attach(observer: Observer<TState>, notify: boolean = true): Observer<TState> {
        // add the new observer
        this.observers.push(observer);

        // call the observer if required (initial value on subscription)
        if (notify) {
            observer(this.state);
        }

        return observer;
    }

    /**
     * Stop receiving updates when the state changes.
     * @param observer A previously attached function.
     */
    public detach(observer: Observer<TState>): void {
        // find the observer
        const index = this.observers.indexOf(observer);

        // remove the observer
        if (index !== -1) {
            this.observers.splice(index, 1);
        }
    }

    /**
     * The underlying state being observed.
     */
    set state(value: TState) {
        // update the new state
        this._state = value;

        // update the observers
        for (const observer of this.observers) {
            observer(this.state);
        }
    }

    get state() {
        return this._state;
    }
}
