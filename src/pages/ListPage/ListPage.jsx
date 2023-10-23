import { NavLink } from "react-router-dom";
import SneakerList from "components/SneakerList/SneakerList";

function ListPage() {
  return (
    <>
      <NavLink to='/'>Back to home</NavLink>
      <SneakerList/>
    </>
  )
}

export default ListPage;