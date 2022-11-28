import styled from "styled-components";

export const StyledPostsList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const StyledPostsListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px 0;
  /* border-bottom: 1px solid #ccc; */
  width: 100%;
  cursor: pointer;
  /* transition: 0.5s ease; */
  padding: 20px;

  &:nth-child(even) {
    background: #ccc;
  }

  &:hover {
    /* transform: scale(1.05); */
  }
`;
