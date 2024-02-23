import React, { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Typography, TextField, Button } from "@mui/material";

const Grade = () => {
  const [Name, setName] = useState("");
  const [studentID, setStudentID] = useState("");
  const [testScore, setTestScore] = useState("");
  const [grade, setGrade] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const calculateGrade = () => {
    const numericScore = parseFloat(testScore);

    if (isNaN(numericScore) || numericScore < 0 || numericScore > 100) {
      // Handle invalid input
      setGrade("Invalid Score");
    } else if (numericScore >= 90) {
      setGrade("A");
    } else if (numericScore >= 80) {
      setGrade("B");
    } else if (numericScore >= 70) {
      setGrade("C");
    } else if (numericScore >= 60) {
      setGrade("D");
    } else {
      setGrade("F");
    }

    // Always show the result after calculation
    setShowResult(true);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container
        maxWidth="lg"
        sx={{
          p: 2,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          // height: "200vh",
        }}
      >
        <Box
          sx={{ bgcolor: "#f2f2f2", p: 3, width: "70%", textAlign: "center" }}
        >
          <Typography variant="h3" gutterBottom>
            Calculate grade
          </Typography>
          <form>
            <Typography variant="h6" gutterBottom>
              First and last name
            </Typography>
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              margin="normal"
              value={Name}
              onChange={(e) => setName(e.target.value)}
            />
            <Typography variant="h6" gutterBottom>
              Student ID
            </Typography>
            <TextField
              label="Student ID"
              variant="outlined"
              fullWidth
              margin="normal"
              value={studentID}
              onChange={(e) => setStudentID(e.target.value)}
            />
            <Typography variant="h6" gutterBottom>
              Enter your score
            </Typography>
            <TextField
              label="Test Score"
              variant="outlined"
              fullWidth
              margin="normal"
              type="number"
              value={testScore}
              onChange={(e) => setTestScore(e.target.value)}
            />
            <Button
              variant="contained"
              color="secondary"
              onClick={calculateGrade}
              sx={{ mt: 2 }}
            >
              Calculate Grade
            </Button>
          </form>
          {showResult && (
            <Box sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom>
                your name is : {Name}
              </Typography>
              <Typography variant="h6" gutterBottom>
                Student ID is : {studentID}
              </Typography>
              <Typography variant="h6" gutterBottom>
                Your score is : {testScore}
              </Typography>
              <Typography variant="h6" gutterBottom>
                Your grade is : {grade}
              </Typography>
            </Box>
          )}
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default Grade;
