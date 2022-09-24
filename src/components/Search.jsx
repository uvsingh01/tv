import React, { useState } from "react";
import Actors from "./Actors";
import Show from "./Show";
import Apps from "./Apps.css";

const Search = () => {
  const [actor, setActor] = useState(false);
  const [show, setShow] = useState(false);

  const setActorFilter = () => {
    setShow(false);
    setActor(true);
  };
  const setShowFilter = () => {
    setActor(false);
    setShow(true);
  };
  return (
    <>
      {/* //Navbar */}
      <section>
        <nav className="navbar">
          <div className="container-fluid">
            <div className="container">
              <h2 className="container-child">
                <img
                  src="data:image/png;base64,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"
                  alt="TvMaze"
                />
              </h2>
            </div>
          </div>
        </nav>
      </section>

      {/* search  */}
      <section className="mt-5">
        <div className="container">
          <div className="row mt-3">
            <div className="col-md-7">
              <input
                type="radio"
                name="movie"
                onChange={() => setActorFilter()}
              />
              <strong style={{ fontsize: "20px", color: "whitesmoke" }}>
                {" "}
                By Actor{" "}
              </strong>{" "}
              &nbsp; &nbsp;
              <input
                type="radio"
                name="movie"
                onChange={() => setShowFilter()}
                className="ms-3"
              />
              <strong style={{ fontsize: "20px", color: "whitesmoke" }}>
                {" "}
                By Shows{" "}
              </strong>
            </div>
          </div>
        </div>
      </section>
      {actor ? <Actors /> : ""}
      {show ? <Show /> : ""}
    </>
  );
};

export default Search;
