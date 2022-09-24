import React, { useEffect, useState } from "react";
export default function Actor() {
  const [inputVal, setInputVal] = useState("");
  const [actorsData, setActorsData] = useState([]);

  let dataUrl = "";
  if (inputVal.length > 0) {
    dataUrl = `https://api.tvmaze.com/search/people?q=${inputVal}`;
  }else{
    dataUrl = `https://api.tvmaze.com/search/people?q=`;
  }

  const getActorsData = () => {
    fetch(dataUrl)
      .then((response) => response.json())
      .then((result) => setActorsData(result));
    // .then((resData) => console.log(resData))
    // .catch((error) => console.log());
  };

  useEffect(() => {
    getActorsData();
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
                placeholder="Search By Actors Name...."
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container mt-4 ">
          <div className="row">
            {actorsData.map((e, i) => {
              return (
                <div key={i} className="col-md-3 mb-3">
                  <div className="card">
                    <a href={e.person.url}>
                      {e.person.image ? (
                        <img
                          src={e.person.image.original}
                          className="poster"
                          style={{ width: "303px", height: "325px" }}
                          alt={
                            e.person.name != null ? e.person.name : "not found"
                          }
                        />
                      ) : (
                        <div className="poster" style={{ height: "325px" }}>
                          <img
                            src="https://t4.ftcdn.net/jpg/05/14/20/15/360_F_514201525_bdJOhRiJjHOwPc7I0Dg3VFxSsI0FHoOq.webp"
                            style={{ width: "303px", height: "325px" }}
                            alt="not found"
                          />
                        </div>
                      )}
                    </a>
                    <div className="card-body">
                      <p
                        className="card-text overflow-hidden"
                        style={{ height: "20px" }}
                      >
                        Birth Date :&nbsp;
                        {e.person.birthday != null
                          ? e.person.birthday
                          : "Not Available"}
                      </p>

                      <p
                        className="card-text overflow-hidden"
                        style={{ height: "20px" }}
                      >
                        Gender :&nbsp;
                        {e.person.gender != null
                          ? e.person.gender
                          : "Not Available"}
                      </p>
                    </div>
                    <h5 className="text-danger text-center">{e.person.name}</h5>
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
