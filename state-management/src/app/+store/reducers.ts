import { createReducer, on } from "@ngrx/store";
import { decrement, increment, reset } from "./actions";

export const counterReducer = createReducer<number>(12,
    on(increment, (state) => state + 1),
    on(decrement, (state) => state - 1),
    on(reset, (state) => state  = 0),


);