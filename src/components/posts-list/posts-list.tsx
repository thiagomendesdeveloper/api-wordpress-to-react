import React from "react";
import { Link } from "react-router-dom";

import { StyledPostsList, StyledPostsListItem } from "./posts-list-styles";

type TPostsList = {
  posts: any[];
};

export const PostsList = ({ posts }: TPostsList) => {
  return (
    <StyledPostsList>
      {posts.map((post) => (
        <StyledPostsListItem key={post.id}>
          <div className="author">
            <span>{post._embedded.author[0]?.name}</span>
          </div>
          {post.title.rendered}
          <Link to={`/post/${post.slug}`}>Acessar</Link>
        </StyledPostsListItem>
      ))}
    </StyledPostsList>
  );
};
