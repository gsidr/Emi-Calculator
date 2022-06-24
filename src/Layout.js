import { Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import Sliders from "./Sliders";
import Graphs from "./Graphs";

const Layout = () => {
  const [loanAmount, setLoanAmount] = useState(3000000);
  const [interestRate, setInterestRate] = useState(9);
  const [loanTerm, setLoanTerm] = useState(25);

  return (
    <Grid container spacing={1} sx={{ padding: 1 }}>
      <Grid
        container
        xs={12}
        sm={12}
        justifyContent="center"
        sx={{ padding: 2 }}
      >
        <Typography sx={{ color: "#314467", fontWeight: 600 }}>
          EMI Calculator
        </Typography>
      </Grid>
      <Grid
        container
        alignItems="center"
        item
        xs={12}
        sm={8}
        sx={{ border: 0 }}
      >
        <Sliders
          loanAmount={loanAmount}
          setLoanAmount={setLoanAmount}
          interestRate={interestRate}
          setInterestRate={setInterestRate}
          loanTerm={loanTerm}
          setLoanTerm={setLoanTerm}
        />
      </Grid>

      <Grid item xs={12} sm={4} sx={{ border: 0 }}>
        <Graphs
          loanAmount={loanAmount}
          interestRate={interestRate}
          loanTerm={loanTerm}
        />
      </Grid>
    </Grid>
  );
};

export default Layout;
