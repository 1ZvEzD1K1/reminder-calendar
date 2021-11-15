import { AuthAction, AuthActionEnum, AuthState } from "./typesAuth";


const initialState: AuthState = {
    isAuth: false
}

export default function authReduser(state = initialState, action:AuthAction): AuthState {
    switch (action.type) {
        case AuthActionEnum.SET_AUTH:
            return {...state, isAuth: action.payload}
    
        default:
            return state;
    }
}