import css from './Header.module.css';
import { MdOutlineFavorite } from "react-icons/md";

export default function Header() {
  return (
    <header className={css.header}>
      <MdOutlineFavorite />
    </header>
  )
}
