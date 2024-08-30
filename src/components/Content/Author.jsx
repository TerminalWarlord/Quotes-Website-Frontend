
const Author = ({ isFetching }) => {
    return (
        <div className="flex rounded-lg bg-base-300 px-6 py-4 w-[calc(90vw-3rem)] md:w-[calc(70vw-3rem)] lg:w-[calc(60vw-3rem)]">
            <div className="h-20 w-20">
                {isFetching ? <div className="skeleton h-16 w-16 shrink-0 rounded-full"></div> : <img
                    alt="Author"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    className="rounded-xl"
                />}
            </div>
            <div className="ml-4 w-full">
                {isFetching ? <div className="skeleton h-4 w-40 my-2"></div> : <h5 className="text-md md:text-lg text-white-100 font-semibold">Abraham Lincoln</h5>}
                {isFetching ? <div className="skeleton h-2 w-25 my-4"></div> : <h6 className="text-sm md:text-md text-white-400 font-medium my-1">Born in 1940</h6>}
                {isFetching ? <div className="skeleton h-32 w-full my-4"></div> : <h3 className="text-xs md:text-sm lg:text-md">Abraham Lincoln was an American lawyer, politician, and statesman who served as the 16th president of the United States from 1861 until his assassination in 1865.</h3>}
            </div>
        </div>
    )
}

export default Author
