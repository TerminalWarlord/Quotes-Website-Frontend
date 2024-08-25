import { faQuoteRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const QuoteBox = ({ author, quote }) => {
    return (
        <div className="relative mb-6 mt-10">
            <div className="border-[0.4rem] border-current rounded-lg min-h-[12rem]" style={{ clipPath: 'polygon(11% 0, 11% 15%, 0 15%, 0 100%, 89% 100%, 89% 85%, 100% 85%, 100% 100%, 100% 0%)' }}>
                <h4 className='px-4 md:px-10 pt-10 md:pt-16 lg:pt-20 pb-2 md:pb-6 lg:pb-8 text-sm md:text-md lg:text-lg' style={{ fontFamily: '"Poppins", sans-serif', fontStyle: 'italic' }}>{quote}</h4>
                <h2 className='px-10 pb-7 md:pb-15 text-right' style={{ fontFamily: '"DM Serif Text", serif' }}> - {author}</h2>
            </div>
            <div className="absolute top-[calc(0%-0.5rem)] md:top-[calc(0%-0.6rem)] left-[0]">
                <FontAwesomeIcon icon={faQuoteRight} className="text-4xl md:text-5xl" />
            </div>
            {/* <div className="absolute bottom-[calc(0%-0.5rem)] md:bottom-[calc(0%-0.6rem)] right-3">
                <FontAwesomeIcon icon={faQuoteLeft} className="text-4xl md:text-5xl" />
            </div> */}
            <div className="absolute bottom-[calc(0%-1.5rem)] md:bottom-[calc(0%-1.6rem)] right-[0]">
                <FontAwesomeIcon icon={faQuoteRight} className="text-4xl md:text-5xl" />
            </div>
        </div>
    )
}

export default QuoteBox
// clip-path: polygon(0 12%, 0% 100%, 80% 100%, 100% 88%, 100% 0, 20% 0);
// polygon(0 12%, 0% 100%, 80% 100%, 100% 88%, 100% 0, 20% 0)
// polygon(20% 8%, 0 8%, 0 100%, 80% 100%, 80% 92%, 100% 92%, 100% 0, 20% 0)
// polygon(13% 0, 13% 7%, 0 7%, 0 100%, 32% 100%, 69% 100%, 87% 100%, 87% 93%, 100% 93%, 100% 0%)


// polygon(13% 0, 13% 7%, 0 7%, 0 100%, 32% 100%, 69% 100%, 87% 100%, 87% 93%, 100% 93%, 100% 0%)
// polygon(16% 0, 16% 22%, 0 22%, 0 100%, 32% 100%, 84% 100%, 84% 76%, 100% 76%, 100% 100%, 100% 0%)