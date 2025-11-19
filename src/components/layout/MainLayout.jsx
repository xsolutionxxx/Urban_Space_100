import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function MainLayout({ products }) {
  return (
    <div className=" min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <div className="mx-auto w-full max-w-[1920px]">
          <Outlet context={{ products }} />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default MainLayout;
