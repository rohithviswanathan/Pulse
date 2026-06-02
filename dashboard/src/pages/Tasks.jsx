import { Box, Grid } from "@mui/material";
import { useState } from "react";
import StatCard from "../components/Tasks/StatCard";
import TaskFilters from "../components/Tasks/TaskFilters";
import TaskTable from "../components/Tasks/TaskTable";
import tasks from "../data/tasks";

const getStats = (tasks) => [
  { label: "Total",       value: tasks.length, dot: "#6366f1", note: "All tasks"  },
  { label: "Completed",   value: tasks.filter((t) => t.status === "Done").length,  dot: "#10b981", note: "Keep it up" },
  { label: "In progress", value: tasks.filter((t) => t.status === "Doing").length, dot: "#f59e0b", note: "Active now" },
  { label: "Todo",        value: tasks.filter((t) => t.status === "Todo").length,  dot: "#64748b", note: "Pending"    },
];

export default function Tasks() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const stats = getStats(tasks);

  return (
    <Box sx={{ width: "100%", p: 3 }}>

      <Grid container spacing={6} sx={{ width: "100%", m: 0, mb: 3 }}>
        {stats.map((s) => (
          <Grid item xs={12} sm={6} md={3} key={s.label}>
            <StatCard {...s} />
          </Grid>
        ))}
      </Grid>

      <Box sx={{ mb: 3 }}>
        <TaskFilters search={search} onSearch={setSearch} filter={filter} onFilter={setFilter} />
      </Box>

      <TaskTable search={search} filter={filter} />

    </Box>
  );
}