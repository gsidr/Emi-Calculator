import { styled } from "@mui/material/styles";
import { Grid, TextField } from "@mui/material";
import React, { useState } from "react";
import MuiInput from "@mui/material/Input";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";

const Sliders = ({
  loanAmount,
  setLoanAmount,
  interestRate,
  setInterestRate,
  loanTerm,
  setLoanTerm
}) => {
  const Input = styled(MuiInput)`
    width: 42px;
  `;

  const handleSliderChange = (event, newValue) => {
    if (event.target.name === "loan") {
      setLoanAmount(newValue);
    } else if (event.target.name === "interest") {
      setInterestRate(newValue);
    } else if (event.target.name === "term") {
      setLoanTerm(newValue);
    }
  };

  const handleInputChange = (event) => {
    if (event.target.name === "loan") {
      setLoanAmount(
        event.target.value === "" ? "" : Number(event.target.value)
      );
    } else if (event.target.name === "interest") {
      setInterestRate(
        event.target.value === "" ? "" : Number(event.target.value)
      );
    } else if (event.target.name === "term") {
      setLoanTerm(event.target.value === "" ? "" : Number(event.target.value));
    }
  };

  const handleBlur = () => {
    if (loanAmount < 0) {
      setLoanAmount(0);
    } else if (loanAmount > 50000000) {
      setLoanAmount(50000000);
    }

    if (interestRate < 0) {
      setInterestRate(0);
    } else if (interestRate > 15) {
      setInterestRate(15);
    }

    if (loanAmount < 0) {
      setLoanAmount(0);
    } else if (loanAmount > 50000000) {
      setLoanAmount(50000000);
    }
  };

  return (
    <>
      <Grid container alignItems="center" sx={{ padding: 1 }}>
        <Grid
          container
          justifyContent="space-between"
          sx={{ paddingLeft: 1, paddingRight: 1 }}
        >
          <Typography sx={{ color: "#808080" }}>Loan Amount </Typography>
          <TextField
            name="loan"
            value={loanAmount}
            size="small"
            onChange={handleInputChange}
            onBlur={handleBlur}
            inputProps={{
              step: 1,
              min: 0,
              max: 50000000,
              type: "number",
              "aria-labelledby": "input-slider"
            }}
          />
        </Grid>
        <Grid item sm={12} xs={12}>
          <Slider
            name="loan"
            value={typeof loanAmount === "number" ? loanAmount : 0}
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
            min={0}
            max={50000000}
            sx={{ color: "#314467" }}
          />
        </Grid>
        <Grid
          container
          justifyContent="space-between"
          sx={{ paddingLeft: 1, paddingRight: 1, paddingBottom: 4 }}
        >
          <Typography sx={{ color: "#808080" }}>0</Typography>
          <Typography sx={{ color: "#808080" }}>5CR</Typography>
        </Grid>

        <Grid
          container
          justifyContent="space-between"
          sx={{ paddingLeft: 1, paddingRight: 1 }}
        >
          <Typography>Interest Rate </Typography>
          <TextField
            name="interest"
            value={interestRate}
            size="small"
            onChange={handleInputChange}
            onBlur={handleBlur}
            inputProps={{
              step: 1,
              min: 0,
              max: 15,
              type: "number",
              "aria-labelledby": "input-slider"
            }}
          />
        </Grid>
        <Grid item sm={12} xs={12}>
          <Slider
            name="interest"
            value={typeof interestRate === "number" ? interestRate : 0}
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
            min={0}
            max={15}
            sx={{ color: "#314467" }}
          />
        </Grid>
        <Grid
          container
          justifyContent="space-between"
          sx={{ paddingLeft: 1, paddingRight: 1, paddingBottom: 4 }}
        >
          <Typography sx={{ color: "#808080" }}>0</Typography>
          <Typography sx={{ color: "#808080" }}>15%</Typography>
        </Grid>

        <Grid
          container
          justifyContent="space-between"
          sx={{ paddingLeft: 1, paddingRight: 1 }}
        >
          <Typography>Loan Term</Typography>
          <TextField
            name="term"
            value={loanTerm}
            size="small"
            onChange={handleInputChange}
            onBlur={handleBlur}
            inputProps={{
              step: 1,
              min: 0,
              max: 30,
              type: "number",
              "aria-labelledby": "input-slider"
            }}
          />
        </Grid>
        <Grid item sm={12} xs={12}>
          <Slider
            name="term"
            value={typeof loanTerm === "number" ? loanTerm : 0}
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
            min={0}
            max={30}
            sx={{ color: "#314467" }}
          />
        </Grid>
        <Grid
          container
          justifyContent="space-between"
          sx={{ paddingLeft: 1, paddingRight: 1, paddingBottom: 4 }}
        >
          <Typography sx={{ color: "#808080" }}>0</Typography>
          <Typography sx={{ color: "#808080" }}>30 year</Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default Sliders;
