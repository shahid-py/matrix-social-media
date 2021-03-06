import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectCurrentUser, AddPost } from "../features/index";
import { useState } from "react";
import "../index.css";

export function Navbar() {
  const currentUser = useSelector(selectCurrentUser);
  const [show, setShow] = useState(false);

  return (
    <>
      {show && <AddPost setShow={setShow} show={show} />}

      <div className="flex flex-col items-center justify-around text-xl bg-coolGray-50 fixed rounded-xl w-1/6 h-4/5 mt-8 ml-28">
        <NavLink to="/" activeClassName="activeStyle" end>
          <p> Home </p>
        </NavLink>
        <NavLink to="/search" activeClassName="activeStyle">
          <p> Search </p>
        </NavLink>

        <NavLink to="/notifications" activeClassName="activeStyle">
          <p> Notifications </p>
        </NavLink>
        <NavLink to={`/${currentUser?.username}`} activeClassName="activeStyle">
          <p> Profile </p>
        </NavLink>

        <button
          className="text-white py-2 px-10 bg-blue-500 rounded-lg"
          onClick={() => setShow(!show)}
        >
          Add Post
        </button>
      </div>
    </>
  );
}