import { Observer } from './Observer';

/**
 * Implementation of the Observer pattern, allowing observers to attach to an object an be notified when its state changes.
 * @typeParam TState The type of the underlying state.
 */
export class Observable<TState> {
    private observers: Array<Observer<TState>> = [];

    /**
     * Creates a new instance of the Observer class
     * @param state The initial underlying state.
     */
    public constructor(public state: TState) {
    }

    /**
     * Receive updates when the state changes.
     * @param observer A function to call when the state changes.
     * @param notify Optional flag to control if the observer should be notified upon attaching to receive the latest value.
     * @returns Returns the update function (so it can be later detached if required).
     */
    attach(observer: Observer<TState>, notify: boolean): void {
        // add the new observer
        this.observers.push(observer);

        // call the observer if required (initial value on subscription)
        if (notify) {
            observer(this.state);
        }
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
     * Update the underlying state and notify observers.
     */
    public setState(state: TState): void {
        // update the new state
        this.state = state;

        // notify observers
        this.notify();
    }

    /**
     * Update all observers with the current underlying state.
     */
    private notify(): void {
        // update the observers
        for (const observer of this.observers) {
            observer(this.state);
        }
    }

    toHTML(element: HTMLElement, f: (state: TState) => string, notify: boolean = true): Observer<TState> {
        const observer = (state: TState) => element.innerHTML = f(state);
        
        this.attach(observer, notify);

        return observer;
    }

    toValue(element: HTMLInputElement | HTMLSelectElement, f: (state: TState) => string, notify: boolean = true): Observer<TState> {
        const observer = (state: TState) => element.value = f(state);
        
        this.attach(observer, notify);

        return observer;
    }

    fromValue(element: HTMLInputElement | HTMLSelectElement, f: (state: TState, value: string) => void): void {
        element.onchange = () => {
            // apply the new value to the observable state
            f(this.state, element.value);

            // notify the observers
            this.notify();
        };
    }
}
