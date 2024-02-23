import React, { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const Calculator = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [selectedOperation, setSelectedOperation] = useState(null);
  const [result, setResult] = useState(null);

  const handleOperation = (operation) => {
    setSelectedOperation(operation);
  };

  const calculateResult = () => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (isNaN(n1) || isNaN(n2)) {
      setResult("Invalid input");
      return;
    }

    switch (selectedOperation) {
      case "+":
        setResult(`${n1} + ${n2} = ${n1 + n2}`);
        break;
      case "-":
        setResult(`${n1} - ${n2} = ${n1 - n2}`);
        break;
      case "*":
        setResult(`${n1} * ${n2} = ${n1 * n2}`);
        break;
      case "/":
        setResult(`${n1} / ${n2} = ${n1 / n2}`);
        break;
      case "%":
        setResult(`${n1} % ${n2} = ${n1 % n2}`);
        break;
      default:
        setResult("Select an operation");
    }
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
        }}
      >
        <Box
          sx={{ bgcolor: "#f2f2f2", p: 3, width: "50%", textAlign: "center" }}
        >
          <Typography variant="h3" gutterBottom>
            Calculator
          </Typography>
          <form>
            <Typography variant="h6" gutterBottom>
              Number1 :
            </Typography>
            <input
              type="number"
              value={num1}
              onChange={(e) => setNum1(e.target.value)}
              placeholder="Enter number 1"
              style={{ margin: "8px", padding: "8px" }}
            />
            <Typography variant="h6" gutterBottom>
              Number2 :
            </Typography>
            <input
              type="number"
              value={num2}
              onChange={(e) => setNum2(e.target.value)}
              placeholder="Enter number 2"
              style={{ margin: "8px", padding: "8px" }}
            />
            <Typography variant="h6" gutterBottom>
              Calculator Menu:
            </Typography>
            <div>
              <Button
                variant={selectedOperation === "+" ? "contained" : "outlined"}
                onClick={() => handleOperation("+")}
                style={{ margin: "8px" }}
              >
                +
              </Button>
              <Button
                variant={selectedOperation === "-" ? "contained" : "outlined"}
                onClick={() => handleOperation("-")}
                style={{ margin: "8px" }}
              >
                -
              </Button>
              <Button
                variant={selectedOperation === "*" ? "contained" : "outlined"}
                onClick={() => handleOperation("*")}
                style={{ margin: "8px" }}
              >
                *
              </Button>
              <Button
                variant={selectedOperation === "/" ? "contained" : "outlined"}
                onClick={() => handleOperation("/")}
                style={{ margin: "8px" }}
              >
                /
              </Button>
              <Button
                variant={selectedOperation === "%" ? "contained" : "outlined"}
                onClick={() => handleOperation("%")}
                style={{ margin: "8px" }}
              >
                %
              </Button>
            </div>
            <br />
            <Button
              variant="contained"
              color="primary"
              onClick={calculateResult}
              style={{ margin: "8px" }}
            >
              Calculate
            </Button>
          </form>
          {result !== null && (
            <div>
              <h3>Result:</h3>
              <p>{result}</p>
            </div>
          )}
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default Calculator;
