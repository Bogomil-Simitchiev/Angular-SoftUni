import { createReducer, on } from "@ngrx/store";
import { decrement, increment, login, logout, reset } from "./actions";
import { IUserInfo } from ".";

export const counterReducer = createReducer<number>(12,
    on(increment, (state) => state + 1),
    on(decrement, (state) => state - 1),
    on(reset, (state) => state = 0),
);

export const userReducer = createReducer<IUserInfo>({ name: '', age: 0 },
    on(login, (state) => state = { name: 'Georgi', age: 5 }),
    on(logout, (state) => state = { name: '', age: 0 })
);