import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

function BackToHomeBtn({ linkText = "Назад", className }) {
  return (
    <Link
      to="/"
      className={`w-max flex items-center gap-1 text-base text-text-main/50 ${className || ""}`}
    >
      <ArrowLeft strokeWidth={2} size={12} />
      {linkText}
    </Link>
  );
}

export default BackToHomeBtn;
