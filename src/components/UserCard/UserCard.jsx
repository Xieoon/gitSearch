import * as S from "./UserCard.style";

const UserCard = (props) => {
  return (
    <S.UserCard>
      <S.UserAvatar src={props.avatar} />
      <S.UserName>{props.name}</S.UserName>
    </S.UserCard>
  );
};

export default UserCard;
