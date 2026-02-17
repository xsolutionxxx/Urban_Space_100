function AdminCard({ name, children }) {
  return (
    <div className="p-4 bg-primary rounded-3xl">
      <h3 className="mb-4 font-bold text-lg text-text-main">{name}</h3>
      {children}
    </div>
  );
}

export default AdminCard;
