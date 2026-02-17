import BackToHomeBtn from "../ui/BackToHomeBtn";

function WishlistHeader() {
  return (
    <div className="flex flex-col gap-3">
      <BackToHomeBtn linkText="Назад до крамнички" />
      <h2 className="font-bold text-2xl md:text-2xl lg:text-3xl leading-tight md:leading-snug uppercase">
        Мої вподобайки
      </h2>
    </div>
  );
}

export default WishlistHeader;
