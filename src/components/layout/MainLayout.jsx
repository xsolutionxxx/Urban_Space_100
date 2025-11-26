import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function MainLayout({ products }) {
  return (
    <div className=" min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 mx-auto w-full max-w-[1920px] h-full flex flex-col">
        <Outlet context={{ products }} />
      </main>

      <Footer />
    </div>
  );
}

export default MainLayout;
