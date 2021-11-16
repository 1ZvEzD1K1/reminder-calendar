import axios, { AxiosResponse } from "axios";
import { AppDispatch } from "../../store";
import {
  RegistrationActionEnum,
  RegistrationLoadingAction,
  SendDataErrorAction,
  SendDataSuccessAction,
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
            dispatch(RegistrationActionCreators.regLoading(true))
            const req: AxiosResponse = await axios.post("backend-huinia.com", {
                nickname,
                email,
                password
            })
            dispatch(RegistrationActionCreators.sendData(req.status))
            dispatch(RegistrationActionCreators.regLoading(false))
        } catch (error) {
            dispatch(RegistrationActionCreators.regError(error))
        }
    },
};
