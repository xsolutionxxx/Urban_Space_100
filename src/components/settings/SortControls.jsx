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
        className="px-1 h-8 border rounded"
      >
        <option className="bg-primary" value="">
          Та як є
        </option>
        <option className="bg-primary" value="az">
          За алфавітом
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
