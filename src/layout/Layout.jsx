import { useLocation, useOutlet } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import "../styles/global.scss";
import Header from "../components/Header/Header";
import React from "react";

export default function Layout() {
  const location = useLocation();
  const outlet = useOutlet();
  const route = location.pathname.split("/")[1] || "home";

  return (
    <div className={`app-wrapper bg-${route}`}>
      <div className="container">
        <Header />
        <main>
          <AnimatePresence mode="wait">
            <div key={location.pathname}>{outlet}</div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}
