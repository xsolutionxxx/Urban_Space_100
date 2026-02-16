import { Outlet } from "react-router-dom";

function AdminLayout() {
  return (
    <main className="mx-auto w-full max-w-[1920px] h-full">
        <Outlet />
    </main>
  );
}

export default AdminLayout;