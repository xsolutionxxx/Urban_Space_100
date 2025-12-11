function FiltersControls({ filterNames, selectedValues, onChange }) {
  return (
    <div className="pt-5 flex flex-col gap-3">
      {filterNames.map((name, i) => (
        <label key={i} className="flex items-center gap-3 cursor-pointer">
          <input
            type="checkbox"
            name={name}
            checked={selectedValues?.[name] ?? false}
            onChange={(e) => onChange(name, e.target.checked)}
            className="w-5 h-5 accent-accent"
          />
          <span className="text-base text-text-main/70">{name}</span>
        </label>
      ))}
    </div>
  );
}

export default FiltersControls;
