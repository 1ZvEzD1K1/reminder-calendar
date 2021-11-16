import {
  RegistrationAction,
  RegistrationActionEnum,
  RegistrationState,
} from "./typesRegistration";

const initialState: RegistrationState = {
  isLoading: false,
  status: null,
  error: "",
};

export default function registrationReducer(
  state = initialState,
  action: RegistrationAction
): RegistrationState {
  switch (action.type) {
    case RegistrationActionEnum.REGISTRATION_LOADING:
      return { ...state, isLoading: action.payload };
    case RegistrationActionEnum.SEND_DATA_SUCCESS:
      return { ...state, status: action.payload };
    case RegistrationActionEnum.SEND_DATA_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}
