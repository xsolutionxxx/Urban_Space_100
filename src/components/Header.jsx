import { Link } from "react-router-dom";
import { Heart, Settings } from "lucide-react";

function Header() {
  return (
    <header className="sticky top-0 z-50 px-[15px] py-2.5 h-25 flex justify-between items-center bg-primary shadow-md">
      <button className="cursor-pointer">
        <Settings strokeWidth={1.5} size={32} />
      </button>

      <Link to="/" className="">
        <img src="/urban-space-logo.svg" alt="logotype" className="w-35" />
      </Link>

      <Link to="/favorites">
        <Heart strokeWidth={1.5} size={32} />
      </Link>
    </header>
  );
}

export default Header;
