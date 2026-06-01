import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Avatar,
  InputBase,
  Paper,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function Topbar() {
  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        backgroundColor: "rgba(2,6,23,0.9)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid #1e293b",
      }}
    >
      <Toolbar sx={{ gap: 2, py: 2 }}>
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h6" fontWeight={600}>
            Dashboard
          </Typography>
        </Box>

        <Paper
          component="form"
          sx={{
            display: "flex",
            alignItems: "center",
            px: 2,
            py: 0.5,
            width: { xs: 160, sm: 280 },
            backgroundColor: "#0f172a",
            border: "1px solid #1e293b",
          }}
        >
          <SearchIcon fontSize="small" />
          <InputBase sx={{ ml: 1, flex: 1, color: "inherit" }} placeholder="Search" />
        </Paper>

        <IconButton color="inherit">
          <Avatar sx={{ width: 34, height: 34, bgcolor: "primary.main" }}>R</Avatar>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}