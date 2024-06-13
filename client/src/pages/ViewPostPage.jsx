import { useNavigate, useParams } from "react-router-dom";
import useBlogPost from "../hooks/useBlogPosts";

function ViewPostPage() {
  const navigate = useNavigate();
  const { posts, isError, isLoading } = useBlogPost();
  const { id } = useParams();

  return (
    <div>
      <h1>View Post Page</h1>
      {posts
        .filter((post) => post.id === Number(id))
        .map((post) => {
          return (
            <div className="view-post-container" key={id}>
              <h2>{post.title}</h2>
              <p>{post.content}</p>
            </div>
          );
        })}

      <hr />
      <div className="show-all-posts-container">
        <h2>All Posts</h2>
        {posts.map((post) => {
          return (
            <div key={post.id} className="post">
              <h1>{post.title}</h1>
              <div className="post-actions">
                <button
                  className="view-button"
                  onClick={() => navigate(`/post/view/${post.id}`)}
                >
                  View post
                </button>
              </div>
            </div>
          );
        })}
        {isError ? <h1>Request failed</h1> : null}
        {isLoading ? <h1>Loading ....</h1> : null}
      </div>

      <button onClick={() => navigate("/")}>Back to Home</button>
    </div>
  );
}

export default ViewPostPage;
