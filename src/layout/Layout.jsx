import { Outlet } from "react-router-dom";
import "../styles/global.scss";

export default function Layout() {
  return (
    <div className="app-wrapper">
      <div className="container">
        <div>header</div>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
