import React from 'react';
import './App.css';
import FavoriteList from 'pages/RecipeItem/RecipeItem';
import Header from './Header/Header';

function App() {
  return (
    
      <section>
        <Header/>
        <FavoriteList
          recipe={{
            id: 1,
            name: 'Steak',
          }}
        />
        <FavoriteList
          recipe={{
            id: 2,
            name: 'Risotto',
          }}
        />
        <FavoriteList
          recipe={{
            id: 3,
            name: 'Pasta',
          }}
        />
      </section>

  );
}

export default App;