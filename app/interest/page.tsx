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
import { createClient } from "@supabase/supabase-js";

const FormPage = () => {
  const supabaseUrl = "https://imvwemablctuyjvhvifd.supabase.co";
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY ?? "";
  const supabase = createClient(supabaseUrl, supabaseKey);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget); // Use currentTarget for TypeScript
    const firstName = formData.get("firstName")?.toString() || "";
    const age = parseInt(formData.get("age")?.toString() || "0", 10);
    const gender = formData.get("gender")?.toString() || "";
    const major = formData.get("major")?.toString() || "";
    const email = formData.get("email")?.toString() || "";

    try {
      const { data, error } = await supabase
        .from("interest-form")
        .insert([{ f_name: firstName, age, gender, major, email }]);

      if (error) throw error;
      window.location.href = "/formsuccess";
    } catch (error) {
      console.error("Error submitting form:", error);
      window.location.href = "/formfail";
    }
  };

  const buttonText = "Submit >>";
  const information =
    "The interest form serves as a vital tool for us to connect with students who are keen on learning more about our offerings and initiatives. It not only enables us to reach out and engage with you directly but also assists the school in gaining insightful understanding of the demographics and diverse backgrounds of students showing interest. This helps us tailor our programs and communications more effectively to meet your needs and interests. Please be assured that the information collected through this form will primarily be used for internal analysis of demographic trends and to enhance our outreach efforts. We are committed to maintaining the highest standards of privacy and data protection. Your personal information will be handled with utmost confidentiality and will not be shared with third parties without your explicit consent. By submitting this form, you agree to allow us to process your data for the purposes mentioned, in accordance with our privacy policies and applicable laws.";
  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Interest Form
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} direction="column">
          <Grid item>
            <TextField
              fullWidth
              label="First Name"
              variant="outlined"
              name="firstName"
            />
          </Grid>
          <Grid item>
            <TextField
              fullWidth
              label="Age"
              type="number"
              variant="outlined"
              InputProps={{ inputProps: { min: 0 } }}
              name="age"
            />
          </Grid>
          <Grid item>
            <TextField
              fullWidth
              select
              label="Gender"
              variant="outlined"
              name="gender"
            >
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
              name="major"
            />
          </Grid>
          <Grid item>
            <TextField
              fullWidth
              label="Email Address (optional) (add if you would like us to reach out to you)"
              type="email" // Specify the type as email for appropriate keyboard and validation
              variant="outlined"
              name="email"
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
