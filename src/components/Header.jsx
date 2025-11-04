import { Link, useLocation } from "react-router-dom";
import { Heart, Settings, X } from "lucide-react";

import { useTheme } from "../hooks/useTheme.js";
import { useSettings } from "../hooks/useSettings.js";

import SettingsPanel from "./SettingsPanel";

function Header() {
  const location = useLocation();
  const isWishlistPage = location.pathname === "/wishlist";
  const isSettingsDisabled = isWishlistPage;

  const { theme } = useTheme();
  const { settingsOpen, setSettingsOpen } = useSettings();

  const logotypes = {
    light: "/urban-space-logo.svg",
    dark: "/urban-space-logo-dark.svg",
  };

  return (
    <>
      <header
        className={`sticky top-0 z-50 px-[15px] py-2.5 h-25 flex justify-between items-center bg-primary ${
          settingsOpen ? null : "shadow-md"
        }`}
      >
        <button
          disabled={isSettingsDisabled}
          onClick={() =>
            isSettingsDisabled ? null : setSettingsOpen(!settingsOpen)
          }
          className={`cursor-pointer ${
            isSettingsDisabled ? "opacity-40 cursor-not-allowed" : null
          }`}
        >
          {settingsOpen ? (
            <X strokeWidth={1.5} size={32} />
          ) : (
            <Settings strokeWidth={1.5} size={32} />
          )}
        </button>

        <Link to="/" className="w-35">
          <img src={logotypes[theme]} alt="logotype" className="w-full" />
        </Link>

        <Link to="/wishlist">
          {isWishlistPage ? (
            <Heart strokeWidth={1.5} size={32} fill="red" />
          ) : (
            <Heart strokeWidth={1.5} size={32} />
          )}
        </Link>
      </header>
      {isWishlistPage && settingsOpen ? setSettingsOpen(!settingsOpen) : null}
      {settingsOpen && <SettingsPanel />}

      {settingsOpen && (
        <div
          className="fixed z-30 inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setSettingsOpen(false)}
        />
      )}
    </>
  );
}

export default Header;
