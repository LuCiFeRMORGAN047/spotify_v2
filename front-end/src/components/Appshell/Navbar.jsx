import { Link, useLocation } from "react-router-dom";

const LINKS = [
  {
    href: "/services",
    label: "Services",
  },
  {
    href: "/blog",
    label: "Blog",
  },
  {
    href: "/about-us",
    label: "About Us",
  },
  { href: "/contact-us", label: "Contact Us" },
];

export default function Navbar() {
  return (
    <header className=" border-b border-b-neutral-700 px-16 py-6 z-50">
      <div className="flex justify-between items-center max-w-[1920px] mx-auto">
        <Link to={"/"} className="font-bold text-2xl ">
          Spotify
        </Link>
        <div className="flex gap-16 items-center">
          <ul className="flex gap-8">
            {LINKS.map((props, i) => (
              <Navlink {...props} key={i} />
            ))}
          </ul>
          <Link
            to={"/sign-in"}
            className="bg-gradient-to-bl from-emerald-700 to-green-500 text-sm px-5 py-2 rounded-md transition-all active:scale-[0.98]"
          >
            Sign in
          </Link>
        </div>
      </div>
    </header>
  );
}

function Navlink({ href, label }) {
  const { pathname } = useLocation();
  const isBold = pathname === href;
  return (
    <Link
      className={` ${
        isBold ? "font-medium" : "text-neutral-100 hover:text-emerald-500"
      }`}
      to={href}
    >
      <li>{label}</li>
    </Link>
  );
}
