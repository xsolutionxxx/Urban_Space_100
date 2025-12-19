import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import FiltersPanel from "@components/filters/FiltersPanel";
import { useFilters } from "@features/filters/useFilters";

function MainLayout() {
  const { filtersOpen } = useFilters();

  return (
    <div className="min-h-screen flex flex-col">
      {filtersOpen && <FiltersPanel />}
      <Header />

      <main className="flex-1 mx-auto w-full max-w-[1920px] h-full flex flex-col">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default MainLayout;
