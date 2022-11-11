import React from "react";

const Posts = ({ posts, loading }) => {
    if (loading) {
        return <h2>Loading.....</h2>
    }
    return (
        <>
         <ul className="covData">
                {posts.map(post => {
                    <li key={post.id} className="">
                        {post.ActiveCases}
                    </li>
                })}
            </ul>

        </>
    )
}
export default Posts;