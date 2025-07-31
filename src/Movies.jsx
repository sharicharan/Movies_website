import React, { useEffect, useState } from "react";
import Moviecard from "./Moviecard";
import axios from "axios";
import Pagination from "./Pagination";
function Movies({watchPro,watchTake,watchList}){
  const [movies, setmovies] = useState([]);
  const [pageNo, setpageNo] = useState(1);
  const next = () => {
    setpageNo(pageNo + 1);
  };
  const pre = () => {
    if (pageNo == 1) {
      setpageNo(1);
    } else {
      setpageNo(pageNo - 1);
    }
  };
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=cdb1c3e9ef104cdf7f0ef4baf4d4ae0b&language=en-US&page=${pageNo}`
      )
      .then(function (res) {
        setmovies(res.data.results);
        console.log(res.data.results);
      });
  }, [pageNo]);
  return (
    <div className="p-5">
      <div className="text-2xl font-bold text-center m-5">trending movies</div>
      <div className="flex justify-around flex-wrap gap-[20px]">
        {movies.map((mov) => {
          return (
            <Moviecard
        
            key={mov.id}
              poster_path={mov.poster_path}
              name={mov.original_title}
              watchPro={watchPro}
                   mov={mov}
              watchTake={watchTake}
              watchList={watchList}
            />
          );
        })}
      </div>
      <Pagination next={next} pre={pre} pageNo={pageNo} />
    </div>
  );
}

export default Movies;
// https://api.themoviedb.org/3/movie/popular?api_key=cdb1c3e9ef104cdf7f0ef4baf4d4ae0b&language=en-US&page=1
