export type AuthState = {
  isAuth: boolean;
  isLoading: boolean;
  token: string;
  error: string;
};

export type User = {
  email: string;
  password: string;
};

export enum AuthActionEnum {
  SET_AUTH = "SET_AUTH",
  AUTH_LOADING = "AUTH_LOADING",
  AUTH_DATA_SUCCESS = "AUTH_DATA_SUCCESS",
  AUTH_DATA_ERROR = "AUTH_DATA_ERROR",
}

export interface SetAuthAction {
  type: AuthActionEnum.SET_AUTH;
  payload: boolean;
}

export interface SetAuthLoadingAction {
  type: AuthActionEnum.AUTH_LOADING;
  payload: boolean;
}

export interface SendAuthDataSuccessAction {
  type: AuthActionEnum.AUTH_DATA_SUCCESS;
  payload: string;
}

export interface SendAuthDataErrorAction {
  type: AuthActionEnum.AUTH_DATA_ERROR;
  payload: string;
}

export type AuthAction =
  | SetAuthAction
  | SetAuthLoadingAction
  | SendAuthDataSuccessAction
  | SendAuthDataErrorAction;
