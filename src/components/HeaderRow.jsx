import { makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    //justifyContent: "center",
    //alignItems: "center",
    width: "100%",
    padding: theme.spacing(2, 3),
    borderRadius: theme.spacing(1),
    backgroundColor: "#f0f0f0",
    margin: theme.spacing(1, 0),
    overflow: "visible",
  },

  header: {
    fontWeight: 600,
    fontSize: theme.spacing(1.5),
    padding: theme.spacing(0, 1),
    flex: "0 1 calc(100% / 7)",
    "&:last-of-type": {
      flexGrow: 2,
    },
  },
}));

export default function HeaderRow() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography className={classes.header}>PAN</Typography>
      <Typography noWrap={true} className={classes.header}>
        Assessment Year
      </Typography>
      <Typography className={classes.header}>Filing Date</Typography>
      <Typography noWrap={true} className={classes.header}>
        Acknowledgment No
      </Typography>
      <Typography className={classes.header}>Due Date</Typography>
      <Typography className={classes.header}>Statue</Typography>
    </div>
  );
}
