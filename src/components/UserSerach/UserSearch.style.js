import { styled } from "styled-components";

export const SearchPanel = styled.div`
  display: flex;
  flex-direction: row;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

export const UserSearch = styled.div`
  width: 270px;
  height: 42px;
  padding: 4px 0px 4px 4px;
  display: flex;
  align-items: center;
  gap: 12px;
  border-radius: 34px;
  background: #2a2a2a;
  border: none;
  color: #909093;
`;

export const UserSearchInput = styled.input`
  margin-right: 10px;
  background: #2a2a2a;
  border: none;
  color: #909093;
  font-family: Kanit;
  font-size: 14px;
  font-style: italic;
  font-weight: 400;
  line-height: normal;
  outline: none;
`;

export const LoupeButton = styled.button`
  cursor: pointer;
  background-color: #3d3d3d;
  height: 45px;
  width: 45px;
  border-radius: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0px solid;
`;

export const LoupeImg = styled.img`
  width: 37px;
  height: 37px;
`;

export const SortPanel = styled.div`
  gap: 4px;
  display: flex;
  flex-direction: row;
`;

export const SortButton = styled.div`
  cursor: pointer;
  width: 90px;
  height: 40px;
  border-radius: 20px;
  border: 0.5px solid #212b36;
  color: #a1a1a1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Kanit;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: 20px;
`;
