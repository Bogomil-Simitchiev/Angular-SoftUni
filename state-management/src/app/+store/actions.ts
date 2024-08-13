import { createAction } from "@ngrx/store"

const domain =  '[MyCounterComponent]'

export const increment = createAction(`${domain} Increment`);
export const decrement = createAction(`${domain} Decrement`);
export const reset = createAction(`${domain} Reset`);


const domainLogin =  '[LoginComponent]'

export const login = createAction(`${domainLogin} Login`);

const domainLogout =  '[LogoutComponent]'

export const logout = createAction(`${domainLogout} Logout`);