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
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import LoadingButton from "@mui/lab/LoadingButton";
import { TroubleshootTwoTone } from "@mui/icons-material";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  register({ name: "role", value: "user" });

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  const onSubmit = async (data) => {
    setLoading(true);
    const formData = new FormData();
    Object.keys(data).forEach((key) => {
      formData.append(key, data[key]);
    });
    axios.post("http://localhost:8080/auth/register", formData).then((res) => {
      setLoading(false);
      if (res.status === 200) {
        swal({
          text: "Register successfully",
          icon: "success",
        });
        window.location.replace("http://localhost:3000/auth/signin");
      } else {
        swal({
          text: "Register fail",
          icon: "error",
        });
      }
    });
  };

  return (
    <>
      <Container className="register">
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <h1>Register Account</h1>
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
              <Grid item xs={12}>
                <FormControl sx={{ m: 1, width: "35ch" }} variant="outlined">
                  <TextField
                    id="outlined-select-role"
                    select
                    name="role"
                    onChange={(e) => {
                      setValue("role", e.target.value);
                    }}
                    label="Select"
                    defaultValue="user"
                    helperText="Please select your role"
                  >
                    <MenuItem value={"user"}>User</MenuItem>
                    <MenuItem value={"admin"}>Admin</MenuItem>
                  </TextField>
                  <div className="button">
                    <LoadingButton
                      variant="contained"
                      type="submit"
                      className="btn"
                      loading={loading}
                    >
                      Register
                    </LoadingButton>
                  </div>
                </FormControl>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </>
  );
};

export default Register;
