export type CalendarsState = {
  calendars: Calendar[];
  error: string;
  isLoading: boolean;
};

export type Calendar = {
  id: number;
  title: string;
  description: string;
  type: "creator" | "admin" | "viewer";
};

export type CalendarObject = {
  title: string;
  description: string;
};

export enum CalendarsActionEnum {
  GET_CALENDARS_SUCCESS = "GET_CALENDARS_SUCCESS",
  GET_CALENDARS_ERROR = "GET_CALENDARS_ERROR",
  CALENDAR_LOADING = "CALENDAR_LOADING",
  CREATE_NEW_CALENDAR_ERROR = "CREATE_NEW_CALENDAR_ERROR",
}

export interface GetCalendarsSuccessAction {
  type: CalendarsActionEnum.GET_CALENDARS_SUCCESS;
  payload: Calendar[];
}

export interface GetCalndarsErrorAction {
  type: CalendarsActionEnum.GET_CALENDARS_ERROR;
  payload: string;
}

export interface CalendarLoading{
  type: CalendarsActionEnum.CALENDAR_LOADING;
  payload: boolean;
}

export interface CreateNewCalendarErrorAction {
  type: CalendarsActionEnum.CREATE_NEW_CALENDAR_ERROR;
  payload: string;
}

export type CalendarsAction =
  | GetCalendarsSuccessAction
  | GetCalndarsErrorAction
  | CalendarLoading
  | CreateNewCalendarErrorAction;
