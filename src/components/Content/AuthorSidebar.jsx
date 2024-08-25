
const AuthorSidebar = () => {
    return (
        <div className="flex justify-start items-center bg-base-200 py-3 px-6 rounded-2xl my-2" style={{ boxShadow: '0 1px 6px rgba(0, 0, 0, 0.25)' }}>
            <div className="h-12 w-12 md:h-15 md:w-15 lg:h-18 lg:w-18">
                <img
                    alt="Tailwind CSS examples"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    className="rounded-full"
                />
            </div>
            <div className="flex flex-col ml-3">
                <a href=""><h4 className="text-sm md:text-md font-semibold">Joy Biswas</h4></a>
                <a href="" className="text-xs font-medium"><h5>26 Quotes</h5></a>
            </div>
        </div>
    )
}

export default AuthorSidebar
