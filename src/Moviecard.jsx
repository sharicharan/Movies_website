import React from "react";

function Moviecard({ poster_path, name, watchPro, mov, watchTake, watchList }) {
  function doesHave(mov) {
    for (let i = 0; i < watchList.length; i++) {
      if (watchList[i].id == mov.id) {
        return true;
      }

    }
        return false;
  }
  return (
    <div className=" flex flex-col gap-[10px]">
      <div
        className="p-2 h-[40vh] w-[180px] bg-cover bg-center bg-[no-repeat] rounded-[5px] hover:cursor-pointer hover:scale-110 duration-300"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`,
        }}
      >
        {doesHave(mov) ? (
          <div
            className="whach"
            onClick={() => {
              watchTake(mov);
            }}
          >
            <i class="fa-solid fa-xmark"></i>
          </div>
        ) : (
          <div
            className="whach"
            onClick={() => {
              watchPro(mov);
            }}
          >
            <i class="fa-solid fa-bookmark"></i>
          </div>
        )}
      </div>
      <div className="text-center  w-[170px]">{name}</div>
    </div>
  );
}

export default Moviecard;
