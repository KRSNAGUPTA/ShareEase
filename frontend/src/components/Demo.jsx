/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
// import videoFile from '../assets/sketch.webm'

function Demo({ children }) {
    return (
        <div className="flex items-center px-48 gap-16">
            {children}
        </div>
    )
}

export function Intro({ children, to, button }) {
    return (
        <div className='flex-1 flex flex-col justify-center items-center gap-6'>
            <p className="text-6xl text-center leading-tight">
                {children}
            </p>
            <Link to={to}>
                <button className='bg-[var(--light)] text-3xl text-dark rounded-xl px-8 py-2'>
                    {button} Now
                </button>
            </Link>
        </div>
    )
}

export function Video() {
    return (
        <video width="100%" height="auto" className='flex-1 border border-white bg-[var(--light)] shadow-custom rounded-xl' autoPlay loop muted>
            {/* <source src={videoFile} type="video/webm" /> */}
        </video>
    )
}

export default Demo;