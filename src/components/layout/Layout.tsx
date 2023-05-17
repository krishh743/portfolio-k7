import { Stack } from "@mui/system";
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";
import { LayoutStylesWrapper } from "./Layout.styles";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { Box, Button, IconButton, Paper, Typography } from "@mui/material";
// import { RouteConfigurations } from "routes/RouteConfigurations";

interface LayoutProps {
  menus: any;
  layouturl?: string;
  children: React.ReactNode;
}

const Layout = ({ layouturl, children, menus }: LayoutProps) => {
  const navigate = useNavigate();

  return (
    <LayoutStylesWrapper>
      <Stack className={"layout-header"} justifyContent={"flex-start"}>
        <IconButton
          color="inherit"
          size="small"
          // onClick={() => navigate(RouteConfigurations.welcome)}
        >
          <ChevronLeftIcon />
        </IconButton>
        <Typography variant="h6">
          {layouturl === "/profile-details"
            ? "Profile Details"
            : "Basic Details"}
        </Typography>
      </Stack>
      <Paper variant="outlined" className="outlined-container">
        <Box className={"side-menu-bar"}>
          {menus.map((menu: any) => (
            <NavLink
              key={menu.id}
              to={menu.path}
              className={({ isActive }) =>
                `link-button ${isActive && "active-state"}`
              }
              color={"grey.300"}
            >
              {menu.id}
            </NavLink>
          ))}
        </Box>
        <Box className={"layout-content"}>{children}</Box>
      </Paper>
    </LayoutStylesWrapper>
  );
};

export default Layout;
