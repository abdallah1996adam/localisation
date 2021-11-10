import cuid from "cuid";
import { ActionTypes } from "./actionTypes";

const initialState: GlobalState = {
  keys: [],
};

const reducer = (
  state: GlobalState = initialState,
  action: ITranslationKeyAction
): GlobalState => {
  switch (action.type) {
    case ActionTypes.ADDKEY:
      const newKey: ITranslationKey = {
        id: cuid(),
        fr: "",
        en: "",
        de: "",
        es: "",
        pt: "",
        key: "",
      };
      return { ...state, keys: state.keys.concat(newKey) };

    case ActionTypes.DELETEKEY:
      const { keyIndex } = action as DeleteKeyAction;
      const updatedKeys = state.keys.slice();
      updatedKeys.splice(keyIndex, 1);
      return { ...state, keys: updatedKeys };

    default:
      return state;
  }
};

export default reducer;
