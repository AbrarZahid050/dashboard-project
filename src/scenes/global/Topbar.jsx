import { useContext } from "react";
import { useTheme, Box, InputBase, IconButton } from "@mui/material";
import { tokens, ColorModeContext } from "../../theme";
import {
  Search,
  NotificationsOutlined,
  PersonOutline,
  LightModeOutlined,
  DarkModeOutlined,
  SettingsOutlined,
} from "@mui/icons-material";

const Topbar = () => {
  const theme = useTheme();
  const color = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      {/* search-bar */}
      <Box display="flex" backgroundColor={color.primary[400]} borderRadius={1}>
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton type="button" sx={{ p: 1 }}>
          <Search />
        </IconButton>
      </Box>

      {/* Icon-btns */}
      <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "light" ? (
            <DarkModeOutlined />
          ) : (
            <LightModeOutlined />
          )}
        </IconButton>
        <IconButton>
          <NotificationsOutlined />
        </IconButton>
        <IconButton>
          <SettingsOutlined />
        </IconButton>
        <IconButton>
          <PersonOutline />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Topbar;
