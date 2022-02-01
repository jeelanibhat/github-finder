import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import { GithubProvider } from "./components/layout/context/github/GithubContext";

function App() {
  return (
    <GithubProvider>
      <Router>
        <Container maxWidth="lg" className="mt-1">
          <Grid container spacing={3}>
            <Grid item lg={12} xs={12}>
              <Navbar />
            </Grid>
            <Grid item lg={12} xs={12} className="app_main-wrapper">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/notfound" element={<NotFound />} />
                <Route path="/*" element={<NotFound />} />
              </Routes>
            </Grid>
            <Grid item lg={12} xs={12}>
              <Footer />
            </Grid>
          </Grid>
        </Container>
      </Router>
    </GithubProvider>
  );
}

export default App;
