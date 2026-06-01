import { Box, Stack } from "@mui/material";
import stats from "../data/stats";
import StatCard from "../components/Dashboard/StatCard";
import WeeklyChart from "../components/Dashboard/WeeklyChart";
import TaskList from "../components/Dashboard/TaskList";
import { Grid } from "@mui/material";

export default function Dashboard() {
  return (
    <Box sx={{ width: "100%", p: 3 }}>

      {/* Stat cards row */}
      <Grid container spacing={6} sx={{ mb: 3 }}>
        {stats.map((item) => (
          <Grid item xs={12} key={item.label}>
            <StatCard {...item} />
          </Grid>
        ))}
      </Grid>

      {/* Full-width chart */}
      <Box sx={{ width: "100%", mb: 3 }}>
        <WeeklyChart />
      </Box>

      {/* Full-width task list */}
      <Box sx={{ width: "100%" }}>
        <TaskList />
      </Box>

    </Box>
  );
}