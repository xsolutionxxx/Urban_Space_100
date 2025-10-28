import {
  ListFilter,
  Coins,
  View,
  SunMoon,
  LayoutList,
  GalleryVerticalEnd,
} from "lucide-react";

function SettingsPanel() {
  return (
    <div className="fixed top-[100px] z-40 py-3 px-[15px] w-full grid grid-cols-2 gap-y-5 gap-x-8 bg-primary">
      <div className="flex flex-col">
        <div className="mb-2 flex items-center gap-2">
          <ListFilter strokeWidth={2} size={17} />
          <h3 className="font-medium text-base">Фільтри</h3>
        </div>
        <label htmlFor="brand" className="mb-1 text-base">
          Оберіть виробника:
        </label>
        <select
          name="brand"
          id="brand"
          className="px-1 mb-3 h-8 border rounded"
        >
          <option value="anyone">Будь-хто</option>
          <option value="FWMP">ФЯТБ</option>
          <option value="ICON">ICON</option>
        </select>
        <label htmlFor="category" className="mb-1 text-base">
          Оберіть категорію:
        </label>
        <select
          name="category"
          id="category"
          className="px-1 h-8 border rounded"
        >
          <option value="anyone">Будь-яка категорія</option>
          <option value="socks">Шкарпетки</option>
          <option value="pots">Горнятка</option>
          <option value="magnets">Магніти</option>
        </select>
      </div>
      <div className="flex flex-col">
        <div className="mb-2 flex items-center gap-2">
          <Coins strokeWidth={2} size={18} />
          <h3 className="font-medium text-base">Ціна</h3>
        </div>
        <label htmlFor="from" className="mb-1 text-base">
          Від:
        </label>
        <input
          name="from"
          type="text"
          placeholder="100"
          className="px-2 mb-3 w-[100px] h-8 border rounded"
        />
        <label htmlFor="to" className="mb-1 text-base">
          До:
        </label>
        <input
          name="to"
          type="text"
          placeholder="500"
          className="px-2 w-[100px] h-8 border rounded"
        />
      </div>
      <div>
        <div className="mb-2 flex items-center gap-2">
          <View strokeWidth={2} size={18} />
          <h3 className="font-medium text-base">Вигляд</h3>
        </div>
        <div className="flex items-center gap-4">
          <div className="p-1 border rounded">
            <GalleryVerticalEnd
              strokeWidth={2}
              size={24}
              className="rotate-180"
            />
          </div>
          <div className="p-1">
            <LayoutList strokeWidth={2} size={24} />
          </div>
        </div>
      </div>
      <div>
        <div className="mb-2 flex items-center gap-2">
          <SunMoon strokeWidth={2} size={18} />
          <h3 className="font-medium text-base">Тема</h3>
        </div>
        <button className="py-1 px-10 border rounded font-medium text-base uppercase">
          light
        </button>
      </div>
    </div>
  );
}

export default SettingsPanel;
