export type RegistrationState = {
  isLoading: boolean;
  status: number | null;
  error: any;
};

export type User ={
  username: string;
  email: string;
  password: string;
}

export enum RegistrationActionEnum {
  REGISTRATION_LOADING = "REGISTRATION_LOADING",
  SEND_DATA_SUCCESS = "SEND_DATA_SUCCESS",
  SEND_DATA_ERROR = "SEND_DATA_ERROR",
}

export interface RegistrationLoadingAction {
  type: RegistrationActionEnum.REGISTRATION_LOADING;
  payload: boolean;
}

export interface SendDataSuccessAction {
  type: RegistrationActionEnum.SEND_DATA_SUCCESS;
  payload: number | null;
}

export interface SendDataErrorAction {
  type: RegistrationActionEnum.SEND_DATA_ERROR;
  payload: string;
}

export type RegistrationAction =
  | RegistrationLoadingAction
  | SendDataSuccessAction
  | SendDataErrorAction;
