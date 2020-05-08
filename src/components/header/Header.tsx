import React from "react";
import style from "./header.module.css";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import { AccountCircle } from "@material-ui/icons";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Logo from "./../../assets/img/logo.png";
import Navigator from "../common/navigator/navigator";
import './header.sass'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    gridArea: "h",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    paddingLeft: "30px",
  },
  userName: {
    width: "auto",
    fontWeight: 700,
    outline: "none",
    textAlign: "center",
    overflow: "hidden",
    minHeight: 35,
    paddingTop: 6,
    whiteSpace: "nowrap",
    paddingBottom: 6,
  },
  logo: {
    width: 150,
    height: "auto",
  },

}));

type PropsType = {
  isAuth: boolean
  login: string | null
  getUserLogoutCB: () => void
}

export const Header:React.FC<PropsType> = ({ isAuth, getUserLogoutCB, login}) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event: React.MouseEvent) => {
    //@ts-ignore
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <header className={classes.root}>
      <AppBar position="static" className="header">
        <Toolbar>
          <Typography className={classes.title}>
            <img className={classes.logo} src={Logo} alt="" />
          </Typography>
          {isAuth && (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={open}
                onClose={handleClose}
              >
                <Typography className={classes.userName}>{login}</Typography>
                <MenuItem onClick={handleClose}>
                  <NavLink to="/profile">Profile</NavLink>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <NavLink to="/edit">Edit</NavLink>
                </MenuItem>
                <MenuItem onClick={(getUserLogoutCB)}>
                  Logout
                </MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </header>
  );
};

