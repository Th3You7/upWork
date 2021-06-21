import React from "react";
import {
  Button,
  makeStyles,
  InputBase,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import { Search, Add, Visibility } from "@material-ui/icons";
import { fade } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import HeaderRow from "../HeaderRow";
import { data } from "../../data";
import Row from "../Row";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4, 2, 2),
  },

  flex: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    [theme.breakpoints.down("md")]: {
      flexWrap: "wrap",
    },
  },
  search: {
    position: "relative",
    border: "1px solid grey",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },

  action: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },

  btn: {
    flex: "0 1 25%",
    marginRight: theme.spacing(1),
    textTransform: "none",
    [theme.breakpoints.up("md")]: {
      flex: "0 1 auto",
    },
  },

  typo: {
    fontSize: theme.spacing(1.6),
  },
}));

export default function Main() {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <div className={classes.root}>
      <div className={classes.flex}>
        <h3>ITR FILING</h3>
        <div className={classes.action}>
          <Button size="small" variant="contained" className={classes.btn}>
            {!matches ? (
              <Visibility />
            ) : (
              <Typography nowrap="true" className={classes.typo}>
                View Acknowledgment
              </Typography>
            )}
          </Button>

          <Button size="small" variant="contained" className={classes.btn}>
            {!matches ? (
              <Add />
            ) : (
              <Typography nowrap="true" className={classes.typo}>
                Add Filing
              </Typography>
            )}
          </Button>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <Search />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
        </div>
      </div>
      <HeaderRow />
      {data.map((item, index) => (
        <Row
          key={index}
          pan={item.pan}
          assessmentDate={item.assessmentYear}
          dueDate={item.dueDate}
          statue={item.statue}
          acknowledgment={item.acknowledgment}
          filingDate={item.filingDate}
        />
      ))}
    </div>
  );
}
