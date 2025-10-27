import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="py-2.5 h-15">
      <p className="text-center text-[12px]">
        Дізнайся більше про <span className="font-bold">Urban Space 100</span>
        <br />
        <Link to="https://www.urbanspace.if.ua/uk" className="underline">
          на нашому сайті
        </Link>
      </p>
    </footer>
  );
}

export default Footer;
