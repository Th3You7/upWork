import React, { useState } from "react";
import { Menu, Close, Notifications, ExpandMore } from "@material-ui/icons";
import {
  Button,
  makeStyles,
  Badge,
  Fab,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  navbar: (props) => ({
    width: "100%",
    height: !props.open ? theme.spacing(9) : "auto",
    overflow: "hidden",
    padding: theme.spacing(2),
    backgroundColor: "#2a254f",
    color: "#6a6683",
    transition: "width 2s linear 1s",
    display: "flex",
  }),
  nav: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
    [theme.breakpoints.up("md")]: {
      flexWrap: "nowrap",
    },
  },

  logo: {
    fontSize: theme.spacing(4),
    marginRight: theme.spacing(2),
  },

  span: {
    color: "white",
    fontWeight: 600,
  },

  toggle: {
    color: "white",
  },

  list: {
    [theme.breakpoints.down("md")]: {
      flex: "0 1 100%",
      margin: theme.spacing(1, 0, 1, 0),
    },
    listStyle: "none",
    padding: 0,
    [theme.breakpoints.up("md")]: {
      margin: theme.spacing(0),
      flexGrow: 1,
    },
  },

  action: {
    [theme.breakpoints.down("md")]: {
      marginTop: theme.spacing(2),
    },

    [theme.breakpoints.up("md")]: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginTop: 0,
    },
  },

  fabs: {
    [theme.breakpoints.down("md")]: {
      marginTop: theme.spacing(2),
    },
    [theme.breakpoints.up("md")]: {
      display: "flex",
      marginTop: 0,
    },
  },

  fab: {
    marginRight: theme.spacing(1.2),
    textTransform: "none",
    [theme.breakpoints.down("md")]: {
      marginRight: theme.spacing(1.5),
    },
  },

  btn: {
    color: "white",
  },

  badge: {
    margin: theme.spacing(1, 0, 1, 0),
  },

  li: {
    [theme.breakpoints.up("md")]: {
      display: "inline-block",
    },
  },
}));

export default function AppBar() {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  const props = {
    open,
  };

  const classes = useStyles(props);

  return (
    <div className={classes.navbar}>
      <nav className={classes.nav}>
        <div className={classes.logo}>
          <span className={classes.span}>Fin</span>Kraft
        </div>
        {!matches && (
          <div className={classes.toggle}>
            {open ? (
              <Close onClick={() => setOpen(!open)} />
            ) : (
              <Menu onClick={() => setOpen(!open)} />
            )}
          </div>
        )}
        <ul className={classes.list}>
          <li className={classes.li}>
            <Button className={classes.btn}>Home</Button>
          </li>
          <li className={classes.li}>
            <Button className={classes.btn}>It Filing</Button>
          </li>
          <li className={classes.li}>
            <Button className={classes.btn}>Clients</Button>
          </li>
          <li className={classes.li}>
            <Button className={classes.btn}>Vendors</Button>
          </li>
        </ul>

        <div className={classes.action}>
          <Badge
            color="secondary"
            badgeContent={0}
            showZero
            className={classes.badge}
            style={{ marginRight: "16px" }}
          >
            <Notifications />
          </Badge>
          <div className={classes.fabs}>
            <Fab variant="extended" className={classes.fab} size="small">
              <ExpandMore className={classes.extendedIcon} />
              Navigate
            </Fab>
            <Fab variant="extended" className={classes.fab} size="small">
              <ExpandMore className={classes.extendedIcon} />
              Navigate
            </Fab>
          </div>
        </div>
      </nav>
    </div>
  );
}
