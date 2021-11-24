import axios, { AxiosError, AxiosResponse } from "axios";
import { AppDispatch } from "../../store";
import {
  RegistrationActionEnum,
  RegistrationLoadingAction,
  SendDataErrorAction,
  SendDataSuccessAction,
  User,
} from "./typesRegistration";

export const RegistrationActionCreators = {
  sendData: (payload: number | null): SendDataSuccessAction => ({
    type: RegistrationActionEnum.SEND_DATA_SUCCESS,
    payload,
  }),
  regLoading: (payload: boolean): RegistrationLoadingAction => ({
    type: RegistrationActionEnum.REGISTRATION_LOADING,
    payload,
  }),
  regError: (payload: any): SendDataErrorAction => ({
    type: RegistrationActionEnum.SEND_DATA_ERROR,
    payload,
  }),
  request:
    (username: string, email: string, password: string) =>
    async (dispatch: AppDispatch) => {
      try {
        dispatch(RegistrationActionCreators.regLoading(true));
        const user: User = {
          username,
          email,
          password,
        };
        const req: AxiosResponse = await axios.post(
          "http://26.193.135.145:8000/auth/sign-up",
          user
        );
        dispatch(RegistrationActionCreators.sendData(req.status));
      } catch (error: any) {
        const err: AxiosError = error
        // TODO алерт ошибок
        dispatch(RegistrationActionCreators.regError(err.response?.data.message));
        console.log(err.response?.data.message)
      } finally {
        dispatch(RegistrationActionCreators.regLoading(false));
      }
    },
};
