import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";

import { useSort } from "@features/sort/useSort.js";

import Message from "@components/ui/Message.jsx";

function WishlistEmpty({ ctaText = "Переглянути популярні", ctaTo = "/" }) {
  const { setSortType } = useSort();

  return (
    <div className="pt-8 pb-2 flex-1 flex items-center justify-center flex-col gap-6">
      <div className="w-full max-w-md text-center">
        <Message
          title={"Пупупу… поки пусто"}
          text={
            "Знайдіть товари, які вам подобаються, і збережіть їх сюди, щоб повернутися пізніше."
          }
        />
      </div>

      <Link
        to={ctaTo}
        className="relative px-5.5 py-2.5 flex justify-center gap-1 bg-white text-sm text-accent uppercase shadow-[0_10px_30px_rgba(0,0,0,0.4)]"
        aria-label="Перейти до каталогу товарів"
        onClick={() => setSortType("popular")}
      >
        {ctaText}
        <ExternalLink
          strokeWidth={2}
          size={12}
          className="absolute top-1 right-1"
        />
      </Link>
    </div>
  );
}

export default WishlistEmpty;
