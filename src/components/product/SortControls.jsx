function SortControls({ sortType, onChange }) {
  return (
    <div className="flex flex-col">
      <label htmlFor="sort" className="sr-only">
        Сортування
      </label>
      <select
        value={sortType}
        onChange={(e) => onChange(e.target.value)}
        name="sort"
        id="sort"
        className="px-1.5 h-8 min-w-[18px] max-w-45 w-full border rounded-xs text-[10px] uppercase"
      >
        <option className="bg-primary" value="">
          За замовчуванням
        </option>
        <option className="bg-primary" value="popular">
          Популярні
        </option>
        <option className="bg-primary" value="price-low">
          Спочатку дешевше
        </option>
        <option className="bg-primary" value="price-high">
          Спочатку дорожче
        </option>
      </select>
    </div>
  );
}

export default SortControls;
