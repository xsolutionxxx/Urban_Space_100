function WishlistInfo({ count = 0, onClear }) {
  return (
    <div className="w-full flex justify-between items-start">
      <h2 className="font-medium text-base text-text-main/75 capitalize">
        Всього закладок: {count}
      </h2>
      <button
        onClick={onClear}
        className="px-1.75 py-1.25 bg-accent text-[8px] text-white/90 tracking-widest uppercase"
        aria-label="Очистити список улюблених"
      >
        Очистити все
      </button>
    </div>
  );
}

export default WishlistInfo;
