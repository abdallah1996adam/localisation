import { makeStyles } from "@material-ui/styles";
import { Theme, createStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
      table: {
        "& .MuiTableCell-root": {
          borderLeft: "2px solid black",
        },
      },
      btnhover: {
        color: "#EB5E27",
        "&:hover": {
          color: "#c44818",
        },
      },
  })
);
