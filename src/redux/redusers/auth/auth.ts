import { AuthAction, AuthActionEnum, AuthState, UserObject } from "./typesAuth";

const userObject: UserObject = {
  username: "",
  email: "",
  is_active: false,
}

const initialState: AuthState = {
  isAuth: false,
  isLoading: false,
  user: userObject,
  token: "",
  error: "",
};

export default function authReducer(
  state = initialState,
  action: AuthAction
): AuthState {
  switch (action.type) {
    case AuthActionEnum.SET_AUTH:
      return { ...state, isAuth: action.payload };
    case AuthActionEnum.AUTH_LOADING:
      return { ...state, isLoading: action.payload };
    case AuthActionEnum.AUTH_DATA_SUCCESS:
      return { ...state, token: action.payload };
    case AuthActionEnum.AUTH_DATA_ERROR:
      return { ...state, error: action.payload };
    case AuthActionEnum.GET_USER:
      return {...state, user: action.payload}
    default:
      return state;
  }
}
