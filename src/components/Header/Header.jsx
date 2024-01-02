import { useFavorites } from 'hooks/useFavorites';
import css from './Header.module.css';
import { MdOutlineFavorite } from "react-icons/md";

export default function Header() {
  const {favorites} = useFavorites();
  // console.log(favorites.length);
  return (
    <header className={css.header}>
      <MdOutlineFavorite />
      <span>{favorites.length}</span>
    </header>
  )
}
