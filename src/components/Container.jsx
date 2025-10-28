function Container(props) {
  return (
    <div className={`py-[25px] px-[15px] bg-secondary ${props.clases}`}>
      {props.children}
    </div>
  );
}

export default Container;
