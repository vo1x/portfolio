import StackCard from "./StackCard";

function StackSection({ title, items }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="mb-2 border-b border-b-slate-700 py-2 text-sm text-slate-400">
        {title}
      </div>
      <div className="flex flex-wrap gap-8">
        {items.map((item, i) => (
          <StackCard item={item} key={i} />
        ))}
      </div>
    </div>
  );
}

export default StackSection;
