import * as React from "react";
import { Dispatch } from "redux";
import { useSelector, useDispatch } from "react-redux";
import Layout from "./Layout";
import { addKey } from "../../state/actionCreators";

const Home: React.FC = () => {
  const dispatch: Dispatch<any> = useDispatch();
  const createKey = React.useCallback(() => dispatch(addKey()), [dispatch]);

  const keys: ITranslationKey[] = useSelector(
    (state: GlobalState) => state.keys
  );

  const addNewKey = () => {
    createKey();
  };

  return <Layout keys={keys} addNewKey={addNewKey} />;
};

export default Home;
