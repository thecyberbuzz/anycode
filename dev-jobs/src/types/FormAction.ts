import FormState from "./FormState";

interface InputAction {
  type: "SET_TITLE" | "SET_LOCATION";
  payload: string;
}

interface CheckAction {
  type: "SET_FULL_TIME";
  payload: boolean;
}

interface SetAction {
  type: "SET_FORM";
  payload: FormState;
}

type FormAction = InputAction | SetAction | CheckAction;

export default FormAction;
