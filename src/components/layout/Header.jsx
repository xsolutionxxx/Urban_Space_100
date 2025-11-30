import { Link, useLocation } from "react-router-dom";
import { Heart } from "lucide-react";

import { useTheme } from "@features/theme/useTheme.js";
import { useWishlist } from "@features/wishlist/useWishlist.js";

import ThemeControls from "./ThemeControls.jsx";

function Header() {
  const base = import.meta.env.BASE_URL;

  const location = useLocation();
  const isWishlistPage = location.pathname === "/wishlist";

  const { wishlistCount } = useWishlist();
  const { theme } = useTheme();

  const logotypes = {
    light: `${base}urban-space-logo.svg`,
    dark: `${base}urban-space-logo-dark.svg`,
  };

  return (
    <>
      <header className={`sticky top-0 z-50 h-full bg-primary shadow-md`}>
        <div className="px-4 mx-auto w-full max-w-[1920px]  flex justify-between items-center">
          <ThemeControls />

          <Link to="/" className="w-35">
            <img src={logotypes[theme]} alt="logotype" className="w-full" />
          </Link>

          <Link to="/wishlist" className="relative">
            <Heart
              strokeWidth={1.5}
              size={32}
              fill={isWishlistPage ? "red" : "none"}
            />
            {wishlistCount && !isWishlistPage ? (
              <div className="absolute -top-2 -left-3.5 w-6 h-6 flex justify-center items-center bg-accent rounded-xl">
                {wishlistCount}
              </div>
            ) : null}
          </Link>
        </div>
      </header>
    </>
  );
}

export default Header;
