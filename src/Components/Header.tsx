import { FC } from "react";
import { Cart } from "../Common/Components/Cart";
import Link from "next/link";

const Logo: FC = () => (
  <Link href="/">
    <span className="logo">Билетопоиск</span>
  </Link>
);

export const Header: FC = () => {
  return (
    <header className="header">
      <Logo />
      <Cart />
    </header>
  );
};
