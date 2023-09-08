import UserSearch from "../../components/UserSerach";
import Header from "../../components/Header";
import React from "react";
import UserCard from "../../components/UserCard";
import Pagination from "../../components/Pagination";

const Main = () => {
  const [usersList, setUsersList] = React.useState("");
  const [currentPage, setCurrentPage] = React.useState(1);

  return (
    <>
      <Header />
      <UserSearch usersList={usersList} setUsersList={setUsersList}  currentPage={currentPage} setCurrentPage={setCurrentPage}/>
      <div>
        {usersList.items?.map((user) => (
          <UserCard
            key={user.id}
            name={user.login}
            avatar={user.avatar_url}
          ></UserCard>
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        numberOfPages={
          usersList.total_count / 10 > 10 ? 10 : usersList.total_count / 10
        }
      />
    </>
  );
};

export default Main;
