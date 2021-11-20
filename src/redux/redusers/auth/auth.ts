import { AuthAction, AuthActionEnum, AuthState } from "./typesAuth";

const initialState: AuthState = {
  isAuth: true,
  isLoading: false,
  user: {},
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
