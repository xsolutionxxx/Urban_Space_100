function AppInput({
  label,
  type = "text",
  containerClasses = "",
  className = "",
  ...props
}) {
  return (
    <div className={`flex flex-col gap-1 ${containerClasses}`}>
      <label className="text-sm font-medium">{label}</label>
      <input
        type={type}
        {...props}
        className={`px-3 py-2 w-full border border-text-main rounded-md ${className}`}
      />
    </div>
  );
}

export default AppInput;
