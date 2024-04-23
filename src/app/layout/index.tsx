import Header from "@/app/layout/header";
import LeftPanel from "@/app/layout/left-panel";

// React-router
import { Outlet } from "react-router-dom";

// Styles
import "./index.scss";

export default function Layout() {
  return (
    <div className="page">
      <Header />
      <LeftPanel />
      <Outlet/>
    </div>
  );
};