import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Heart, CircleUserRound } from "lucide-react";

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

  const [adminAuthenticated, setAdminAuthenticated] = useState(true);

  return (
    <>
      <header className={`sticky top-0 z-50 h-full bg-primary shadow-md`}>
        <div className="relative px-4 py-2 mx-auto w-full max-w-[1920px] h-24 flex justify-between items-center">
          <ThemeControls />

          <Link
            to="/"
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-35"
          >
            <img src={logotypes[theme]} alt="logotype" className="w-full" />
          </Link>

          <div className="flex gap-4">
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

            {adminAuthenticated ? (
              <Link to="/admin">
                <CircleUserRound strokeWidth={1.5} size={32} />
              </Link>
            ) : null}
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
