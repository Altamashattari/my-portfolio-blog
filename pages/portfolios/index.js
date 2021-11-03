import axios from 'axios';
import Link from 'next/link';
import React from 'react';
import BaseLayout from "../../components/layouts/BaseLayout";

const Portfolios = ({ posts = [] }) => {

    const renderPosts = () => {
        return posts.map(post => <>
            <li key={post.id}>
                <Link href={`/portfolios/${post.id}`}>
                    <a>{post.title}</a>
                </Link>
            </li>
        </>)
    };

    return (
        <>
            <BaseLayout>
                <div>I am Portfolios page!!</div>
                <ul>
                    {renderPosts()}
                </ul>
            </BaseLayout>
        </>
    )
};

Portfolios.getInitialProps = async () => {
    let posts = [];
    try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
        posts = res.data;
    } catch (error) {
        console.error("Error fetching posts...", error);
    }
    return { posts: posts.slice(0, 10) }
};

export default Portfolios;