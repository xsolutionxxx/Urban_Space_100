import { Link } from "react-router-dom";

function AdminProductsList({ children }) {
  return (
    <div className="w-full overflow-auto">
      <div className="py-2 px-1 grid grid-cols-[30px_1fr_65px_62px] 2xs:grid-cols-[30px_60px_1fr_65px_62px] sm:grid-cols-[30px_60px_1fr_150px_65px_62px] lg:grid-cols-[30px_60px_200px_1fr_150px_65px_62px] items-center gap-3 w-full border-b border-text-main/20 text-base text-text-main/70">
        <div>ID</div>
        <div className="hidden 2xs:block">Image</div>
        <div>Title</div>
        <div className="hidden lg:block">Description</div>
        <div className="hidden sm:block">Category & Brand</div>
        <div>Price</div>
        <div>Actions</div>
      </div>
      <div className="py-3 px-1 grid grid-cols-[30px_1fr_65px_62px] 2xs:grid-cols-[30px_60px_1fr_65px_62px] sm:grid-cols-[30px_60px_1fr_150px_65px_62px] lg:grid-cols-[30px_60px_200px_1fr_150px_65px_62px] items-center gap-3 w-full text-text-main odd:bg-secondary">
        {children}
      </div>
    </div>
  );
}

export default AdminProductsList;
