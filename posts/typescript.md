---
title: Converting to TypeScript
date: '2023-07-26'
---
# It's really easy
No seriously it was easy, just add types in arguments and some returns, static props and paths will need to be changed, but then otherwise that is it. The only things that might be weird at first is most of the `posts.ts` library and the dynamic path for posts in [id].tsx, mainly where it says an argument `param as type`, so keep an eye out for that when writing React code in TypeScript

Check this:
```
export const getStaticProps: GetStaticProps = async ({ params }) => {
    // Gets the data from the given id (from the file name [id].js), 
    // auto passes as postData prop
    const postData = await getPostData(params?.id as string);
    return {
        props: {
            postData,
        },
    };
}
```