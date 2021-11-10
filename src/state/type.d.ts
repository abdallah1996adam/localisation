interface ITranslationKey {
  id: string;
  fr: string;
  en: string;
  de: string;
  es: string;
  pt: string;
  key: string;
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

type ModifyKeyAction = {
  type: string;
  keyIndex: number;
};

type ITranslationKeyAction = AddKeyAction | DeleteKeyAction | ModifyKeyAction;

type DispatchType = (args: ITranslationKeyAction) => ITranslationKeyAction;
