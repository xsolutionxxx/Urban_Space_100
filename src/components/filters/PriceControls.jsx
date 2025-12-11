import { Minus } from "lucide-react";

function PriceControls({
  priceFrom,
  priceTo,
  onPriceFromChange,
  onPriceToChange,
  minPlaceholder,
  maxPlaceholder,
}) {
  return (
    <div className="pt-5 flex justify-between items-center gap-3">
      <label htmlFor="from" className="relative text-lg leading-snug">
        <input
          value={priceFrom}
          onChange={(e) => onPriceFromChange(e.target.value)}
          name="from"
          type="number"
          min="0"
          placeholder={minPlaceholder}
          className="pl-3 pr-10 h-10 w-full bg-secondary border rounded-xs focus:outline-none focus:border-accent"
        />
        <span className="absolute bottom-2 right-2.5 text-sm">грн</span>
      </label>

      <Minus strokeWidth={2} size={32} className="w-22" />

      <label htmlFor="to" className="relative text-lg leading-snug">
        <input
          value={priceTo}
          onChange={(e) => onPriceToChange(e.target.value)}
          name="to"
          type="number"
          min="0"
          placeholder={maxPlaceholder}
          className="pl-2 pr-10 h-10 w-full bg-secondary border rounded-xs focus:outline-none focus:border-accent"
        />
        <span className="absolute bottom-2 right-2.5 text-sm">грн</span>
      </label>
    </div>
  );
}

export default PriceControls;
