import { Link, useLocation } from "react-router-dom";
import { Heart, Settings, X } from "lucide-react";

import { useTheme } from "@features/theme/useTheme.js";
import { useSettings } from "@features/settings/useSettings.js";
import { useWishlist } from "@features/wishlist/useWishlist.js";

import SettingsPanel from "@components/settings/SettingsPanel";

function Header() {
  const base = import.meta.env.BASE_URL;

  const location = useLocation();
  const isWishlistPage = location.pathname === "/wishlist";
  const isSettingsDisabled = isWishlistPage;

  const { wishlistCount } = useWishlist();
  const { theme } = useTheme();
  const { settingsOpen, setSettingsOpen } = useSettings();

  const logotypes = {
    light: `${base}urban-space-logo.svg`,
    dark: `${base}urban-space-logo-dark.svg`,
  };

  return (
    <>
      <header
        className={`sticky top-0 z-50 h-full bg-primary ${
          settingsOpen ? null : "shadow-md"
        }`}
      >
        <div className="px-4 py-3 mx-auto w-full max-w-[1920px]  flex justify-between items-center">
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
              <X strokeWidth={1.5} size={36} />
            ) : (
              <Settings strokeWidth={1.5} size={36} />
            )}
          </button>

          <Link to="/" className="w-35">
            <img src={logotypes[theme]} alt="logotype" className="w-full" />
          </Link>

          <Link to="/wishlist" className="relative">
            {isWishlistPage ? (
              <Heart strokeWidth={1.5} size={36} fill="red" />
            ) : (
              <Heart strokeWidth={1.5} size={36} />
            )}
            {wishlistCount && !isWishlistPage ? (
              <div className="absolute -top-2 -left-3.5 w-6 h-6 flex justify-center items-center bg-accent rounded-xl">
                {wishlistCount}
              </div>
            ) : null}
          </Link>
        </div>
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
