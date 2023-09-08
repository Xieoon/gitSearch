import * as S from "./Pagination.style";
import React from "react";

const Pagination = ({ numberOfPages, currentPage, setCurrentPage }) => {
  const [Numbers, setNumbers] = React.useState([]);
  React.useEffect(() => {
    console.log("f");
    let newNumbers = [];
    for (let i = 1; i <= numberOfPages; i++) {
      newNumbers.push(i);
    }

    setNumbers(newNumbers);
    console.log(Numbers);
  }, [setCurrentPage, numberOfPages]);

  const changePage = (number) => {
    setCurrentPage(number);
    console.log(currentPage);
  };

  console.log(Numbers);
  return (
    <S.Pagination>
      {Numbers.map((el) => (
        <S.PaginationNumber
          $active={el === currentPage}
          key={el}
          onClick={()=>changePage(el)}
        >
          {el}
        </S.PaginationNumber>
      ))}
    </S.Pagination>
  );
};

export default Pagination;
