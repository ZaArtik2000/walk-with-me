import { useState } from "react";
import {
  Paper,
  Stack,
  Button,
  Typography,
  Fade,
  Box,
  RadioGroup,
  Radio,
  FormControlLabel,
  FormControl,
} from "@mui/material";
import WavingHandIcon from "@mui/icons-material/WavingHand";
import InfoIcon from "@mui/icons-material/Info";
import DirectionsWalkIcon from "@mui/icons-material/DirectionsWalk";
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
  const [selectedOption, setSelectedOption] = useState("");

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
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 1.5,
            }}
          >
            Привіт Мілан!
            <WavingHandIcon
              sx={{ fontSize: { xs: 32, sm: 40 }, color: "primary.main" }}
            />
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
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 1.5,
            }}
          >
            Маленьке уточнення…
            <InfoIcon
              sx={{ fontSize: { xs: 28, sm: 36 }, color: "primary.main" }}
            />
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
              title="Що по шрифту?"
              description="Цей шрифт тут такий собі канешн 🤔, але міняти його на інший ніби теж не варіант 🤷‍♂️"
              sx={{ display: "inline-block", verticalAlign: "middle" }}
            />
          </Typography>
          <FormControl component="fieldset" sx={{ mt: 4, width: "100%" }}>
            <RadioGroup
              value={selectedOption}
              onChange={(e) => setSelectedOption(e.target.value)}
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                gap: 2,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <FormControlLabel
                value="sounds-interesting"
                control={
                  <Radio
                    sx={{
                      "&.Mui-checked": {
                        color: "primary.main",
                      },
                    }}
                  />
                }
                label="Звучить цікаво"
                sx={{
                  m: 0,
                  px: 3,
                  py: 1.5,
                  borderRadius: 2,
                  border: "2px solid",
                  borderColor:
                    selectedOption === "sounds-interesting"
                      ? "primary.main"
                      : "rgba(0,0,0,0.12)",
                  bgcolor:
                    selectedOption === "sounds-interesting"
                      ? "rgba(25, 118, 210, 0.04)"
                      : "transparent",
                  "&:hover": {
                    borderColor: "primary.main",
                    bgcolor: "rgba(25, 118, 210, 0.04)",
                  },
                  transition: "all 0.2s ease-in-out",
                }}
              />
              <FormControlLabel
                value="love-walks"
                control={
                  <Radio
                    sx={{
                      "&.Mui-checked": {
                        color: "primary.main",
                      },
                    }}
                  />
                }
                label="Люблю прогулянки"
                sx={{
                  m: 0,
                  px: 3,
                  py: 1.5,
                  borderRadius: 2,
                  border: "2px solid",
                  borderColor:
                    selectedOption === "love-walks"
                      ? "primary.main"
                      : "rgba(0,0,0,0.12)",
                  bgcolor:
                    selectedOption === "love-walks"
                      ? "rgba(25, 118, 210, 0.04)"
                      : "transparent",
                  "&:hover": {
                    borderColor: "primary.main",
                    bgcolor: "rgba(25, 118, 210, 0.04)",
                  },
                  transition: "all 0.2s ease-in-out",
                }}
              />
            </RadioGroup>
          </FormControl>
          {selectedOption && (
            <Stack
              direction="row"
              spacing={2}
              justifyContent="center"
              sx={{ mt: 4 }}
            >
              <Button
                size="large"
                variant="contained"
                onClick={onComplete}
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
          )}
        </StepContainer>
      ) : null}
    </Box>
  );
}

export default WelcomeFlow;
