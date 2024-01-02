import { useActions } from "hooks/useActions";
import React from "react";
import { useSelector } from "react-redux";
import css from './FavoriteList.module.css';
// import { actions } from "store/favorites/favoritesSlice";

function FavoriteList({recipe}) {
  const {favorites} = useSelector(state => state);

  const {toggleFavorites} = useActions()
  
  const isExist = favorites.some(r => r.id === recipe.id);

  console.log(favorites);
  return (
    <>
    <div className={css.item}>
        <h3>{recipe.name}</h3>
        <button onClick={() => 
          toggleFavorites(recipe)}>
            {isExist ? 'Remove from' : 'Add to'} favorites
        </button>
    </div>
    </>
  )
}

export default FavoriteList;