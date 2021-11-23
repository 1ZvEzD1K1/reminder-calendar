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

    default:
      return state;
  }
}
