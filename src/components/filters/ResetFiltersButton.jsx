function ResetFiltersButton({ onReset }) {
  return (
    <button
      onClick={onReset}
      className="p-2 w-full bg-accent border rounded-xs"
    >
      Скинути всі налаштування
    </button>
  );
}

export default ResetFiltersButton;
