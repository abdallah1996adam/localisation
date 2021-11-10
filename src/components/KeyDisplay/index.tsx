import * as React from "react";
import { Dispatch } from "redux";
import { useDispatch, useSelector } from "react-redux";
import Layout from "./Layout";
import { deleteKey } from "../../state/actionCreators";

type Props = {
  keyIndex: number;
};

const KeyDisplay: React.FC<Props> = ({ keyIndex }) => {
  const dispatch: Dispatch<any> = useDispatch();
  const key = useSelector((state: GlobalState) => state.keys[keyIndex]);

  const removeRow = React.useCallback(() => {
    dispatch(deleteKey(keyIndex));
  }, [dispatch, keyIndex]);

  return (
    <Layout
      row={key}
      onDeleteRow={removeRow}
      onChangeTextField={({ newValue, keyToChange }) => {
        // insert action to update the key
      }}
    />
  );
};

export default KeyDisplay;
