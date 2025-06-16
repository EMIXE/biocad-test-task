import React from 'react';
import MainForm from "./components/MainForm";
import {Typography} from "@mui/material";

function App() {

  return (
    <div className="App">
        <title>BioWebTool</title>
          <Typography
              variant="h1"
              sx={{
                  fontSize: 'clamp(1.8rem, 5vw, 3.2rem)',
                  fontWeight: 600,
                  textAlign: 'center',
                  margin: '0 auto 1.5rem',
                  maxWidth: '90%',
                  lineHeight: 1.2,
                  color: 'text.primary'
              }}
          >
              Выравнивание аминокислотных последовательностей
          </Typography>
          <MainForm/>
    </div>
  );
}

export default App;
