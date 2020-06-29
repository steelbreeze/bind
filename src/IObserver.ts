/**
 * Interface for the observer callback used by [Observable].
 * @typeParam TState The type of the underlying state.
 */
export interface IObserver<TState> {
    (state: TState): void;
}
