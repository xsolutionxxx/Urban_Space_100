import { useFilters } from "@features/filters/useFilters.js";

import Message from "@components/ui/Message";

function ProductEmpty({ ctaText = "Скинути фільтри" }) {
  const { resetFilters } = useFilters();

  return (
    <div className="py-8 flex-1 flex flex-col items-center justify-center gap-6">
      <div className="w-full max-w-md px-4 text-center">
        <Message
          title="Упс! Нічого не знайдено"
          text="Спробуйте скинути фільтри або оберіть інші параметри, щоб побачити більше товарів."
        />
      </div>

      <button
        onClick={() => resetFilters()}
        className="px-5.5 py-2.5 gap-1 bg-accent text-sm text-white/90 uppercase shadow-[0_10px_30px_rgba(0,0,0,0.4)]"
      >
        {ctaText}
      </button>
    </div>
  );
}

export default ProductEmpty;
