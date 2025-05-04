import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import LeftAside from '../components/homelayout/LeftAside';
import RightAside from '../components/homelayout/RightAside';
import { Outlet, useLoaderData, useParams } from 'react-router';
import NewsDetailsCard from '../components/homelayout/NewsDetailsCard';

const NewsDetails = () => {
    const data = useLoaderData();
    const {id} = useParams();
    const [news,setNews] = useState([]);
    
    console.log(data,id,news);
    
    useEffect(()=>{
        const newsDetails = data.find((singleNews)=> singleNews.id == id);
        setNews(newsDetails)
    },[data,id])

    return (
        <div>
            <header className='py-3'>
                <Header></Header>
            </header>
            <main className='w-11/12 mx-auto grid grid-cols-12 py-10'>
                <aside className='left col-span-9'>
                    <h2 className='font-bold mb-5'>News Details</h2>
                 <NewsDetailsCard news={news}></NewsDetailsCard>
                </aside>
                <aside className='right col-span-3'>
                    <RightAside></RightAside>
                </aside>

            </main>
        </div>
    );
};

export default NewsDetails;