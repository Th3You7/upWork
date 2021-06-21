import { IconButton, makeStyles, Typography } from "@material-ui/core";
import { Edit } from "@material-ui/icons";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    //justifyContent: "center",
    alignItems: "center",
    width: "100%",
    padding: theme.spacing(1, 3),
    margin: theme.spacing(1, 0),
    borderRadius: theme.spacing(1),
    boxShadow: theme.shadows[1],
    //backgroundColor: "#f0f0f0",
  },

  typography: {
    fontSize: theme.spacing(1.5),
    padding: theme.spacing(0, 1),
    flex: "0 1 calc(100% / 7)",
  },

  iconBtn: {
    flex: "0 1 calc(100% / 7)",
  },
}));

export default function Row({
  pan,
  acknowledgment,
  dueDate,
  statue,
  filingDate,
  assessmentDate,
}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography noWrap={true} className={classes.typography}>
        {pan}
      </Typography>
      <Typography className={classes.typography}>{assessmentDate}</Typography>
      <Typography className={classes.typography}>{filingDate}</Typography>
      <Typography noWrap={true} className={classes.typography}>
        {acknowledgment}
      </Typography>
      <Typography className={classes.typography}>{dueDate}</Typography>
      <Typography className={classes.typography}>{statue}</Typography>
      <IconButton>
        <Edit />
      </IconButton>
    </div>
  );
}
