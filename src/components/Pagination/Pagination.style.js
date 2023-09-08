import { styled } from "styled-components";

export const Pagination = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
`;

export const PaginationNumber = styled.div`
  cursor: pointer;
  width: 30px;
  height: 30px;
  border: 1px solid #212b36;
  border-color: ${(props) => (props.$active ? "#4200FF" : "#212B36")};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => (props.$active ? "#4200FF" : "#FFFFFF")};
  font-style: normal;
  font-weight: 700;
  line-height: 87.5px;
`;
