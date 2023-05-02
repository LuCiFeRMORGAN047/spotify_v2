import React from "react";
import ReactDOM from "react-dom/client";
import Index from "./pages/index";
import "./index.css";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Appshell from "./components/Appshell/Appshell";
import Services from "./pages/services";
import { Blog } from "./pages/Blog";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import BlogPage from "./components/pages/BlogPage";
import App from "./pages/App";
import Search from "./pages/Search";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Library from "./components/pages/apppage/Library";
import { MusicProvider } from "./contexts/MusicProvider";
import Liked from "./components/pages/apppage/Liked";

const ROUTES = [
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/blog/:slug",
    element: <BlogPage />,
  },
  {
    path: "/about-us",
    element: <AboutUs />,
  },
  {
    path: "/contact-us",
    element: <ContactUs />,
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
];

const APP_ROUTES = [
  {
    path: "/app",
    element: <App />,
  },
  {
    path: "/app/search",
    element: <Search />,
  },
  {
    path : "/app/library",
    element : <Library/> 
  },{
    path : "/app/liked",
    element : <Liked/>
  }
];

function Spotify() {
  const { pathname } = useLocation();
  if (pathname.startsWith("/app"))
    return (
      <Routes>
        {APP_ROUTES.map((props, i) => (
          <Route {...props} key={i} />
        ))}
      </Routes>
    );
  return (
    <Appshell>
      <Routes>
        {ROUTES.map((props, i) => (
          <Route {...props} key={i} />
        ))}
      </Routes>
    </Appshell>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <MusicProvider>
    <Spotify />
    </MusicProvider>
     
    </BrowserRouter>
  </React.StrictMode>
);
