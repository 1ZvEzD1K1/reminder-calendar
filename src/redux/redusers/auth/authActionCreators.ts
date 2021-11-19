import axios, { AxiosResponse } from "axios";
import { AppDispatch } from "../../store";
import {
  AuthActionEnum,
  SendAuthDataErrorAction,
  SendAuthDataSuccessAction,
  SetAuthAction,
  SetAuthLoadingAction,
  User,
} from "./typesAuth";

//redux persist

export const AuthActionCreators = {
  sendData: (payload: string): SendAuthDataSuccessAction => ({
    type: AuthActionEnum.AUTH_DATA_SUCCESS,
    payload,
  }),
  authError: (payload: any): SendAuthDataErrorAction => ({
    type: AuthActionEnum.AUTH_DATA_ERROR,
    payload,
  }),
  authLoading: (payload: boolean): SetAuthLoadingAction => ({
    type: AuthActionEnum.AUTH_LOADING,
    payload,
  }),
  setAuth: (payload: boolean): SetAuthAction => ({
    type: AuthActionEnum.SET_AUTH,
    payload,
  }),
  request:
    (email: string, password: string) => async (dispatch: AppDispatch) => {
      try {
        dispatch(AuthActionCreators.authLoading(true));
        const user: User = {
          email,
          password,
        };
        const res: AxiosResponse = await axios.post("gde.silka.com", user);
        dispatch(AuthActionCreators.sendData(res.data));
        dispatch(AuthActionCreators.authLoading(false));
      } catch (error) {
        dispatch(AuthActionCreators.authError(error));
      }
    },
};
