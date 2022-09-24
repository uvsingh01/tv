import React, { useEffect, useState } from "react";
// import pic from "./icon.jpg"
export default function Actor() {
  const [inputVal, setInputVal] = useState("");
  const [showData, setShowData] = useState([]);

  let dataUrl = "";
  if (inputVal.length > 0) {
    dataUrl = `https://api.tvmaze.com/search/shows?q=${inputVal}`;
  }
  else{
    dataUrl = `https://api.tvmaze.com/search/shows?q=`;
  }

  const getShowData = () => {
    fetch(dataUrl)
      .then((response) => response.json())
      .then((result) => setShowData(result));
    // .then((resData) => console.log(resData))
    // .catch((error) => console.log());
  };

  useEffect(() => {
    getShowData();
  });
  // console.log(actorsData);

  return (
    <>
      <section className="mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                className="form-control"
                placeholder="Search By Shows Name...."
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container mt-4">
          <div className="row">
            {showData.map((e, i) => {
              return (
                <div key={i} className="col-md-3 mb-3">
                  <div className="card">
                    <a href={e.show.url}>
                      {e.show.image ? (
                        <img
                          src={e.show.image.medium}
                          style={{ width: "303px", height: "325px" }}
                          alt={e.show.name != null ? e.show.name : "not found"}
                        />
                      ) : (
                        <div className="poster" style={{ height: "325px" }}>
                          <img
                            src="https://t4.ftcdn.net/jpg/05/14/20/15/360_F_514201525_bdJOhRiJjHOwPc7I0Dg3VFxSsI0FHoOq.webp"
                            style={{ width: "303px", height: "325px" }}
                            alt={e.show.name}
                          />
                        </div>
                      )}
                    </a>
                    <div>
                      <span>
                        <i
                          className="fa fa-star text-success overflow-hidden"
                          aria-hidden="true"
                        ></i>{" "}
                        <strong>Genres: </strong>
                        {e.show.genres[0]!=null ? e.show.genres[0]: "Not Available"}
                      </span>
                    </div>
                    <h5 className="text-danger text-center">{e.show.name}</h5>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
