import axios, { AxiosError, AxiosResponse } from "axios";
import { AppDispatch, GetState } from "../../store";
import {
  Calendar,
  CalendarObject,
  CalendarsActionEnum,
  CreateNewCalendarErrorAction,
  CreateNewCalendarSuccessAction,
  GetCalendarsSuccessAction,
  GetCalndarsErrorAction,
} from "./typesCalendars";

export const CalendarActionCreators = {
  getCalendarsSuccess: (payload: Calendar[]): GetCalendarsSuccessAction => ({
    type: CalendarsActionEnum.GET_CALENDARS_SUCCESS,
    payload,
  }),
  getCalendarsError: (payload: any): GetCalndarsErrorAction => ({
    type: CalendarsActionEnum.GET_CALENDARS_ERROR,
    payload,
  }),
  createNewCalendarSuccess: (
    payload: CalendarObject
  ): CreateNewCalendarSuccessAction => ({
    type: CalendarsActionEnum.CREATE_NEW_CALENDAR_SUCCESS,
    payload,
  }),
  createNewCalendarError: (payload: any): CreateNewCalendarErrorAction => ({
    type: CalendarsActionEnum.CREATE_NEW_CALENDAR_ERROR,
    payload,
  }),
  getCalendars: () => async (dispatch: AppDispatch, getState: GetState) => {
    try {
      const { token } = getState().authReducer;
      console.log(token)
      const res: AxiosResponse = await axios.get(
        "http://26.193.135.145:8000/api/calendars/",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch(CalendarActionCreators.getCalendarsSuccess(res.data))
    } catch (error: any) {
      const err: AxiosError = error;
      dispatch(
        CalendarActionCreators.getCalendarsError(err.response?.data.message)
      );
      console.log(err.response?.data.message);
    }
  },
};
