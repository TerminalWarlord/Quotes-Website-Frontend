import Card from '../Home/Card'
import Author from '../Content/Author'
const AuthorDetails = () => {
    return (
        <>
            <div className="flex flex-col items-center justify-center overflow-clip">
                <div className="w-full max-w-8xl">
                    <div className='flex px-4 py-4 justify-center'>
                        <Author />
                    </div>
                    <h1 className='pb-4 text-center text-2xl  font-bold'>Quotes By Author</h1>
                </div>
                <div className="container pt-4 pb-12 px-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                        <Card quote='It is kind of strange watching your personal history become costume.' author='Elon Musk' slug="1" />
                        <Card quote='To resist the frigidity of old age one must combine the body, the mind and the heart - and to keep them in parallel vigor one must exercise, study and love.' author='Karl von Bonstetten' slug="1" />
                        <Card quote='In spite of illness, in spite even of the archenemy sorrow, one can remain alive long past the usual date of disintegration if one is unafraid of change, insatiable in intellectual curiosity, interested in big things, and happy in small ways.' author='Edith Wharton' slug="1" />
                        <Card quote='It is kind of strange watching your personal history become costume.' author='Elon Musk' slug="1" />
                        <Card quote='It is kind of strange watching your personal history become costume.' author='Elon Musk' slug="1" />
                        <Card quote='It is kind of strange watching your personal history become costume.' author='Elon Musk' slug="1" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default AuthorDetails
