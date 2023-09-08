import * as S from "./UserSearch.style";
import loupe from "../../assets/icons/loupe.svg";
import React from "react";

const UserSearch = ({
  usersList,
  setUsersList,
  currentPage,
  setCurrentPage,
}) => {
  const [userName, setUserName] = React.useState("");

  const userCheckButton = () => {
    fetch(
      `https://api.github.com/search/users?q=${userName}&page=${currentPage}&per_page=10`
    )
      .then((response) => response.json())
      .then((users) => {
        console.log(users);
        setUsersList(users);
      });
  };

  const sortUsers = (order) =>{
    fetch(
      `https://api.github.com/search/users?q=${userName}&page=${currentPage}&per_page=10&sort=repositories&order=${order}`
    )
      .then((response) => response.json())
      .then((users) => {
        console.log(users);
        setUsersList(users);
      });
  }

  React.useEffect(() => {
    userCheckButton();
  }, [currentPage]);

  return (
    <S.SearchPanel>
      <S.UserSearch>
        <S.LoupeButton
          onClick={() => {
            setCurrentPage(1);
            userCheckButton();
          }}
        >
          <S.LoupeImg src={loupe} alt="loupe" />
        </S.LoupeButton>
        <S.UserSearchInput
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="Search User"
        />
      </S.UserSearch>
      <S.SortPanel>
        <S.SortButton onClick={()=>sortUsers('asc')}>Ascending </S.SortButton>
        <S.SortButton onClick={()=>sortUsers('desc')} >Descending</S.SortButton>
      </S.SortPanel>
    </S.SearchPanel>
  );
};

export default UserSearch;
