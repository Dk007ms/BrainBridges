import React from "react";
import myImage from "../assets/page-not-found.png";

export default function Notfound() {
  return (
    <div className="sm:w-max w-11/12 h-max mx-auto flex flex-col items-center justify-center  font-sans font-bold text-3xl size-14 p-2">
      <img className="w-40 h-40 sm:w-96 sm:h-96" src={myImage} />
      <span className="404 text-center">Please Enter</span>
      <span className="notfound text-center">
        Valid <span className="path text-red-500">Path</span> Component in Url
      </span>
    </div>
  );
}
