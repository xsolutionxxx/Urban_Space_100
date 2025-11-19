import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="h-15 bg-primary">
      <div className="px-4 py-2.5 mx-auto w-full max-w-[1920px]">
        <p className="text-center text-[12px]">
          Дізнайся більше про <span className="font-bold">Urban Space 100</span>
          <br />
          <Link to="https://www.urbanspace.if.ua/uk" className="underline">
            на нашому сайті
          </Link>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
