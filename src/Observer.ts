/**
 * Interface for the observer callback used by [Observable].
 * @typeParam TState The type of the underlying state.
 */
export type Observer<TState> = (state: TState) => void;

