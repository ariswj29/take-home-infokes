export default function Sorting({
  setSort,
}: {
  setSort: (sort: string) => void;
}) {
  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSort(value);
  };

  return (
    <div className="bg-white shadow-sm border border-slate-400">
      <select
        name="sorting"
        className="w-full p-2 focus:outline-none"
        onChange={handleSortChange}
      >
        <option value="asc">Sort by: Name ASC</option>
        <option value="desc">Sort by: Name DESC</option>
      </select>
    </div>
  );
}
