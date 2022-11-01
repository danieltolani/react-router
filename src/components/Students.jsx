import React from "react";
import { useEffect, useState } from "react";
import "../styles/students.css";

const Students = (props) => {
  const [userArray, setUserArray] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // const [total, setTotal] = useState(0)
  const [pageNo, setPageNo] = useState(1);
  // const [pages, setPages] = useState(0)
  const [page, setPage] = useState(1);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://randomuser.me/api/?results=30")
      .then((res) => res.json())
      .then((data) => {
        setUserArray(data?.results);
        setIsLoading(false);
      });
  }, []);

  const perPage = 6;
  const total = userArray.length;
  const pages = Math.ceil(total / perPage);
  const skip = page * perPage - perPage;
  

  const userElements = userArray
    .slice(skip, skip + perPage)
    .map((userScan, index) => {
      const { name, id, picture, location, login } = userScan;

      // console.log(name)
      return (
        <div className="student-card" key={login.uuid}>
          <div className="student-core-detail">
            <img src={picture.large} />
            <h2>
              {name.first} {name.last}
            </h2>
          </div>

          <div className="student-school">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" > <path d="M2.267 1.778c0-.712.577-1.29 1.289-1.29h5.333a1.29 1.29 0 0 1 1.226.89h2.33c.711 0 1.288.577 1.288 1.289v11.555c0 .27.22.49.49.49H16v.8h-1.778a1.289 1.289 0 0 1-1.289-1.29V2.667a.489.489 0 0 0-.489-.49h-2.266v12.045c0 .712-.577 1.29-1.29 1.29H0v-.8h2.267V1.777Zm.8 12.933h5.822c.27 0 .489-.219.489-.489V1.778a.489.489 0 0 0-.49-.49H3.557a.489.489 0 0 0-.49.49V14.71ZM5.822 8A1.289 1.289 0 1 1 8.4 8a1.289 1.289 0 0 1-2.578 0Zm1.29-.489a.489.489 0 1 0 0 .978.489.489 0 0 0 0-.978Z" fill="#444" /> </svg>
            <p>School of {location.country}</p>
          </div>

          <div className="card-icons-wrapper">
            <button className="card-icons">
              <svg width="28" height="26" viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg" > <path d="M0 24h28v2H0v-2ZM23.4 7c.8-.8.8-2 0-2.8L19.8.6c-.8-.8-2-.8-2.8 0l-15 15V22h6.4l15-15Zm-5-5L22 5.6l-3 3L15.4 5l3-3ZM4 20v-3.6l10-10 3.6 3.6-10 10H4Z" fill="#444" /> </svg>
            </button>

            <button className="card-icons"> <svg width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg" > <path d="M8 10h2v12H8V10ZM14 10h2v12h-2V10Z" fill="#FF7A59" /> <path d="M0 4v2h2v20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6h2V4H0Zm4 22V6h16v20H4ZM8 0h8v2H8V0Z" fill="#FF7A59" /> </svg>
            </button>
          </div>
        </div>
      );
    });



  if (isLoading) return <h1> LOADING... </h1>;

  return (
    <section className="student-section">
      <div className="dash-options">
        <button>
          Add a new Student
          <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg" > <path d="M9.569.5c.282 0 .552.1.751.277.2.177.312.417.312.667V9c0 .25-.112.49-.312.668-.199.177-.47.276-.751.276H1.063c-.282 0-.552-.1-.752-.276A.894.894 0 0 1 0 9c0-.25.112-.49.311-.668.2-.177.47-.276.752-.276h7.442V1.444c0-.25.112-.49.312-.667.2-.177.47-.277.752-.277Z" fill="#fff" /> <path d="M8.505 9c0-.25.112-.49.312-.668.2-.177.47-.276.752-.276h8.505c.282 0 .552.1.752.276.2.177.311.417.311.668 0 .25-.112.49-.311.668-.2.177-.47.276-.752.276h-7.442v6.611c0 .251-.112.491-.312.668-.199.178-.47.277-.751.277-.282 0-.553-.1-.752-.277a.895.895 0 0 1-.312-.668V9Z" fill="#fff" /> </svg>
        </button>
        <input type="text" placeholder="Search & Filter" />
      </div>

      {userElements}

      <div className="pagination-wrapper">
        <button disabled={page<=1} className="prevPage-wrapper" onClick={()=> setPage((prev) => prev - 1)}>
          <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg" > <path d="m7.5 10.058-3.26-3.26a.993.993 0 0 1 0-1.4l3.26-3.26" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>
          <h3 className="paging-text"> Previous </h3>
        </button>

        {Array.from({ length: pages }, (value, index) => index + 1).map(
          (each) => (
            <button className="page-nav-btn" onClick={() => setPage(each)}>
              {each}
            </button>
          )
        )}

        <button disabled={page>=pages} className="prevPage-wrapper" onClick={()=> setPage((prev) => prev + 1)} >
          <h3 className="paging-text"> Next </h3>
          <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m4.5 10.058 3.26-3.26a.993.993 0 0 0 0-1.4L4.5 2.138" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </button>
      </div>
    </section>
  );
};

export default Students;
