import React from 'react'
import Layout from '../../components/Layout'
import Link from 'next/link'

const index = ({data}) => {
    return (
        <Layout title="Blog" description="Blog of my desing">
            <h1>Lista de Blog</h1>
            {data.map(post => (
                <div key={post.id}>
                    <h4>
                        <Link href={`/blog/${post.id}`}>
                            <a>{post.id} - {post.title}</a>
                        </Link>
                    </h4>
                    <p>{post.body}</p>
                </div>
            ))}
        </Layout>
    )
}

export async function getStaticProps() {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts")
        const data = await res.json()
        return {
            props: {
                data
            }
        }
    } catch (error) {
        console.log(error)
    }
}

export default index
