import { Outlet, useLocation } from "react-router-dom";
import "../styles/global.scss";
import Header from "../components/Header/Header";

export default function Layout() {
  const location = useLocation();
  const route = location.pathname.split("/")[1] || "home";

  return (
    <div className={`app-wrapper bg-${route}`}>
      <div className="container">
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
