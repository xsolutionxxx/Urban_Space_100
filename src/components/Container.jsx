function Container(props) {
  return (
    <div className="py-[25px] px-[15px] flex flex-1 flex-col gap-5 bg-secondary">
      {props.children}
    </div>
  );
}

export default Container;
