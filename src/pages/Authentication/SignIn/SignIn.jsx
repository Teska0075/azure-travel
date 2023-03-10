import React, { useContext } from "react";
// import axios from "axios";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import { Alert, Snackbar } from "@mui/material";
import { UserContext } from "../../../context";

const SignIn = ({ setSignIn }) => {
  const {
    setEmail,
    setPassword,
    email,
    password,
    setMessage,
    setIsAlert,
    status,
    isAlert,
    login,
    message,
  } = useContext(UserContext);
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  // const [message, setMessage] = useState("");
  // const [status, setStatus] = useState("error");
  // const [isAlert, setIsAlert] = useState(false);

  const changeEmail = (e) => {
    setEmail(e.target.value);
  };

  const changePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleClick = () => {
    if (email === "" || password === "") {
      setMessage("Please fill all the areas");
      setIsAlert(true);
      return;
    }

    login(email, password);
  };

  // const login = async (email, password) => {
  //   try {
  //     const res = await axios.post("http://localhost:8000/users/signin", {
  //       email,
  //       password,
  //     });
  //     localStorage.setItem("user", JSON.stringify(res.data.user));
  //     setStatus("success");
  //     setMessage(res.data.message);
  //     setIsAlert(true);
  //     setUser(res.data.user);
  //     handleClose();
  //   } catch (error) {
  //     console.log(error);
  //     setStatus("error");
  //     setMessage(error.response.data.message);
  //     setIsAlert(true);
  //   }
  // };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={changeEmail}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={changePassword}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            // type="submit"
            onClick={handleClick}
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Button
                onClick={() => {
                  setSignIn(false);
                }}
                variant="text"
              >
                Sign Up
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Snackbar
        open={isAlert}
        autoHideDuration={3000}
        onClose={() => {
          setIsAlert(false);
        }}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert severity={status} sx={{ width: "100%" }}>
          {message}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default SignIn;
