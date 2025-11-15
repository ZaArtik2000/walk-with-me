import { Box, CircularProgress, Fade, Typography, Paper } from "@mui/material";

function GlobalLoader() {
  return (
    <Fade in>
      <Box
        sx={{
          position: "fixed",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: 2,
          zIndex: (theme) => theme.zIndex.modal + 1,
          bgcolor: "transparent",
        }}
      >
        <Paper
          elevation={0}
          sx={{
            p: { xs: 3, sm: 4 },
            borderRadius: 4,
            bgcolor: "common.white",
            border: "1px solid",
            borderColor: "rgba(0,0,0,0.05)",
            boxShadow:
              "0 8px 20px rgba(17, 17, 26, 0.05), 0 30px 60px rgba(17, 17, 26, 0.08)",
            display: "flex",
            alignItems: "center",
            gap: 2,
          }}
        >
          <CircularProgress size={28} thickness={5} />
          <Typography sx={{ color: "text.secondary" }}>
            Завантаження…
          </Typography>
        </Paper>
      </Box>
    </Fade>
  );
}

export default GlobalLoader;
