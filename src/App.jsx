import { useState } from "react";
import "./App.css";
import { Navbar } from "./Navbar";
import Movies from "./Movies";
import Whach from "./Whach";
import Banner from "./Banner";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";

function App() {
  const [watchList, setwatchList] = useState([]);
  let watchPro = (mov) => {
    let newWatchList = [...watchList, mov];
    setwatchList(newWatchList);
    console.log(newWatchList);
    localStorage.setItem('stored', JSON.stringify(newWatchList));
  };
  let watchTake = (mov) => {
    let upWatch = watchList.filter((movie) => {
      return movie.id != mov.id;
    });
       localStorage.removeItem('stored', JSON.stringify(upWatch));
    setwatchList(upWatch);
    console.log(upWatch);
  };



   useEffect(()=>{
       let movieDat = localStorage.getItem('stored')
       if(!movieDat){
        return
       }
        setwatchList(JSON.parse(movieDat))


 },[])
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />{" "}
                <Movies
                  watchPro={watchPro}
                  watchTake={watchTake}
                  watchList={watchList}
                />
              </>
            }
          />
          <Route path="/Whach" element={<Whach watchList={watchList} setwatchList={setwatchList} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
