// components/settings/SettingsSection.jsx
function SettingsSection({ icon: Icon, title, className = "", children }) {
  return (
    <div className={className}>
      <div className="mb-2 flex items-center gap-2">
        {Icon && <Icon strokeWidth={2} size={20} />}
        <h3 className="font-medium text-lg md:text-xl xl:text-2xl leading-tight">
          {title}
        </h3>
      </div>
      {children}
    </div>
  );
}

export default SettingsSection;
