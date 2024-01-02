import { useActions } from "hooks/useActions";
import React from "react";
import css from './RecipeItem.module.css';
import { useFavorites } from "hooks/useFavorites";

function FavoriteList({recipe}) {

  const {favorites} = useFavorites();

  const {toggleFavorites} = useActions()
  
  const isExist = favorites.some(r => r.id === recipe.id);

  // console.log(favorites.length);
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