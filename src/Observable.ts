import { Observer } from './Observer';

/**
 * Implementation of the Observer pattern, allowing observers to attach to an object an be notified when its state changes. Additionally provides helper methods to bind to and from HTML elements.
 * @typeParam TState The type of the underlying state.
 */
export class Observable<TState> {
    /**
     * The callbacks to call on a state change.
     * @private
     */
    private observers: Array<Observer<TState>> = [];

    /**
     * Creates a new instance of the Observer class
     * @param state The underlying state.
     */
    public constructor(public state: TState) { }

    /**
     * Subscribe for a callback when the underlying state changes.
     * @param observer A function to call when the state changes; takes the underlying state as a parameter.
     * @param notify Optional flag to control if the observer should be notified immediately with the curent value.
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
     * Unsubscribe to stop receiving updates when the state changes.
     * @param observer A previously subscribed observer.
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
     * Create a callback function that will update the observable state in response to an event
     * @param f A callback to use to update the state.
     */
    public update(f: (state: TState) => void): void {
        // update the state
        f(this.state);

        this.notify();
    }

    private notify(): void{
        // update the observers
        for (const observer of this.observers) {
            observer(this.state);
        }
    }

    public replace(state: TState) {
        this.state = state;

        this.notify();
    }
}
