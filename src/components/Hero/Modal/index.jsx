import { React, useContext } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import AuthPage from "../../../pages/Authentication";
import { UserContext } from "../../../context";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const BasicModal = ({
  user,
  login,
  handleOpen,
  handleClose,
  open,
  setUser,
}) => {
  const { logout } = useContext(UserContext);

  return (
    <>
      {user ? (
        <Button
          onClick={() => {
            logout();
          }}
          sx={{
            padding: "0",
            fontWeight: "700",
            fontSize: "16px",
            color: "#fff",
            textTransform: "none",
            marginLeft: "2vw",
            opacity: "0.8",
          }}
        >
          Sign Out
        </Button>
      ) : (
        <Button
          onClick={handleOpen}
          sx={{
            padding: "0",
            fontWeight: "700",
            fontSize: "16px",
            color: "#fff",
            textTransform: "none",
            marginLeft: "2vw",
            opacity: "0.8",
          }}
        >
          Sign In
        </Button>
      )}
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <AuthPage handleClose={handleClose} setUser={setUser} login={login} />
        </Box>
      </Modal>
    </>
  );
};

export default BasicModal;
