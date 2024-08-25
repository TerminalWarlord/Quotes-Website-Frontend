import QuoteBox from "./QuoteBox";
import Breadcrumbs from "../Breadcrumbs";
import Author from "./Author";
import Sidebar from "./Sidebar";

const MainContent = () => {
    return (
        <div className="flex flex-col md:flex-row lg:flex-row justify-center bg-white-100 py-8 items-center md:items-start">
            {/* content */}
            <div>
                <div>
                    <Breadcrumbs />
                </div>
                <div className="flex flex-col bg-base-200 w-[90vw] md:w-[70vw] lg:w-[60vw] m-4 rounded-md p-4 items-center" style={{ boxShadow: '0 1px 4px rgba(0, 0, 0, 0.5)' }}>
                    <img src="https://i0.wp.com/quotes.espacehub.org/wp-content/uploads/2024/08/quote_with_bg-2.png?w=800&ssl=1" alt="" className="rounded-lg object-cover w-[20rem] lg:w-[40rem] h-auto" />
                    <hr />


                    <QuoteBox author={"Elon Musk"} quote={"Gratitude unlocks the fullness of life. It turns what we have into enough, and more. It turns denial into acceptance"} />
                    <hr className="mt-4" />

                    <div className="my-4 p-4">
                        <h2 className="text-center text-xl font-bold mb-4 uppercase decoration-wavy underline">About The Quote</h2>
                        <p className="first-letter:font-semibold first-letter:text-7xl first-letter:float-left first-letter:mr-3 ">The meaning of this quote by lincoln defines the man who promises his utmost devotion to everything he does and not simply to be the hero of his own story but to deliver it sincerely and authentically. he is asserting that his actions will be guided by his conscience and personal integrity, rather than seeking to present a perfect image or conform to societal expectations.
                            In this, he is giving the nod to the critics and admit the possibility that he may be faced with the opposition, anyway. he points out, to the goal of his studies, if he reaches a certain level then no one will be able to say anything about him because his results will be enough to guarantee him. on the one hand, he is now free to say that should he not win the race or commit any blunders no amount of external support or attempts at defense will seal the fate of the outcome.
                            Lincoln also emphasizing the character and the reputation of an individual. he expresses that nobody's behavior should be determined by external situations but by the inner morals. this quote could be seen as an example of lincoln's own life where he was working with honesty, diligence, and accountability, as well as, his willingness to take calculated risks and face possible criticism to get his goals.
                            In addition, this quote is a great example of lincoln's practical and down-to-earth approach. instead of offering a surefire plan or a guarantee of success, he speaks to a commitment to doing his best and being authentic to himself. this quote highlights the fact that the real triumph and achievement that we can gain in our lives are the result of the hard work done, resilience shown, and the readiness to take responsibility for one's actions rather than looking for external validation or excuses, and it should be a reminder to us in this respect.
                            &nbsp
                            To be brief, lincoln's quote is a compilation of principles like integrity, accountability, and authenticity, it motivates listeners to choose the right way even in the face of difficulties instead of looking for a perfect image or pleasing others.</p>
                    </div>
                    <hr className="mt-4" />
                    <div className="my-4 p-4">
                        <h2 className="text-center text-xl font-bold mb-4 uppercase decoration-wavy underline">About The Author</h2>
                        <Author />
                    </div>

                </div>
            </div>
            {/* sidebar */}
            <Sidebar />

        </div>
    )
}

export default MainContent

