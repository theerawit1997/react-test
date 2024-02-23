import React, { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const CRUD = () => {
  const [employees, setEmployees] = useState([]);
  const [newEmployee, setNewEmployee] = useState({
    name: "",
    employeeNumber: "",
  });
  const [editingIndex, setEditingIndex] = useState(null);
  const [error, setError] = useState(null);

  const handleInputChange = (key, value) => {
    setNewEmployee((prev) => ({ ...prev, [key]: value }));
  };

  const isEmployeeNumberUnique = (employeeNumber) => {
    return !employees.some(
      (employee) => employee.employeeNumber === employeeNumber
    );
  };

  const addEmployee = () => {
    if (
      newEmployee.name &&
      newEmployee.employeeNumber &&
      isEmployeeNumberUnique(newEmployee.employeeNumber)
    ) {
      setEmployees([...employees, newEmployee]);
      setNewEmployee({ name: "", employeeNumber: "" });
      setError(null);
    } else {
      setError("Employee Number must be unique.");
    }
  };

  const editEmployee = (index) => {
    setEditingIndex(index);
    setNewEmployee(employees[index]);
  };

  const updateEmployee = () => {
    if (
      newEmployee.name &&
      newEmployee.employeeNumber &&
      editingIndex !== null &&
      isEmployeeNumberUnique(newEmployee.employeeNumber)
    ) {
      const updatedEmployees = [...employees];
      updatedEmployees[editingIndex] = newEmployee;
      setEmployees(updatedEmployees);
      setNewEmployee({ name: "", employeeNumber: "" });
      setEditingIndex(null);
      setError(null);
    } else {
      setError("Employee Number must be unique.");
    }
  };

  const deleteEmployee = (index) => {
    const updatedEmployees = employees.filter((_, i) => i !== index);
    setEmployees(updatedEmployees);
    setEditingIndex(null);
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
          component="form"
          sx={{
            bgcolor: "#f2f2f2",
            p: 3,
            width: "80%",
            textAlign: "center",
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <Typography variant="h2" gutterBottom>
            Employee Management
          </Typography>
          <form>
            <div>
              <TextField
                label="รหัสลูกค้า"
                variant="outlined"
                value={newEmployee.employeeNumber}
                onChange={(e) =>
                  handleInputChange("employeeNumber", e.target.value)
                }
                style={{ marginRight: "8px" }}
                multiline
                maxRows={1}
              />
              <TextField
                label="ชื่อลูกค้า"
                variant="outlined"
                value={newEmployee.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                style={{ marginRight: "8px" }}
                multiline
                maxRows={1}
              />
            </div>
            <div>
              <TextField
                label="ที่อยู่ลูกค้า"
                variant="outlined"
                // ....
                style={{ marginRight: "8px" }}
                multiline
                rows={2}
                maxRows={6}
              />
            </div>
            <div>
              <TextField
                label="รหัสไปรษณีย์"
                variant="outlined"
                // ....
                style={{ marginRight: "8px" }}
                multiline
                maxRows={1}
              />
              <TextField
                label="เบอร์โทรศัพท์"
                variant="outlined"
                // ....
                style={{ marginRight: "8px" }}
                multiline
                maxRows={1}
              />
            </div>
            <div>
              <TextField
                label="เบอร์แฟกซ์"
                variant="outlined"
                // ....
                style={{ marginRight: "8px" }}
                multiline
                maxRows={1}
              />
              <TextField
                label="อีเมล"
                variant="outlined"
                // ....
                style={{ marginRight: "8px" }}
                multiline
                maxRows={1}
              />
            </div>
            {editingIndex === null ? (
              <Button variant="contained" color="primary" onClick={addEmployee}>
                Save
              </Button>
            ) : (
              <Button
                variant="contained"
                color="primary"
                onClick={updateEmployee}
              >
                Update
              </Button>
            )}

            {error && (
              <Typography variant="body2" color="error">
                {error}
              </Typography>
            )}
          </form>
          <table>
            <thead>
              <tr>
                <th>Employee Number</th>
                <th>Name</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee, index) => (
                <tr key={index}>
                  <td>{employee.employeeNumber}</td>
                  <td>{employee.name}</td>
                  <td>
                    <Button
                      variant="outlined"
                      color="primary"
                      onClick={() => editEmployee(index)}
                      style={{ marginRight: "8px" }}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="outlined"
                      color="secondary"
                      onClick={() => deleteEmployee(index)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default CRUD;
