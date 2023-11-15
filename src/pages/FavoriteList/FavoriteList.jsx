import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "store/favorites/favoritesSlice";

function FavoriteList({recipe}) {
  const {favorites} = useSelector(state => state);

  const dispatch = useDispatch()

  console.log(favorites);
  return (
    <>
    <div>
        <p>{recipe.name}</p>
        <button onClick={() => dispatch(actions.toggleFavorites(recipe))}>Add to favorite</button>
    </div>
    </>
  )
}

export default FavoriteList;