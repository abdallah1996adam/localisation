import React from "react";
import { useStyles } from "./styles";
import { TextField, Box, Divider } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

interface OnChangeTextFieldData {
  newValue: string;
  keyToChange: "fr" | "en" | "de" | "pt" | "key" | "es";
}

interface Props {
  row: {
    fr: string ;
    en: string ;
    de: string ;
    es: string ;
    pt: string ;
    key: string ;
  };
  onDeleteRow: () => void;
  onChangeTextField: (data: OnChangeTextFieldData) => void;
}

const Layout: React.FC<Props> = ({ row, onDeleteRow, onChangeTextField }) => {
  const classes = useStyles({});
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
        marginTop="1rem"
        marginBottom="5rem"
      >
        <TextField
          id="outlined-select-currency"
          style={{ width: 200, marginLeft: "0.5rem" }}
          value={row.key}
          color="warning"
          placeholder="key name"
          name={"key"}
          onChange={(e) => {
            // Force cast the value, but can crash in runtime
            let name = e.target.name as
              | "fr"
              | "en"
              | "de"
              | "pt"
              | "key"
              | "es";
            onChangeTextField({
              newValue: e.target.value,
              keyToChange: name,
            });
          }}
        />
        <TextField
          id="outlined-select-currency"
          style={{ width: 200, marginLeft: "2rem" }}
          color="warning"
          value={row.en}
          placeholder="English"
          name={"en"}
          onChange={(e) => {
            let name = e.target.name;
            if (
              name === "fr" ||
              name === "en" ||
              name === "de" ||
              name === "pt" ||
              name === "key" ||
              name === "es"
            ) {
              onChangeTextField({
                newValue: e.target.value,
                keyToChange: name,
              });
            }
          }}
        />
        <TextField
          id="outlined-select-currency"
          style={{ width: 200, marginLeft: "2rem" }}
          value={row.fr}
          color="warning"
          placeholder="Français"
          name={"fr"}
          onChange={(e) => {
            onChangeTextField({
              newValue: e.target.value,
              //@ts-ignore --> Dirty but works
              keyToChange: e.target.name,
            });
          }}
        />
        <TextField
          id="outlined-select-currency"
          value={row.es}
          style={{ width: 200, marginLeft: "2rem" }}
          color="warning"
          placeholder="Español"
          name={"es"}
          onChange={(e) => {
            onChangeTextField({
              newValue: e.target.value,
              // dont use name
              keyToChange: "es",
            });
          }}
        />
        <TextField
          id="outlined-select-currency"
          style={{ width: 200, marginLeft: "2rem" }}
          color="warning"
          placeholder="Deutsche"
          name={"de"}
          value={row.de}
          onChange={(e) => {
            onChangeTextField({
              newValue: e.target.value,
              keyToChange: "de",
            });
          }}
        />
        <TextField
          id="outlined-select-currency"
          style={{ width: 200, marginLeft: "2rem" }}
          color="warning"
          placeholder="Português"
          value={row.pt}
          name={"pt"}
          onChange={(e) => {
            onChangeTextField({
              newValue: e.target.value,
              keyToChange: "pt",
            });
          }}
        />
        <DeleteIcon
          onClick={onDeleteRow}
          color="action"
          style={{ cursor: "pointer" }}
        />
      </Box>
      <Divider variant="fullWidth" />
    </>
  );
};

export default Layout;
