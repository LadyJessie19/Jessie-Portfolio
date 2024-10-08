import GlobalStyle from "./styles/Global";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";

import { LanguageProvider } from "./contexts/LanguageProvider";

import HomeEn from "./components/en-us/pages/Home";
import ContactsEn from "./components/en-us/pages/Contacts";
import AboutMeEn from "./components/en-us/pages/AboutMe";
import ProjectsEn from "./components/en-us/pages/Projects";
import HomePt from "./components/pt-br/pages/Home";
import AboutMePt from "./components/pt-br/pages/AboutMe";
import ContactsPt from "./components/pt-br/pages/Contacts";
import ProjectsPt from "./components/pt-br/pages/Projects";
import { useEffect } from "react";
import ScrollToTop from "./components/reusable/scrollToTop";

function App() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const chosenLanguage = localStorage.getItem("language") || "EN-US";
  return (
    <>
      <LanguageProvider navigate={navigate}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <ScrollToTop />
          <Routes>
            <Route
              path="/"
              element={chosenLanguage === "EN-US" ? <HomeEn /> : <HomePt />}
            />
            <Route path="/us" element={<HomeEn />} />
            <Route path="/us/about-me" element={<AboutMeEn />} />
            <Route path="/us/contacts" element={<ContactsEn />} />
            <Route path="/us/projects" element={<ProjectsEn />} />
            <Route path="/br" element={<HomePt />} />
            <Route path="/br/sobre-mim" element={<AboutMePt />} />
            <Route path="/br/contatos" element={<ContactsPt />} />
            <Route path="/br/projetos" element={<ProjectsPt />} />
          </Routes>
        </ThemeProvider>
      </LanguageProvider>
    </>
  );
}

export default App;
