import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/prosjekter" element={<Projects />} />
              <Route path="/kontakt" element={<Contact />} />
        </Routes>
      </main>
    </>
  );
}

export default App;