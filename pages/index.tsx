import { gql, useQuery } from "@apollo/client";
import Link from "next/link";

function Home() {

    const { data } = useQuery(gql`
    query {
        posts {
          nodes {
            id
            slug
            title
            excerpt
          }
        }
      }
    `);

    const posts:Array<Post> = data?.posts?.nodes;

  return (
    <div>
        <ul>
          {posts?.map((post) => (
          
          <li key={post.id}>
            <Link href={`/${post.slug}`}>
             <Link href={`/${post.slug}`}>
              <h2>{post.title}</h2>
             </Link>
            </Link>
            <div dangerouslySetInnerHTML={{__html:post.excerpt}}></div>
          </li>
          ))}
        </ul>
    </div>
  )
}

export default Home;