import React from "react";
import styled from "styled-components/macro";
import { QUERIES } from "../../constants";

const OpinionStory = ({ id, title, author, avatar }) => {
  return (
    <Wrapper>
      <a href={`/story/${id}`}>
        <Avatar alt="" src={avatar} />
        <div>
          <AuthorName>{author}</AuthorName>
          <ArticleTitle>{title}</ArticleTitle>
        </div>
      </a>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  color: var(--color-gray-900);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media ${QUERIES.tabletOnly} {
    flex-direction: row-reverse;
  }
  margin-top: 16px;
  margin-bottom: 16px;
`;

const Avatar = styled.img`
  display: block;
  float: right;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
  margin-left: 16px;
  margin-right: 16px;
  @media ${QUERIES.tabletOnly} {
    float: revert;
    margin-left: revert;
    margin-right: revert;
  }
`;

const AuthorName = styled.p`
  font-size: 1.125rem;
  font-weight: var(--font-weight-medium);
  color: var(--color-gray-700);
  margin-bottom: 4px;
`;

const ArticleTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: var(--font-weight-bold);
  line-height: 1.3;
`;

export default OpinionStory;
