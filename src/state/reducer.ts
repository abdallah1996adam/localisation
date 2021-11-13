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
        name: "",
      };
      return { ...state, keys: state.keys.concat(newKey) };

    case ActionTypes.DELETEKEY:
      const { keyIndex } = action as DeleteKeyAction;
      const updatedKeys = state.keys.slice();
      updatedKeys.splice(keyIndex, 1);
      return { ...state, keys: updatedKeys };

    case ActionTypes.MODIFYKEY:
      const { data, index } = action as ModifyKeyValueAction;
      const newState = { ...state };
      // 1. Get the key to modify
      const keyToModify = newState.keys[index];
      // 2. Modify values of the key
      const newKeyData = {
        ...keyToModify,
        ...data,
      };
      newState.keys[index] = newKeyData;
      // 3. Return new modified state
      return newState;
    default:
      return state;
  }
};

export default reducer;
