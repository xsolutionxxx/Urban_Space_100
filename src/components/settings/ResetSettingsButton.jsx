function ResetSettingsButton({ onReset }) {
  return (
    <button
      onClick={onReset}
      className="px-2 w-full h-full bg-accent border rounded"
    >
      Скинути всі налаштування
    </button>
  );
}

export default ResetSettingsButton;
