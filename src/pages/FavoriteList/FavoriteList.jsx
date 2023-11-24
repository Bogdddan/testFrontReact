import { useActions } from "hooks/useActions";
import React from "react";
import { useSelector } from "react-redux";
// import { actions } from "store/favorites/favoritesSlice";

function FavoriteList({recipe}) {
  const {favorites} = useSelector(state => state);

  const {toggleFavorites} = useActions()
  
  const isExist = favorites.some(r => r.id === recipe.id);

  console.log(favorites);
  return (
    <>
    <div>
        <p>{recipe.name}</p>
        <button onClick={() => 
          toggleFavorites(recipe)}>
            {isExist ? 'Remove from' : 'Add to'} favorites
        </button>
    </div>
    </>
  )
}

export default FavoriteList;