function AdminStatsCard({ title, value, icon, trend }) {
  return (
    <div className="p-4 grid grid-cols-2 gap-y-2 w-full rounded-3xl text-white bg-gradient-to-br from-[#2b2b2b] to-[#424242] shadow-lg">
      <h4 className="font-medium text-base opacity-90">{title}</h4>

      <div className="justify-self-end self-start py-0.5 px-2 bg-white/10 rounded-full backdrop-blur-md">
        {icon}
      </div>

      <h2 className="text-2xl font-bold self-end">{value}</h2>

      <span className="self-end justify-self-end text-lg opacity-80">
        {trend}
      </span>
    </div>
  );
}

export default AdminStatsCard;
