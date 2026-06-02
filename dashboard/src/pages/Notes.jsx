import { Box, Grid } from "@mui/material";

import noteStats from "../data/noteStats";

import NoteStatsCard from "../components/Notes/NoteStatsCard";
import NotesOverviewChart from "../components/Notes/NotesOverviewChart";
import PinnedNotes from "../components/Notes/PinnedNotes";
import RecentNotes from "../components/Notes/RecentNotes";

export default function Notes() {
  return (
    <Box
      sx={{
        width: "100%",
        p: 3,
        backgroundColor: "#020617",
        minHeight: "100vh",
      }}
    >
      {/* Top Layer: Stats Grid */}
      <Grid container spacing={6} sx={{ mb: 3 }}>
        {noteStats.map((item) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            key={item.label}
          >
            <NoteStatsCard {...item} />
          </Grid>
        ))}
      </Grid>

      {/* Middle Layer: Notes Activity */}
      <Box sx={{ width: "100%", mb: 3 }}>
        <NotesOverviewChart />
      </Box>

      {/* Pinned Notes */}
      <Box sx={{ width: "100%", mb: 3 }}>
        <PinnedNotes />
      </Box>

      {/* Recent Notes */}
      <Box sx={{ width: "100%" }}>
        <RecentNotes />
      </Box>
    </Box>
  );
}