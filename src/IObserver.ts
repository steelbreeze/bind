export interface IObserver<TState> {
    (state: TState): void;
}