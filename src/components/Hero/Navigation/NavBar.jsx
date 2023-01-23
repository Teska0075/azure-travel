import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import BasicModal from "../Modal";

const drawerWidth = 240;
const navItems = ["Home", "Stays", "Flights", "Packages"];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        component="nav"
        sx={{
          paddingX: 5,
          height: 80,
          background: "transparent",
          boxShadow: "none",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
              fontWeight: 700,
              fontSize: 32,
            }}
          >
            trxvl.
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ marginRight: 5, color: "#fff" }}>
                {item}
              </Button>
            ))}
          </Box>
          <BasicModal />
        </Toolbar>
      </AppBar>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;
