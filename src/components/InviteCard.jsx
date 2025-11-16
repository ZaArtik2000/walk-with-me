import { useEffect, useRef, useState } from "react";
import { Paper, Stack, Button, Typography, Fade } from "@mui/material";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";

function InviteCard({ onProceed }) {
  const [noShift, setNoShift] = useState({ x: 0, y: 0 });
  const paperRef = useRef(null);
  const noBtnRef = useRef(null);
  const firstNoBtnRectRef = useRef(null);
  const resetTimerRef = useRef(null);

  const moveNoButtonAway = () => {
    if (resetTimerRef.current) {
      clearTimeout(resetTimerRef.current);
      resetTimerRef.current = null;
    }
    if (!firstNoBtnRectRef.current) {
      firstNoBtnRectRef.current = noBtnRef.current.getBoundingClientRect();
    }
    const paper = paperRef.current;
    const btn = noBtnRef.current;
    if (!paper || !btn) return;
    const paperRect = paper.getBoundingClientRect();
    const btnRect = btn.getBoundingClientRect();
    const vw = window.innerWidth - firstNoBtnRectRef.current.left;
    const vh = window.innerHeight - firstNoBtnRectRef.current.top;
    const margin = 24;

    const clamp = (value, min, max) => Math.min(Math.max(value, min), max);
    const minLeft = margin;
    const maxLeft = vw - btnRect.width - margin;
    const minTop = margin;
    const maxTop = vh - btnRect.height - margin;

    const candidates = [
      {
        // left of card
        left: paperRect.left - btnRect.width - margin,
        top: paperRect.top + paperRect.height / 2 - btnRect.height / 2,
      },
      {
        // right of card
        left: paperRect.right + margin,
        top: paperRect.top + paperRect.height / 2 - btnRect.height / 2,
      },
      {
        // above card
        left: paperRect.left + paperRect.width / 2 - btnRect.width / 2,
        top: paperRect.top - btnRect.height - margin,
      },
      {
        // below card
        left: paperRect.left + paperRect.width / 2 - btnRect.width / 2,
        top: paperRect.bottom + margin,
      },
    ]
      .map((pos) => ({
        left: clamp(pos.left, minLeft, maxLeft),
        top: clamp(pos.top, minTop, maxTop),
      }))
      .filter(
        (pos) =>
          pos.left >= minLeft &&
          pos.left <= maxLeft &&
          pos.top >= minTop &&
          pos.top <= maxTop
      );

    let pick;
    if (candidates.length > 0) {
      pick = candidates[Math.floor(Math.random() * candidates.length)];
    } else {
      // Fallback: random in-bounds position within viewport
      pick = {
        left: Math.round(minLeft + Math.random() * (maxLeft - minLeft)),
        top: Math.round(minTop + Math.random() * (maxTop - minTop)),
      };
    }

    const targetLeft = clamp(pick.left, minLeft, maxLeft);
    const targetTop = clamp(pick.top, minTop, maxTop);

    setNoShift({
      x: Math.round(targetLeft - btnRect.left),
      y: Math.round(targetTop - btnRect.top),
    });

    resetTimerRef.current = setTimeout(() => {
      setNoShift({ x: 0, y: 0 });
      resetTimerRef.current = null;
    }, 1000);
  };

  useEffect(() => {
    return () => {
      if (resetTimerRef.current) {
        clearTimeout(resetTimerRef.current);
      }
    };
  }, []);

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
        ref={paperRef}
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
            variant="contained"
            color="inherit"
            disableRipple
            disableElevation
            onMouseEnter={() => {
              moveNoButtonAway();
            }}
            // onClick={() => {
            //   onProceed();
            // }}
            sx={{
              px: 3,
              py: 1.25,
              textTransform: "none",
              width: "188.11px",
              border: "1px solid rgba(0,0,0,0.12)",
              bgcolor: "common.white",
              color: "text.primary",
              position: "relative",
              transform: `translate(${noShift.x}px, ${noShift.y}px)`,
              transition: "transform 280ms cubic-bezier(0.2, 0.8, 0.2, 1)",
              zIndex: 10000,
              "&:hover": {
                borderColor: "white",
                cursor: "default",
              },
            }}
            ref={noBtnRef}
          >
            Ні, не хочу
            {/* {isHoveringNo ? "Так, я не проти" : "Ні, не хочу"} */}
          </Button>
        </Stack>
      </Paper>
    </Fade>
  );
}

export default InviteCard;
