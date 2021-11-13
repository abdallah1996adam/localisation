interface ITranslationKey {
  id: string;
  fr: string;
  en: string;
  de: string;
  es: string;
  pt: string;
  name: string;
}

type GlobalState = {
  keys: ITranslationKey[];
};

type AddKeyAction = {
  type: string;
};

type DeleteKeyAction = {
  type: string;
  keyIndex: number;
};

type ModifyKeyValueAction = {
  type: string;
  index: number
  data:{
    fr: string;
    en: string;
    de: string;
    es: string;
    pt: string;
    name: string;
  }
};

type ITranslationKeyAction =
  | AddKeyAction
  | DeleteKeyAction
  | ModifyKeyValueAction;

type DispatchType = (args: ITranslationKeyAction) => ITranslationKeyAction;
