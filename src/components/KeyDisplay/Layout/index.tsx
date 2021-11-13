import React from "react";
import { useStyles } from "./styles";
import { TextField, Box, Divider } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

interface OnChangeTextFieldData {
  newValue: string;
  keyToChange: "fr" | "en" | "de" | "pt" | "name" | "es";
}

interface Props {
  row: {
    fr: string;
    en: string;
    de: string;
    es: string;
    pt: string;
    name: string;
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
        position="relative"
      >
        <TextField
          style={{
            width: 250,
            marginLeft: "2rem",
            marginTop: "3rem",
            position: "absolute",
          }}
          value={row.name}
          color="warning"
          placeholder="key name"
          name={"name"}
          onChange={(e) => {
            // Force cast the value, but can crash in runtime
            let name = e.target.name as
              | "fr"
              | "en"
              | "de"
              | "pt"
              | "name"
              | "es";
            onChangeTextField({
              newValue: e.target.value,
              keyToChange: name,
            });
          }}
        />
        <TextField
          style={{
            width: 250,
            marginLeft: "20.3rem",
            marginTop: "3rem",
            position: "absolute",
          }}
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
              name === "name" ||
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
          style={{
            width: 250,
            marginLeft: "38.2rem",
            marginTop: "3rem",
            position: "absolute",
          }}
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
          value={row.es}
          style={{
            width: 250,
            marginLeft: "56rem",
            marginTop: "3rem",
            position: "absolute",
          }}
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
          style={{
            width: 250,
            marginLeft: "74rem",
            marginTop: "3rem",
            position: "absolute",
          }}
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
          style={{
            width: 250,
            marginLeft: "92rem",
            marginTop: "3rem",
            position: "absolute",
          }}
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
          style={{
            cursor: "pointer",
            position: "absolute",
            marginLeft: "112rem",
            marginTop: "3rem",
          }}
        />
      </Box>
    </>
  );
};

export default Layout;
