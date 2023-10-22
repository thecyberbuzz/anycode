import FormState from "../types/FormState";
import FormAction from "../types/FormAction";

function formReducer(state: FormState, action: FormAction): FormState {
  switch (action.type) {
    case "SET_TITLE":
      return { ...state, title: action.payload };
    case "SET_LOCATION":
      return { ...state, location: action.payload };
    case "SET_FULL_TIME":
      return { ...state, fullTime: action.payload };
    case "SET_FORM":
      return { ...action.payload };
  }
}

export default formReducer;
