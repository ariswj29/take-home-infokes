import Breadcrumb from "./Breadcrumb";
import SearchBar from "./SearchBar";

export default function Toolbar() {
  return (
    <div className="grid grid-cols-4 content-center items-center gap-4 px-4 py-2 h-14 bg-white shadow-sm">
      <div className="col-span-3">
        <Breadcrumb />
      </div>
      <SearchBar />
    </div>
  );
}
