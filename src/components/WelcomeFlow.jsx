import { useState } from "react";
import { Paper, Stack, Button, Typography, Fade, Box } from "@mui/material";
import { QuestionTooltip } from "./QuestionTooltip";

function StepContainer({ children }) {
  return (
    <Fade in>
      <Paper
        elevation={0}
        sx={{
          p: { xs: 4, sm: 6 },
          maxWidth: 680,
          position: "relative",
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
        {children}
      </Paper>
    </Fade>
  );
}

function WelcomeFlow({ onComplete }) {
  const [step, setStep] = useState(0);

  const next = () => setStep((s) => Math.min(s + 1, 2));

  return (
    <Box
      sx={{
        position: "fixed",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: 2,
        bgcolor: "#B2B2B2	", // darker background for welcome flow
        zIndex: (theme) => theme.zIndex.modal, // above page content, below GlobalLoader
      }}
    >
      {step === 0 ? (
        <StepContainer>
          <Typography
            sx={{
              fontFamily: '"Pacifico", cursive',
              fontSize: { xs: 32, sm: 40 },
              color: "text.primary",
              lineHeight: 1.2,
            }}
          >
            👋 Привіт Мілан!
          </Typography>
          <Typography sx={{ mt: 2, color: "text.secondary" }}>
            Це маленький міні-додаток, який допоможе дізнатись одну важливу річ…
          </Typography>
          <Stack
            direction="row"
            spacing={2}
            justifyContent="center"
            sx={{ mt: 4 }}
          >
            <Button
              size="large"
              variant="contained"
              onClick={next}
              sx={{
                textTransform: "none",
                fontWeight: 700,
                boxShadow:
                  "0 6px 14px rgba(25, 118, 210, 0.2), 0 10px 32px rgba(25, 118, 210, 0.16)",
              }}
            >
              Далі
            </Button>
          </Stack>
        </StepContainer>
      ) : null}

      {step === 1 ? (
        <StepContainer>
          <Typography
            sx={{
              fontFamily: '"Pacifico", cursive',
              fontSize: { xs: 28, sm: 36 },
              color: "text.primary",
              lineHeight: 1.2,
            }}
          >
            🤔 Маленьке уточнення…
          </Typography>
          <Typography sx={{ mt: 2, color: "text.secondary" }}>
            Обіцяю: тут немає реклами, платної підписки чи тарифів 🤗
          </Typography>
          <Stack
            direction="row"
            spacing={2}
            justifyContent="center"
            sx={{ mt: 4 }}
          >
            <Button
              size="large"
              variant="contained"
              onClick={next}
              sx={{
                textTransform: "none",
                fontWeight: 700,
                boxShadow:
                  "0 6px 14px rgba(25, 118, 210, 0.2), 0 10px 32px rgba(25, 118, 210, 0.16)",
              }}
            >
              Далі
            </Button>
          </Stack>
        </StepContainer>
      ) : null}

      {step === 2 ? (
        <StepContainer>
          <Typography
            sx={{
              position: "relative",
              fontFamily: '"Pacifico", cursive',
              fontSize: { xs: 24, sm: 30 },
              color: "text.primary",
              lineHeight: 1.25,
            }}
          >
            Як ти ставишся до спонтанних прогулянок у приємній компанії ?
            <QuestionTooltip
              title="Шо по шрифту?"
              description="Цей шрифт тут наче гувно 🤔, але міняти його на інший ніби теж не варіант 🤷‍♂️."
              sx={{ display: "inline-block", verticalAlign: "middle" }}
            />
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
              onClick={onComplete}
              sx={{
                px: 3,
                py: 1.25,
                textTransform: "none",
                fontWeight: 700,
                boxShadow:
                  "0 6px 14px rgba(25, 118, 210, 0.2), 0 10px 32px rgba(25, 118, 210, 0.16)",
              }}
            >
              Звучить цікаво
            </Button>
            <Button
              size="large"
              variant="outlined"
              color="inherit"
              onClick={onComplete}
              sx={{
                px: 3,
                py: 1.25,
                textTransform: "none",
                border: "1px solid rgba(0,0,0,0.12)",
                bgcolor: "common.white",
                color: "text.primary",
              }}
            >
              Люблю прогулянки
            </Button>
          </Stack>
        </StepContainer>
      ) : null}
    </Box>
  );
}

export default WelcomeFlow;
