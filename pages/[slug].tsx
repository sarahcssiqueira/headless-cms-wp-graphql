import { gql, useQuery } from "@apollo/client"
import { useRouter } from "next/router";

    
    const Post = () => {
        const {query} = useRouter();
        const {data} = useQuery ( gql`
        query {
            post (id:"${query.slug}" idType: SLUG) {
                title
                content
                author {
                    node {
                        name
                    }
                }
            }
        }
        `);

        const post: Post = data?.post;

        return (
            <article>
                <h1>{post?.title}</h1>
                <p>{post?.author.node.name}</p>
                <div dangerouslySetInnerHTML={{__html:post?.content}}/>
            </article>
        )
}
    
export default Post;