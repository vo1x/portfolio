function StackCard({ item }) {
  return (
    <div className="flex w-40 items-center gap-2 rounded-md border border-slate-700 bg-slate-800 p-2 shadow-md">
      <div className="text-4xl text-teal-400">{item.icon}</div>
      <div className="text-slate-300">{item.name}</div>
    </div>
  );
}

export default StackCard;
