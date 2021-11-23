export type AuthState = {
  isAuth: boolean;
  isLoading: boolean;
  user: UserObject;
  token: string | null;
  error: string;
};

export type UserObject = {
  username: string;
  email: string;
  is_active: boolean;
};

export type User = {
  username: string;
  password: string;
};

export enum AuthActionEnum {
  SET_AUTH = "SET_AUTH",
  AUTH_LOADING = "AUTH_LOADING",
  AUTH_DATA_SUCCESS = "AUTH_DATA_SUCCESS",
  AUTH_DATA_ERROR = "AUTH_DATA_ERROR",
  GET_USER = "GET_USER",
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

export interface GetUserAction {
  type: AuthActionEnum.GET_USER;
  payload: UserObject;
}

export type AuthAction =
  | SetAuthAction
  | SetAuthLoadingAction
  | SendAuthDataSuccessAction
  | SendAuthDataErrorAction
  | GetUserAction;
