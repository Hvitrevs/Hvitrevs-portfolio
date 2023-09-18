import React from "react";
import { Container, MainBody } from "./styles/GlobalStyled";
import { ThemeProvider } from "styled-components";
import { theme } from "./utils/Theme";
import Showcase from "./components/Showcase";
import MySkills from "./components/MySkills";
import TextSphere from "./components/TextSphere";
import Projects from "./components/Projects";


function App() {
  return (
    <ThemeProvider theme ={ theme }>
    <MainBody>
      <Container>
        <Showcase />
        <MySkills />
        <TextSphere />
        <Projects />
      </Container>
    </MainBody> 
      
    </ThemeProvider>
  );
}

export default App;
