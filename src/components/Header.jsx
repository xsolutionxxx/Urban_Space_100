import { useState } from "react";
import { Link } from "react-router-dom";
import { Heart, Settings, X } from "lucide-react";

import { useTheme } from "../hooks/useTheme.js";
import SettingsPanel from "./SettingsPanel";

function Header() {
  const { theme } = useTheme();
  const [open, setOpen] = useState(false);

  const logotypes = {
    light: "/urban-space-logo.svg",
    dark: "/urban-space-logo-dark.svg",
  };

  return (
    <>
      <header
        className={`sticky top-0 z-50 px-[15px] py-2.5 h-25 flex justify-between items-center bg-primary ${
          open ? null : "shadow-md"
        }`}
      >
        <button onClick={() => setOpen(!open)} className="cursor-pointer">
          {open ? (
            <X strokeWidth={1.5} size={32} />
          ) : (
            <Settings strokeWidth={1.5} size={32} />
          )}
        </button>

        <Link to="/" className="w-35">
          <img src={logotypes[theme]} alt="logotype" className="w-full" />
        </Link>

        <Link to="/wishlist">
          <Heart strokeWidth={1.5} size={32} />
        </Link>
      </header>
      {open ? <SettingsPanel /> : null}
    </>
  );
}

export default Header;
