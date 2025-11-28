function WishlistHeader({ count = 0, onClear }) {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="font-bold text-2xl md:text-2xl lg:text-3xl leading-tight md:leading-snug uppercase">
        Мої вподобайки
      </h2>
      <div className="w-full flex justify-between items-end">
        <h2 className="font-medium text-[15px] text-text-main/75 capitalize">
          Всього закладок: {count}
        </h2>
        <button
          onClick={onClear}
          className="px-2 py-1.5 bg-accent border rounded-xs text-[10px] uppercase"
          aria-label="Очистити список улюблених"
        >
          Очистити все
        </button>
      </div>
    </div>
  );
}

export default WishlistHeader;
