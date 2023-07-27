import Head from "next/head";
import Layout from "../../components/Layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Date from "../../components/Date";
import utilStyles from '../../styles/utils.module.css';
import { GetStaticProps, GetStaticPaths } from 'next'

export const getStaticPaths: GetStaticPaths = async () => {
    // Gets all the paths (post ids) in posts folder
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false,
    };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    // Gets the data from the given id (from the file name [id].js), auto passes as postData prop
    const postData = await getPostData(params?.id as string);
    return {
        props: {
            postData,
        },
    };
}

export default function Post({ postData }: {
    postData: {
        title: string
        date: string
        contentHtml: string
    }
}) {
    // postData members given from getPostData which uses Matter to read metadata
    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <article>
                <h1 className={utilStyles.headingXl}>{postData.title}</h1>
                <div className={utilStyles.lightText}>
                    <Date dateString={postData.date} />
                </div>
                <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </article>
        </Layout>
    )
}
