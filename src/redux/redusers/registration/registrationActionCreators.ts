import axios, { AxiosResponse } from "axios";
import { AppDispatch } from "../../store";
import {
  RegistrationActionEnum,
  RegistrationLoadingAction,
  SendDataErrorAction,
  SendDataSuccessAction,
  User,
} from "./typesRegistration";

export const RegistrationActionCreators = {
  sendData: (payload: number): SendDataSuccessAction => ({
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
    (nickname: string, email: string, password: string) =>
    async (dispatch: AppDispatch) => {
      try {
        dispatch(RegistrationActionCreators.regLoading(true));
        const user: User = {
          nickname,
          email,
          password,
        };
        const req: AxiosResponse = await axios.post(
          "backend-huinia.com/auth/sign-up",
          user
        );
        dispatch(RegistrationActionCreators.sendData(req.status));
        dispatch(RegistrationActionCreators.regLoading(false));
      } catch (error) {
        dispatch(RegistrationActionCreators.regError(error));
      }
    },
};
