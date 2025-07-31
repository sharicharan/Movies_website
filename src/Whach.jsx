import React, { useState } from "react";
import genreids from "./utility/genre";
import "./App.css";
function Whach({ watchList, setwatchList }) {
  const [search, setSearch] = useState("");
  function searchPro(e) {
    setSearch(e.target.value);
  }
  let rateinc = () => {
    let stored = watchList.sort((A, B) => {
      return A.vote_average - B.vote_average;
    });
    setwatchList([...stored]);
  };
  let ratedec = () => {
    let stored1 = watchList.sort((A, B) => {
      return B.vote_average - A.vote_average;
    });
    setwatchList([...stored1]);
  };
  return (
    <>
      <div className="text-center m-10">
        <input
          type="text"
         
          onChange={searchPro}
          value={search}
          placeholder="search.."
          
        />
      </div>

      <div className="border border-gray-400 bg-gray p-5">
        <table className="w-full">
          <thead>
            <tr>
              <th>Poster</th>
              <th>Name</th>
              <div className="flex justify-center align-center">
                <div onClick={rateinc} className="p-2">
                  <i class="fa-solid fa-arrow-up" onClick={rateinc}></i>
                </div>
                <th className="p-2">Rating</th>
                <div onClick={ratedec} className="p-2">
                  <i class="fa-solid fa-arrow-down"></i>
                </div>
              </div>

              <th>Popular</th>
              <th>Genre</th>
            </tr>
          </thead>
          <tbody>
            {watchList
              .filter((mov) => {
                return mov.title.toLowerCase().includes(search.toLowerCase());
              })
              .map((mov) => {
                return (
                  <tr className="text-center  box">
                    <td className="flex justify-center">
                      <img
                        src={`https://image.tmdb.org/t/p/original/${mov.poster_path}`}
                        className="h-[30vh] w-[32vh] rounded-md shadow-blue-500/50 shadow-md hover:scale-110 duration-300"
                      />
                    </td>
                    <td>{mov.original_title}</td>
                    <td>{mov.vote_average}</td>
                    <td>{mov.popularity}</td>
                    <td>{genreids[mov.genre_ids[0]]}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Whach;
