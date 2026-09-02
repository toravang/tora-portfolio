import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

const siteUrl = "https://toranvang.no";

// Innholdet som skal vises i nettleserfanen og i søkeresultater for hver side.
const metadata: Record<string, { title: string; description: string }> = {
  "/": {
    title: "Tora Nordhagen Vang | Portfolio",
    description:
      "Portfolio for Tora Nordhagen Vang, a frontend and mobile development student.",
  },
  "/prosjekter": {
    title: "Projects & Writing | Tora Nordhagen Vang",
    description:
      "Explore projects and published writing by Tora Nordhagen Vang.",
  },
  "/kontakt": {
    title: "Contact | Tora Nordhagen Vang",
    description: "Get in touch with Tora Nordhagen Vang.",
  },
};

function SeoMetadata() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Oppdaterer metadata når brukeren navigerer uten at siden lastes på nytt.
    const page = metadata[pathname] ?? metadata["/"];
    const canonicalUrl = `${siteUrl}${pathname === "/" ? "/" : pathname}`;

    document.title = page.title;

    const description = document.querySelector<HTMLMetaElement>(
      'meta[name="description"]',
    );
    const openGraphTitle = document.querySelector<HTMLMetaElement>(
      'meta[property="og:title"]',
    );
    const openGraphDescription = document.querySelector<HTMLMetaElement>(
      'meta[property="og:description"]',
    );
    const openGraphUrl = document.querySelector<HTMLMetaElement>(
      'meta[property="og:url"]',
    );
    const canonical = document.querySelector<HTMLLinkElement>(
      'link[rel="canonical"]',
    );

    description?.setAttribute("content", page.description);
    openGraphTitle?.setAttribute("content", page.title);
    openGraphDescription?.setAttribute("content", page.description);
    openGraphUrl?.setAttribute("content", canonicalUrl);
    canonical?.setAttribute("href", canonicalUrl);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <>
      <SeoMetadata />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/prosjekter" element={<Projects />} />
        <Route path="/kontakt" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
