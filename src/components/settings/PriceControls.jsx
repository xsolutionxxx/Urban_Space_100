// components/settings/PriceControls.jsx
function PriceControls({
  priceFrom,
  priceTo,
  onPriceFromChange,
  onPriceToChange,
}) {
  return (
    <>
      <label
        htmlFor="from"
        className="text-base md:text-lg xl:text-xl leading-snug"
      >
        Від:
      </label>
      <input
        value={priceFrom}
        onChange={(e) => onPriceFromChange(e.target.value)}
        name="from"
        type="text"
        placeholder="100"
        className="px-2 mb-2 h-8 border rounded"
      />

      <label
        htmlFor="to"
        className="text-base md:text-lg xl:text-xl leading-snug"
      >
        До:
      </label>
      <input
        value={priceTo}
        onChange={(e) => onPriceToChange(e.target.value)}
        name="to"
        type="text"
        placeholder="500"
        className="px-2 h-8 border rounded"
      />
    </>
  );
}

export default PriceControls;
