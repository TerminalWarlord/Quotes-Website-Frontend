import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default function Card({ quote, author, slug }) {
    return <div className="bg-base-100 w-100 p-2 rounded-lg overflow-visible relative text-end" style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)' }}>
        <Link to={`quote/${slug}`}>
            <div className='px-2 rounded-lg pt-2'>
                <img src="https://i0.wp.com/quotes.espacehub.org/wp-content/uploads/2024/08/quote_with_bg-2.png?w=800&ssl=1" alt="" className='rounded-lg ' />
            </div>
            <div className='absolute top-[-15px] left-[2px]'>
                <FontAwesomeIcon icon={faQuoteLeft} style={{ fontSize: '2rem' }} />
            </div>
            <h4 className='px-2 py-2 text-sm' style={{ fontFamily: '"Poppins", sans-serif', fontStyle: 'italic' }}>{quote}</h4>
            <h2 className='px-2 pb-4' style={{ fontFamily: '"DM Serif Text", serif' }}> - {author}</h2>
            <div className='absolute bottom-[-15px] right-[2px]'>
                <FontAwesomeIcon icon={faQuoteRight} style={{ fontSize: '2rem' }} />
            </div>
        </Link>
    </div >
}

// style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}