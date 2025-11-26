function WishlistHeader({ count = 0, onClear }) {
  return (
    <div className="flex flex-col gap-1.5">
      <h1 className="font-bold text-2xl text-center">Вподобайки</h1>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
        <h3 className="font-medium text-base text-text-sub text-center">
          Всього товарів додано в улюблені: {count}
        </h3>

        <button
          onClick={onClear}
          className="px-3 py-1 bg-accent border rounded text-sm"
          aria-label="Очистити список улюблених"
        >
          Очистити список улюблених
        </button>
      </div>
    </div>
  );
}

export default WishlistHeader;