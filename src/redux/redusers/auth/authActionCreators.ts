import axios, { AxiosError, AxiosResponse } from "axios";
import { AppDispatch } from "../../store";
import {
  AuthActionEnum,
  SendAuthDataErrorAction,
  SendAuthDataSuccessAction,
  SetAuthAction,
  SetAuthLoadingAction,
  GetUserAction,
  User,
  UserObject,
} from "./typesAuth";


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
  getUser: (payload: UserObject): GetUserAction => ({
    type: AuthActionEnum.GET_USER,
    payload,
  }),
  request:
    (username: string, password: string) => async (dispatch: AppDispatch) => {
      try {
        dispatch(AuthActionCreators.authLoading(true));
        const user: User = {
          username,
          password,
        };
        
        const res: AxiosResponse = await axios.post("http://26.193.135.145:8000/auth/sign-in", user);
        dispatch(AuthActionCreators.sendData(res.data.access_token));
        const me: AxiosResponse = await axios.get("http://26.193.135.145:8000/api/me", {
          headers: {
            Authorization: `Bearer ${res.data.access_token}`,
          },
        });
        if (me.status === 200) {
          dispatch(AuthActionCreators.setAuth(true))
        }
        dispatch(AuthActionCreators.getUser(me.data))
      } catch (error: any) {
        const err: AxiosError = error
        dispatch(AuthActionCreators.authError(err.response?.data.message));
        // TODO алерт ошибок
        console.log(err.response?.data.message)
      } finally {
        dispatch(AuthActionCreators.authLoading(false));
      }
    },
};
