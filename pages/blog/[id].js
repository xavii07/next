import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import Layout from '../../components/Layout'



const primerPost = ({data}) => {
    return (
        <Layout title={data.title}>
            <h2>{data.id}. {data.title}</h2>
            <p>{data.body}</p>
        </Layout>
    )
}


export async function getStaticPaths() {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts")
        const data = await res.json()
        const paths = data.map(({id}) => ({params: {id: `${id}`}}))
        return {
            paths,
            fallback: false
        }
    } catch (error) {
        
    }
}

export async function getStaticProps({params}) {
    try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
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

export default primerPost
