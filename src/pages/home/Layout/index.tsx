import * as React from "react";
import { useStyles } from "./styles";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import IconButton from "@mui/material/IconButton";

import {
  Box,
  TextField,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

import KeyDisplay from "../../../components/KeyDisplay";

type Props = {
  keys: ITranslationKey[];
  addNewKey: () => void;
};

const Layout: React.FC<Props> = ({ keys, addNewKey }) => {
  const classes = useStyles({});
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <TextField
          id="outlined-select-currency"
          select
          label="Project"
          style={{ width: 600 }}
          color="warning"
        ></TextField>
        <TextField
          id="outlined-select-currency"
          label="Rechercher"
          style={{ width: 900 }}
          color="warning"
          placeholder="key, en, fr ..."
        ></TextField>
      </Box>

      <TableContainer>
        <Table
          sx={{ maxWidth: 5000, marginTop: "3rem", height: 50 }}
          className={classes.table}
          aria-label="simple table"
        >
          <TableHead>
            <TableRow style={{ border: "2px solid black" }}>
              <TableCell style={{ width: "17%" }}> Key</TableCell>
              <TableCell style={{ width: "15%" }} align="left">
                English
              </TableCell>
              <TableCell style={{ width: "15%" }} align="left">
                Français
              </TableCell>
              <TableCell style={{ width: "15%" }} align="left">
                Español
              </TableCell>
              <TableCell style={{ width: "15%" }} align="left">
                Deutsche
              </TableCell>
              <TableCell style={{ width: "15%" }} align="left">
                Português
              </TableCell>
              <TableCell style={{ width: "5%" }} align="left">
                Action
              </TableCell>
            </TableRow>
          </TableHead>
        </Table>
      </TableContainer>
      <Box
        border={3}
        borderColor="black"
        height={650}
        width={1850}
        fontSize={24}
        overflow="auto"
      >
        {keys.map((key, index) => (
          <KeyDisplay key={key.id} keyIndex={index} />
        ))}
      </Box>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        marginTop="0.5rem"
      >
        <IconButton>
          <AddCircleIcon
            className={classes.btnhover}
            onClick={addNewKey}
            sx={{ cursor: "pointer", fontSize: 50 }}
          />
        </IconButton>
      </Box>
    </>
  );
};

export default Layout;
