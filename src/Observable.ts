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
     * @param state The initial underlying state.
     */
    public constructor(public state: TState) { }

    /**
     * Subscribe for a callback when the underlying state changes.
     * @param observer A function to call when the state changes; takes the underlying state as a parameter.
     * @param notify Optional flag to control if the observer should be notified immediately with the curent value.
     */
    attach(observer: Observer<TState>, notify: boolean): Observer<TState> {
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
     * @private
     */
    private notify(): void {
        // update the observers
        for (const observer of this.observers) {
            observer(this.state);
        }
    }

    /**
     * Bind to state changes by updating the textContent of any HTMLElement.
     * @param element The HTMLElement to update on state changes.
     * @param f A function that takes the underlying state and returns the desired text.
     * @param target The type of binding to perform, one of: [textContent], [innerHTML], or [value].
     * @param notify Optional flag to control if the element should be updated immediately based on the curent underlying state.
     */
    to(element: HTMLElement, target: (element: HTMLElement, f: (state: TState) => string) => Observer<TState>, f: (state: TState) => string, notify: boolean = true): Observer<TState> {
        return this.attach(target(element, f), notify);
    }

    /**
     * Receive state changes from value changes of an HTMLInputElement of HTMLSelectElement.
     * @param element 
     * @param f A function to update the underlying state when the value changes.
     */
    from(element: HTMLInputElement | HTMLSelectElement, f: (state: TState, value: string) => void): void {
        element.onchange = () => {
            // apply the new value to the observable state
            f(this.state, element.value);

            // notify the observers
            this.notify();
        };
    }
}

/**
 * Creates an [Observer] that updates an elements textContent upon a state change.
 * @param element The element to update.
 * @param f The function to convert from the observable state to the text content.
 * @returns Returns an [Observer].
 */
export function textContent<TState>(element: HTMLElement, f: (state: TState) => string) {
    return (state: TState) => element.textContent = f(state);
}

/**
 * Creates an [Observer] that updates an elements innerHTML upon a state change.
 * @param element The element to update.
 * @param f The function to convert from the observable state to the HTML content.
 * @returns Returns an [Observer].
 */
export function innerHTML<TState>(element: HTMLElement, f: (state: TState) => string) {
    return (state: TState) => element.innerHTML = f(state);
}

/**
 * Creates an [Observer] that updates an elements value upon a state change.
 * @param element The element to update.
 * @param f The function to convert from the observable state to the value.
 * @returns Returns an [Observer].
 */
export function value<TState>(element: HTMLSelectElement | HTMLInputElement, f: (state: TState) => string) {
    return (state: TState) => element.value = f(state);
}
