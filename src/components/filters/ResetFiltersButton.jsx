function ResetFiltersButton({ onReset }) {
  return (
    <button
      onClick={onReset}
      className="p-2 w-full h-full bg-accent border rounded"
    >
      Скинути всі налаштування
    </button>
  );
}

export default ResetFiltersButton;
