import React from "react";

function Pagination({next,pre,pageNo}) {
  return (
    <div className="bg-grey-500 text-center text-white flex gap-[30px] justify-center">
      <div className="" onClick={pre}>
        <i class="fa-solid fa-square-caret-left"> </i>
      </div >
      <div className="font-bold">
        {pageNo}
      </div>
      <div onClick={next}>
        <i class="fa-solid fa-square-caret-right"></i>
      </div>
    </div>
  );
}

export default Pagination;
