import { useState } from "react";
import { Paper, Stack, Button, Typography, Fade } from "@mui/material";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";

function InviteCard({ onProceed }) {
  const [isHoveringNo, setIsHoveringNo] = useState(false);

  return (
    <Fade in>
      <Paper
        elevation={0}
        sx={{
          p: { xs: 4, sm: 6 },
          maxWidth: 680,
          textAlign: "center",
          borderRadius: 4,
          bgcolor: "common.white",
          boxShadow:
            "0 8px 20px rgba(17, 17, 26, 0.05), 0 30px 60px rgba(17, 17, 26, 0.08)",
          border: "1px solid",
          borderColor: "rgba(0,0,0,0.05)",
          mx: "auto",
        }}
      >
        <Typography
          sx={{
            fontFamily: '"Pacifico", cursive',
            fontSize: { xs: 32, sm: 40 },
            color: "text.primary",
            lineHeight: 1.2,
          }}
        >
          Хочеш прогулятися зі мною? 🌸
        </Typography>
        <Typography sx={{ mt: 2, color: "text.secondary" }}>
          Обіцяю гарний настрій, свіже повітря і кілька усмішок 🌿
        </Typography>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          sx={{ mt: 4 }}
          justifyContent="center"
        >
          <Button
            size="large"
            variant="contained"
            color="primary"
            endIcon={<FavoriteRoundedIcon />}
            onClick={onProceed}
            sx={{
              px: 3,
              py: 1.25,
              textTransform: "none",
              fontWeight: 700,
              boxShadow:
                "0 6px 14px rgba(25, 118, 210, 0.2), 0 10px 32px rgba(25, 118, 210, 0.16)",
            }}
          >
            Так, я не проти
          </Button>
          <Button
            size="large"
            variant="outlined"
            color="inherit"
            endIcon={isHoveringNo ? <FavoriteRoundedIcon /> : null}
            onMouseEnter={() => setIsHoveringNo(true)}
            onMouseLeave={() => setIsHoveringNo(false)}
            onClick={() => {
              onProceed();
              setIsHoveringNo(false);
            }}
            sx={{
              px: 3,
              py: 1.25,
              textTransform: "none",
              width: "188.11px",
              borderColor: "rgba(0,0,0,0.12)",
              color: "text.secondary",
              "&:hover": {
                borderColor: "primary.main",
                color: "primary.main",
                backgroundColor: "transparent",
              },
            }}
          >
            {isHoveringNo ? "Так, я не проти" : "Ні, не хочу"}
          </Button>
        </Stack>
      </Paper>
    </Fade>
  );
}

export default InviteCard;
