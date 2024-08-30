import SearchBox from "../SearchBox";
import AuthorSidebar from "./AuthorSidebar";
import TagsCloud from "./TagsCloud";

const Sidebar = () => {
    return (


        <div className="flex flex-col  w-[90vw]  md:w-[19vw] lg:w-[20vw] mt-4">
            <SearchBox />
            <h2 className="text-xl font-bold mt-6 mb-2 mx-2 text-center">Popular Author</h2>
            <AuthorSidebar />
            <AuthorSidebar />
            <AuthorSidebar />
            <h2 className="text-xl font-bold mt-6 mb-2 mx-2 text-center">Popular Topics</h2>
            <TagsCloud />

        </div>

    )
}
export default Sidebar;
