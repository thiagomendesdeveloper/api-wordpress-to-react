import React from "react";
import { useParams } from "react-router-dom";
import parse from "html-react-parser";
import { isNil } from "ramda";

import { useGetPost } from "../../hooks";

import { StyledPost } from "./post-styles";

export const Post = () => {
  const { slug } = useParams();
  const { data, isLoading } = useGetPost({
    url: `posts?_embed&slug=${slug}`
  });

  return (
    <StyledPost>
      {isLoading && <span>Carregando informações...</span>}
      {!isLoading && !isNil(data) && parse(data.content.rendered)}
    </StyledPost>
  );
};
