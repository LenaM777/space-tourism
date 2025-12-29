import { Outlet } from "react-router-dom";
import "../styles/global.scss";
import Header from "../components/Header/Header";

export default function Layout() {
  return (
    <div className="app-wrapper">
      <div className="container">
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
