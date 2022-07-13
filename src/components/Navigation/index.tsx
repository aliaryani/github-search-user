import { NavLink } from "react-router-dom";


export function Navigation(props:any) {
    return (
        <>
          <NavLink
          exact
          to=""
          style={{color:"#C9D1D9",textDecoration:'none',padding:16}}
          activeStyle={{
          fontWeight: "bold",
          color: "#fff",
          textDecoration:'underline'}}
          >
            Search Page
          </NavLink>
          <NavLink
          exact
            to="/history"
            style={{color:"#C9D1D9",textDecoration:'none',padding:16}}
            activeStyle={{
              fontWeight: "bold",
              color: "#fff",
              textDecoration:'underline'
            }}
          >
          History Page
          </NavLink>
        </>
    );
}