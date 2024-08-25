
const Author = () => {
    return (
        <div className="flex rounded-lg w-[100%] bg-base-300 px-6 py-4">
            <div className="h-20 w-20">
                <img
                    alt="Tailwind CSS examples"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    className="rounded-xl"
                />
            </div>
            <div className="ml-4">
                <h2 className="text-md md:text-lg text-white-100 font-semibold">Abraham Lincoln </h2>
                <h3 className="text-sm md:text-md text-white-400 font-medium my-1">Born in 1940</h3>
                <p className="text-xs md:text-sm lg:text-md">Abraham Lincoln was an American lawyer, politician, and statesman who served as the 16th president of the United States from 1861 until his assassination in 1865.</p>
            </div>
        </div>
    )
}

export default Author
