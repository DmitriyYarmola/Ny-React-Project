import React, { useState } from "react";
import "./paginator.sass";

export type PropsType  = {
  totalItemsCount: number
  pageSize: number
  currentPage: number | null
  onSetCurrentPage: (pageNumber:number) => void
  portionSize: number 
}

let Paginator:React.FC<PropsType> = ({
  totalItemsCount,
  pageSize,
  currentPage,
  onSetCurrentPage,
  portionSize,
}) => {
  let pagesCount = Math.ceil(totalItemsCount / pageSize);
  let pages:Array<number> = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  let portionCount = Math.ceil(pagesCount / portionSize);
  let [portionNumber, setPortionNumber] = useState(1);

  let leftPortionPageNumber = (portionNumber - 1) * portionSize +   1;
  let rightPortionPageNumber = portionNumber * portionSize;

  return (
    <div className="pageNumberList">
      {portionNumber > 1 && (<button onClick={() => { setPortionNumber(portionNumber - 1) }}>Prev</button>)}
      {portionNumber > 1 && <button onClick={ () => {setPortionNumber(1)}}>Boost</button>}
      {pages
        .filter(
          (p) => p >= leftPortionPageNumber && p <= rightPortionPageNumber
        )
        .map((p) => {
          return (
            <span
              className={`${
                currentPage === p ? "selectedPage" : ""
              } ${"pageNumber"}`}
              onClick={(e) => {
                onSetCurrentPage(p);
              }}
            >
              {p}
            </span>
          );
        })}
      {portionNumber < portionCount && ( <button onClick={() => {setPortionNumber(portionNumber + 1)}}>Next</button> )}
      {portionNumber < portionCount && ( <button onClick={ () => {setPortionNumber(portionCount)}}>Boost</button> )}
      {}
    </div>
  );
};

export default Paginator;
