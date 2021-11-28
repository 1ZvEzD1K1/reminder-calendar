import {
  CalendarsAction,
  CalendarsActionEnum,
  CalendarsState,
} from "./typesCalendars";

const initialState: CalendarsState = {
  calendars: [],
  error: "",
};

export default function calendarsReducer(
  state = initialState,
  action: CalendarsAction
): CalendarsState {
  switch (action.type) {
    case CalendarsActionEnum.GET_CALENDARS_SUCCESS:
      return { ...state, calendars: action.payload };
    case CalendarsActionEnum.CREATE_NEW_CALENDAR_SUCCESS:
      return { ...state };
    case CalendarsActionEnum.GET_CALENDARS_ERROR:
      return { ...state, error: action.payload };
    case CalendarsActionEnum.CREATE_NEW_CALENDAR_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}
