// components/settings/FiltersControls.jsx
function FiltersControls({ brand, category, onBrandChange, onCategoryChange }) {
  return (
    <>
      <label
        htmlFor="brand"
        className="text-base md:text-lg xl:text-xl leading-snug"
      >
        Оберіть виробника:
      </label>
      <select
        value={brand}
        onChange={(e) => onBrandChange(e.target.value)}
        name="brand"
        id="brand"
        className="px-1 mb-2 h-8 border rounded"
      >
        <option className="bg-primary" value="">
          Будь-хто
        </option>
        <option className="bg-primary" value="фятб">
          ФЯТБ
        </option>
        <option className="bg-primary" value="icon">
          ICON
        </option>
      </select>

      <label
        htmlFor="category"
        className="text-base md:text-lg xl:text-xl leading-snug"
      >
        Оберіть категорію:
      </label>
      <select
        value={category}
        onChange={(e) => onCategoryChange(e.target.value)}
        name="category"
        id="category"
        className="px-1 h-8 border rounded"
      >
        <option className="bg-primary" value="">
          Будь-яка категорія
        </option>
        <option className="bg-primary" value="шкарпетки">
          Шкарпетки
        </option>
        <option className="bg-primary" value="горнятка">
          Горнятка
        </option>
        <option className="bg-primary" value="магніти">
          Магніти
        </option>
      </select>
    </>
  );
}

export default FiltersControls;
