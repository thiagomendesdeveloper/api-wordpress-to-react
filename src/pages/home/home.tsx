import React from "react";

import { useGetPosts } from "../../hooks";
import { PostsList } from "../../components/posts-list";

export const Home = () => {
  const [page, setPage] = React.useState(1);
  const { data, isLoading } = useGetPosts({
    url: "posts?_embed=&categories=518",
    params: { page }
  });

  return (
    <div className="App">
      {!isLoading && <span>Total de posts: {data.length}</span>}

      {isLoading && data.length ? (
        <span>Carregando post...</span>
      ) : (
        <PostsList posts={data} />
      )}

      <button
        onClick={() => setPage((prev) => (prev += 1))}
        disabled={isLoading}
      >
        {isLoading ? "Carregando posts.." : "Carregar mais"}
      </button>
    </div>
  );
};
