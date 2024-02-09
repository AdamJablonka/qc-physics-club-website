"use client";
import React from "react";
import {
  Container,
  Typography,
  TextField,
  MenuItem,
  Button,
  Grid,
} from "@mui/material";

const FormPage = () => {
  const buttonText = "Submit >>";
  const information =
    "The interest form serves as a vital tool for us to connect with students who are keen on learning more about our offerings and initiatives. It not only enables us to reach out and engage with you directly but also assists the school in gaining insightful understanding of the demographics and diverse backgrounds of students showing interest. This helps us tailor our programs and communications more effectively to meet your needs and interests. Please be assured that the information collected through this form will primarily be used for internal analysis of demographic trends and to enhance our outreach efforts. We are committed to maintaining the highest standards of privacy and data protection. Your personal information will be handled with utmost confidentiality and will not be shared with third parties without your explicit consent. By submitting this form, you agree to allow us to process your data for the purposes mentioned, in accordance with our privacy policies and applicable laws.";
  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Interest Form
      </Typography>
      <form>
        <Grid container spacing={2} direction="column">
          <Grid item>
            <TextField fullWidth label="First Name" variant="outlined" />
          </Grid>
          <Grid item>
            <TextField
              fullWidth
              label="Age"
              type="number"
              variant="outlined"
              InputProps={{ inputProps: { min: 0 } }}
            />
          </Grid>
          <Grid item>
            <TextField fullWidth select label="Gender" variant="outlined">
              <MenuItem value="female">Female</MenuItem>
              <MenuItem value="male">Male</MenuItem>
              <MenuItem value="non-binary">Non-binary</MenuItem>
              <MenuItem value="other">Other</MenuItem>
            </TextField>
          </Grid>
          <Grid item>
            <TextField
              fullWidth
              label="Current Major (If multiple, list your favorite one)"
              variant="outlined"
            />
          </Grid>
          <Grid item>
            <TextField
              fullWidth
              label="Email Address (optional) (add if you would like us to reach out to you)"
              type="email" // Specify the type as email for appropriate keyboard and validation
              variant="outlined"
              // Optional: Add InputProps for additional email-specific configurations
            />
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              type="submit"
              sx={{
                textAlign: "right",
                mt: 1,
                mb: 1,
                fontWeight: "bold",
                color: (theme) => theme.palette.text.primary,
                backgroundColor: (theme) =>
                  `${theme.palette.background.paper} !important`,
                borderRadius: "2rem",
              }}
            >
              {buttonText}
            </Button>
          </Grid>
        </Grid>
      </form>
      <Typography variant="h3" sx={{ mt: 2, mb: 2 }}>
        Information
      </Typography>
      <Typography sx={{ mt: 2, mb: 5 }}>{information}</Typography>
    </Container>
  );
};

export default FormPage;
