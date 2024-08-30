import QuoteBox from "./QuoteBox";
import Breadcrumbs from "../Breadcrumbs";
import Author from "./Author";
import Sidebar from "./Sidebar";
import Tag from "./Tag";
import { useState } from "react";
import { useLoaderData, useNavigation } from "react-router-dom";

const QuoteDetails = () => {
    const navigation = useNavigation();
    const isFetching = navigation.state === 'loading';
    const data = useLoaderData();
    console.log(isFetching);


    return (
        <main className="flex flex-col md:flex-row lg:flex-row justify-center bg-white-100 pt-2 pb-8 mb-8 items-center md:items-start">
            <div>
                <div className="mx-4 my-2">
                    <Breadcrumbs />
                </div>
                <div className="flex flex-col bg-base-200 w-[90vw] md:w-[70vw] lg:w-[60vw] mx-4 rounded-md p-4 items-center" style={{ boxShadow: '0 1px 4px rgba(0, 0, 0, 0.5)' }}>
                    {isFetching ? <div className="skeleton h-96 w-full"></div> : <img src="https://i0.wp.com/quotes.espacehub.org/wp-content/uploads/2024/08/quote_with_bg-2.png?w=800&ssl=1" alt="" className="rounded-lg object-cover w-[20rem] lg:w-[40rem] h-auto" />}
                    <hr />


                    {isFetching ? <div className="skeleton h-12 w-full my-4"></div> : <QuoteBox author={data.author} quote={data.quote} />}
                    <hr className="mt-4" />

                    <div className="my-4 p-4 w-full">
                        <h2 className="text-center text-xl font-bold mb-4 uppercase decoration-wavy underline">About The Quote</h2>
                        {isFetching ? <div className="skeleton h-32 w-full my-4"></div> : <h4 className="first-letter:font-semibold first-letter:text-7xl first-letter:float-left first-letter:mr-3 ">{data.description}</h4>}
                    </div>
                    <hr className="mt-4" />
                    <div className="my-4 p-4">
                        <h2 className="text-center text-xl font-bold mb-4 uppercase decoration-wavy underline">About The Author</h2>
                        <Author isFetching={isFetching} />
                    </div>

                    <div className="my-4">
                        <h2 className="text-center text-xl font-bold mb-2 uppercase decoration-wavy underline">Topics</h2>
                        {isFetching ? <div className="skeleton h-12 w-28"></div> : <div className="flex flex-wrap">
                            <Tag name="Life" url="life" />
                            <Tag name="Life" url="life" />
                            <Tag name="Life" url="life" />
                        </div>}
                    </div>

                </div>
            </div>
            {/* sidebar */}
            <Sidebar />

        </main >
    )
}

export default QuoteDetails

