import { AppBar, Badge, Toolbar, Typography } from "@material-ui/core";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { ShoppingCart } from "@material-ui/icons";
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AddCircleIcon from "@material-ui/icons/AddCircle";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import { Button, IconButton } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Logo.png";
import useStyles from "./styles";

const Navbar = ({ totalItems, hide = false, user }) => {
  const classes = useStyles();

  const openInNewTab = () => {
    const newWindow = window.open(
      "create-product",
      "_blank",
      "noopener,noreferrer"
    );
    if (newWindow) newWindow.opener = null;
  };

  const theme = createMuiTheme({
    typography: {
      body1: {
        fontSize: [14, "!important"],
      },
    },
  });

  const headers = {
    Accept: "*/*",
    // "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  };

  const onSubmit = async () => {
    axios
      .post(
        process.env.REACT_APP_BACKEND_HOSTING + "/auth/signout",
        {},
        {
          headers: headers,
          withCredentials: true,
          credentials: "include",
        }
      )
      .then((res) => {
        if (res.status === 202) {
          swal({
            text: "Signout successfully",
            icon: "success",
          });
          window.location.reload();
        } else {
          swal({
            text: "Signout fail",
            icon: "error",
          });
        }
      });
  };

  return (
    <div>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography
            component={Link}
            // to="/"
            onClick={() => {
              window.location.replace(
                process.env.REACT_APP_FE_MAIN_PAGE
              );
            }}
            variant="h5"
            className={classes.title}
            color="inherit"
          >
            <img
              src={logo}
              alt="Book Store App"
              height="50px"
              className={classes.image}
              style={{
                borderRadius: 5,
              }}
            />
            <div>THE BOOK SHOP</div>
          </Typography>
          <div className={classes.grow} />
          {hide ? (
            <></>
          ) : (
            <div className={classes.menuButton}>
              {user ? (
                <>
                <IconButton
                aria-label="Create product"
                color="inherit"
                onClick={() => {
                  openInNewTab();
                }}
              >
                <Badge color="secondary">
                  <AddCircleIcon style={{ fontSize: 25 }} />
                </Badge>
              </IconButton>
              <IconButton
                component={Link}
                to="/cart"
                aria-label="Show cart items"
                color="inherit"
              >
                <Badge badgeContent={totalItems} color="secondary">
                  <ShoppingCart style={{ fontSize: 25 }}/>
                </Badge>
              </IconButton>
              <IconButton
                component={Link}
                to="/shipping"
                aria-label="Show shipping items"
                color="inherit"
              >
                <Badge color="secondary">
                  <LocalShippingIcon style={{ fontSize: 25 }}/>
                </Badge>
              </IconButton>
                  <IconButton
                    aria-label="Log out"
                    color="inherit"
                    onClick={() => onSubmit()}
                  >
                    <Badge color="secondary">
                      <LogoutIcon style={{ fontSize: 25 }}/>
                    </Badge>
                  </IconButton>
                  <Tooltip
                    title={
                      <ThemeProvider theme={theme}>
                        <Typography color="inherit" variant="body1">
                          {/* Email: {user["email"]} */}
                          {user["email"]}
                        </Typography>
                        {/* <Typography color="inherit" variant="body1">
                          Balance: {user["balance"]} đ
                        </Typography> */}
                      </ThemeProvider>
                    }
                  >
                    <IconButton
                      component={Link}
                      to={"/info/" + user["id"]}
                      aria-label="user info"
                      color="inherit"
                    >
                      <Badge color="secondary">
                        <AccountCircleOutlinedIcon style={{ fontSize: 45 }} />
                      </Badge>
                    </IconButton>
                  </Tooltip>
                </>
              ) : (
                <>
                  <Link to={`auth/signin`}>
                    <Button
                      startIcon={<LoginIcon />}
                      className={classes.iconButton}
                    >
                      Sign in
                    </Button>
                  </Link>
                  <Link to={`auth/register`}>
                    <Button variant="contained">Register</Button>
                  </Link>
                </>
              )}
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
