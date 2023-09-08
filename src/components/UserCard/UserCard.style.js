import { styled } from "styled-components";

export const UserCard = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 20px;
  padding-bottom: 20px;
  gap: 20px;
  border-bottom: 1px solid #212325;
`;
export const UserAvatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50px;
`;
export const UserName = styled.div`
  padding-top: 10px;
  font-family: Kanit;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  color: #fff;
`;
