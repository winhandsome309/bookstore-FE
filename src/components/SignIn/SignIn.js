import { Container } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./style.css";
import { Grid } from "semantic-ui-react";
import LoadingButton from "@mui/lab/LoadingButton";

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const para = window.location.pathname.split("/");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  const headers = {
    Accept: "*/*",
    // "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  };

  const onSubmit = async (data) => {
    setLoading(true);

    const formData = new FormData();
    Object.keys(data).forEach((key) => {
      formData.append(key, data[key]);
    });
    axios
      .post("http://localhost:8080/auth/signin", formData, {
        headers: headers,
        withCredentials: true,
        // credentials: "same-site",
        credentials: "include",
      })
      .then((res) => {
        setLoading(false);
        window.location.replace("http://localhost:3000/");
        if (res.status === 202) {
          swal({
            text: "Login successfully",
            icon: "success",
          });
        } else {
          swal({
            text: "Login fail",
            icon: "error",
          });
        }
      });
  };

  return (
    <>
      <Container className="sign-in">
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <h1>Sign In</h1>
          </Grid>
        </Grid>
        <div className="email-password">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <FormControl sx={{ m: 1, width: "35ch" }} variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-password">
                    Email
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    label="Email"
                    inputRef={register}
                    name="email"
                    type="text"
                  />
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <FormControl sx={{ m: 1, width: "35ch" }} variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-password">
                    Password
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    type={showPassword ? "text" : "password"}
                    inputRef={register}
                    name="password"
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                  />
                </FormControl>
              </Grid>

              <div className="button">
                <LoadingButton
                  variant="contained"
                  type="submit"
                  className="btn"
                  loading={loading}
                >
                  Sign In
                </LoadingButton>
              </div>
            </Grid>
          </form>
        </div>
      </Container>
    </>
  );
};

export default SignIn;
