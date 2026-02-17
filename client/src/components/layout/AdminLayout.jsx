import { Outlet } from "react-router-dom";
import Header from "./Header";

function AdminLayout() {
  return (
    <>
      <Header />
      <main className="mx-auto w-full max-w-[1920px] h-full">
        <Outlet />
      </main>
    </>
  );
}

export default AdminLayout;
