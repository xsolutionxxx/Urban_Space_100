import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";

import { useSort } from "@features/sort/useSort.js";

import Message from "@components/ui/Message.jsx";

function WishlistEmpty({ ctaText = "Переглянути популярні", ctaTo = "/" }) {
  const { setSortType } = useSort();

  return (
    <div className="flex-1 flex items-center justify-center flex-col gap-6">
      <div className="w-full max-w-md px-4 text-center">
        <Message
          text={
            "Знайдіть товари, які вам подобаються, і збережіть їх сюди, щоб повернутися пізніше."
          }
        />
      </div>

      <Link
        to={ctaTo}
        className="relative flex justify-center gap-1 font-medium text-sm uppercase"
        aria-label="Перейти до каталогу товарів"
        onClick={() => setSortType("popular")}
      >
        {ctaText}
        <ExternalLink
          strokeWidth={2}
          size={12}
          className="absolute top-0.5 -right-4"
        />
      </Link>
    </div>
  );
}

export default WishlistEmpty;
