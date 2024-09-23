import { ReactNode } from "react";
import BookmarksButton from "./BookmarksButton";
import Logo from "./Logo";

type HeaderPropTypes = {
children: ReactNode
}
export default function Header({children}:HeaderPropTypes) {
  return (
    <header className="header">
      <div className="header__top">
<Logo />
<BookmarksButton />

      </div>
     {children}
    </header>
  );
}
