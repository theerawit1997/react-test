import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";

export default function Home() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg" sx={{ p: 2 }}>
        <Box>
          <Typography variant="h6" gutterBottom>
            สวัสดีครับ ผมนายธีรวิทย์ ศรีน้อย เป็นผู้จัดทำโปรแจคนี่
          </Typography>
          <Typography variant="h6" gutterBottom>
            Hello my name is Theerawit Srinoi. I am the creator of this project. 
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            https://github.com/theerawit1997
          </Typography>
        </Box>
      </Container>
    </React.Fragment>
  );
}
