import { NavLink } from "react-router-dom";

function Home() {
  return (

    <>
    <ul>
      <li><NavLink to="/listpage">To list page</NavLink></li>
      <li><NavLink to='/strengthbar'>To strength bar page</NavLink></li>
    </ul>
    </>
  )
}

export default Home;