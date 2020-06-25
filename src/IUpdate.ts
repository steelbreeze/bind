export interface IUpdate<TState> {
    (state: TState): void;
}