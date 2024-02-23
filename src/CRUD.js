import React, { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const CRUD = () => {
  const [customer, setCustomer] = useState([]);
  const [newCustomer, setNewCustomer] = useState({
    name: "",
    customerID: "",
  });
  const [editingIndex, setEditingIndex] = useState(null);
  const [error, setError] = useState(null);

  const handleInputChange = (key, value) => {
    setNewCustomer((prev) => ({ ...prev, [key]: value }));
  };

  const isCustomerIDUnique = (customerID) => {
    return !customer.some((customer) => customer.customerID === customerID);
  };

  const addCustomer = () => {
    if (
      newCustomer.name &&
      newCustomer.customerID &&
      isCustomerIDUnique(newCustomer.customerID)
    ) {
      setCustomer([...customer, newCustomer]);
      setNewCustomer({ name: "", customerID: "" });
      setError(null);
    } else {
      setError("Customer ID must be unique.");
    }
  };

  const editCustomer = (index) => {
    setEditingIndex(index);
    setNewCustomer(customer[index]);
  };

  const updateCustomer = () => {
    if (
      newCustomer.name &&
      newCustomer.customerID &&
      editingIndex !== null &&
      isCustomerIDUniqueForUpdate(newCustomer.customerID)
    ) {
      const updatedCustomers = [...customer];
      updatedCustomers[editingIndex] = newCustomer;
      setCustomer(updatedCustomers);
      setNewCustomer({ name: "", customerID: "" });
      setEditingIndex(null);
      setError(null);
    } else {
      setError("Customer ID must be unique.");
    }
  };
  
  const isCustomerIDUniqueForUpdate = (customerID) => {
    const otherCustomers = customer.filter((_, index) => index !== editingIndex);
    return !otherCustomers.some((customer) => customer.customerID === customerID);
  };

  const deleteCustomer = (index) => {
    const updatedCustomers = customer.filter((_, i) => i !== index);
    setCustomer(updatedCustomers);
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
            Customer Management
          </Typography>
          <form>
            <div>
              <TextField
                label="Customer ID"
                variant="outlined"
                value={newCustomer.customerID}
                onChange={(e) =>
                  handleInputChange("customerID", e.target.value)
                }
                style={{ marginRight: "8px", width: "40%" }}
                multiline
                maxRows={1}
              />
              <TextField
                label="Customer name"
                variant="outlined"
                value={newCustomer.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                style={{ marginRight: "8px", width: "40%" }}
                multiline
                maxRows={1}
              />
            </div>
            <div>
              <TextField
                label="Customer Address"
                variant="outlined"
                // ....
                style={{ marginRight: "8px", width: "82%" }}
                multiline
                rows={2}
                maxRows={6}
              />
            </div>
            <div>
              <TextField
                label="Zip Code"
                variant="outlined"
                // ....
                style={{ marginRight: "8px", width: "40%" }}
                multiline
                maxRows={1}
              />
              <TextField
                label="Phone Number"
                variant="outlined"
                // ....
                style={{ marginRight: "8px", width: "40%" }}
                multiline
                maxRows={1}
              />
            </div>
            <div>
              <TextField
                label="Fax Number"
                variant="outlined"
                // ....
                style={{ marginRight: "8px", width: "40%" }}
                multiline
                maxRows={1}
              />
              <TextField
                label="Email"
                variant="outlined"
                // ....
                style={{ marginRight: "8px", width: "40%" }}
                multiline
                maxRows={1}
              />
            </div>
            {editingIndex === null ? (
              <Button
                variant="contained"
                color="primary"
                onClick={addCustomer}
                style={{ marginTop: "16px", width: "120px" }}
              >
                Save
              </Button>
            ) : (
              <Button
                variant="contained"
                color="primary"
                onClick={updateCustomer}
                style={{ marginTop: "16px", width: "120px" }}
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
          <div style={{ marginTop: "16px" }}>
            <table
              style={{
                borderCollapse: "collapse",
                width: "100%",
                border: "1px solid #ddd",
              }}
            >
              <thead>
                <tr>
                  <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                    Customer ID
                  </th>
                  <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                    Name
                  </th>
                  <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {customer.map((customer, index) => (
                  <tr key={index}>
                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                      {customer.customerID}
                    </td>
                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                      {customer.name}
                    </td>
                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                      <Button
                        variant="outlined"
                        color="primary"
                        onClick={() => editCustomer(index)}
                        style={{ marginRight: "8px" }}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="outlined"
                        color="secondary"
                        onClick={() => deleteCustomer(index)}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default CRUD;
