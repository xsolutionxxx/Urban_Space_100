import Message from "@components/ui/Message";

function ProductEmpty({ onReset }) {
  return (
    <div className="flex-1 flex flex-col items-center justify-center gap-6">
      <div className="w-full max-w-md px-4 text-center">
        <Message
          title="Упс! Нічого не знайдено"
          text="Спробуйте скинути фільтри або оберіть інші параметри, щоб побачити більше товарів."
        />
      </div>

      <button
        onClick={onReset}
        className="px-4 py-2 max-w-[320px] w-full bg-accent border rounded"
      >
        Скинути фільтри
      </button>
    </div>
  );
}

export default ProductEmpty;
