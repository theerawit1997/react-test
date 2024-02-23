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
    customerID: "",
    name: "",
    address: "",
    zipCode: "",
    phone: "",
    fax: "",
    email: "",
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
      newCustomer.customerID &&
      newCustomer.name &&
      newCustomer.address &&
      newCustomer.zipCode &&
      newCustomer.phone &&
      newCustomer.fax &&
      newCustomer.email &&
      isCustomerIDUnique(newCustomer.customerID)
    ) {
      setCustomer([...customer, newCustomer]);
      setNewCustomer({
        customerID: "",
        name: "",
        address: "",
        zipCode: "",
        phone: "",
        fax: "",
        email: "",
      });
      setError(null);
    } else {
      setError("Please enter all required information OR Customer ID must be unique.");
    }
  };

  const updateCustomer = () => {
    if (
      newCustomer.customerID &&
      newCustomer.name &&
      newCustomer.address &&
      newCustomer.zipCode &&
      newCustomer.phone &&
      newCustomer.fax &&
      newCustomer.email &&
      editingIndex !== null &&
      isCustomerIDUniqueForUpdate(newCustomer.customerID)
    ) {
      const updatedCustomers = [...customer];
      updatedCustomers[editingIndex] = newCustomer;
      setCustomer(updatedCustomers);
      setNewCustomer({
        customerID: "",
        name: "",
        address: "",
        zipCode: "",
        phone: "",
        fax: "",
        email: "",
      });
      setEditingIndex(null);
      setError(null);
    } else {
      setError("Please enter all required information OR Customer ID must be unique.");
    }
  };

  const editCustomer = (index) => {
    setEditingIndex(index);
    setNewCustomer(customer[index]);
  };

  const isCustomerIDUniqueForUpdate = (customerID) => {
    const otherCustomers = customer.filter(
      (_, index) => index !== editingIndex
    );
    return !otherCustomers.some(
      (customer) => customer.customerID === customerID
    );
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
          <Typography variant="h3" gutterBottom>
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
                value={newCustomer.address}
                onChange={(e) => handleInputChange("address", e.target.value)}
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
                value={newCustomer.zipCode}
                onChange={(e) => handleInputChange("zipCode", e.target.value)}
                style={{ marginRight: "8px", width: "40%" }}
                multiline
                maxRows={1}
              />
              <TextField
                label="Phone Number"
                variant="outlined"
                value={newCustomer.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                style={{ marginRight: "8px", width: "40%" }}
                multiline
                maxRows={1}
              />
            </div>
            <div>
              <TextField
                label="Fax Number"
                variant="outlined"
                value={newCustomer.fax}
                onChange={(e) => handleInputChange("fax", e.target.value)}
                style={{ marginRight: "8px", width: "40%" }}
                multiline
                maxRows={1}
              />
              <TextField
                label="Email"
                variant="outlined"
                value={newCustomer.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
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
                    Address
                  </th>
                  <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                    Zip Code
                  </th>
                  <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                    Phone
                  </th>
                  <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                    Fax
                  </th>
                  <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                    Email
                  </th>
                  <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {customer.map((currentCustomer, index) => (
                  <tr key={index}>
                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                      {currentCustomer.customerID}
                    </td>
                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                      {currentCustomer.name}
                    </td>
                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                      {currentCustomer.address}
                    </td>
                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                      {currentCustomer.zipCode}
                    </td>
                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                      {currentCustomer.phone}
                    </td>
                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                      {currentCustomer.fax}
                    </td>
                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                      {currentCustomer.email}
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
