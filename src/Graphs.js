import { styled } from "@mui/material/styles";
import { Box, Grid, TextField } from "@mui/material";
import React, { useState } from "react";
import MuiInput from "@mui/material/Input";
import Typography from "@mui/material/Typography";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const Graphs = ({ loanAmount, interestRate, loanTerm }) => {
  // E=[P×R×(1+R) n] ÷ [(1+R) n-1]
  let ratePerc = interestRate / 12 / 100;
  let loanTermMonths = loanTerm * 12;
  let emi =
    (loanAmount * ratePerc * Math.pow(1 + ratePerc, loanTermMonths)) /
    (Math.pow(1 + ratePerc, loanTermMonths) - 1);
  let total = emi * loanTermMonths;
  let interest = total - loanAmount;

  const data = {
    labels: ["Interest payable", "Principal amount"],
    datasets: [
      {
        label: "# of Votes",
        data: [interest, loanAmount],
        backgroundColor: ["rgb(255, 165, 0)", "rgb(124, 181, 236)"],
        borderColor: ["rgb(255, 165, 0)", "rgb(124, 181, 236)"],
        borderWidth: 1
      }
    ]
  };

  return (
    <>
      <Grid container alignItems="center">
        <Grid item xs={12} sm={12} sx={{ paddingBottom: 1 }}>
          <Box
            sx={{
              border: 1,
              borderWidth: 10,
              borderRadius: 2,
              borderColor: "#f6f6f6",
              position: "relative"
            }}
          >
            <Doughnut data={data} />
            <Box
              sx={{
                position: "absolute",
                top: "55%",
                left: "50%",
                zIndex: 100,
                transform: "translate(-50%,-50%)"
              }}
            >
              <div style={{ fontSize: 14 }}>Total amount(loan+interest)</div>
              <Typography sx={{ fontWeight: 600, fontSize: 14 }}>
                {(interest + loanAmount).toFixed(2)}
              </Typography>
            </Box>
          </Box>
        </Grid>

        <Grid container xs={12} sm={12} alignItems="center">
          <Grid item xs={4} sm={4}>
            <Typography sx={{ fontSize: 12 }}>Monthly Emi </Typography>
            <Typography sx={{ fontWeight: 600 }}>{emi.toFixed(2)}</Typography>
          </Grid>
          <Grid item xs={4} sm={4}>
            <Typography sx={{ fontSize: 12 }}>Principal </Typography>
            <Typography sx={{ fontWeight: 600 }}>{loanAmount}</Typography>
          </Grid>
          <Grid item xs={4} sm={4}>
            <Typography sx={{ fontSize: 12 }}>Interest payable </Typography>
            <Typography sx={{ fontWeight: 600 }}>
              {interest.toFixed(2)}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Graphs;
