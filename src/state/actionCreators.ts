import { ActionTypes } from "./actionTypes";

export const addKey = () => {
  const action: AddKeyAction = {
    type: ActionTypes.ADDKEY,
  };

  return handleKey(action);
};

export const deleteKey = (index: number) => {
  const action: DeleteKeyAction = {
    type: ActionTypes.DELETEKEY,
    keyIndex: index,
  };
  return handleKey(action);
};

export const modifyKey = (index: number, data: ITranslationKey) => {
  const action: ModifyKeyValueAction = {
    type: ActionTypes.MODIFYKEY,
    index: index,
    data
  };
  return handleKey(action);
};

const handleKey = (action: ITranslationKeyAction) => {
  return (dispatch: DispatchType) => {
    dispatch(action);
  };
};
