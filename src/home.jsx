import landingImage from './asserts/landingImage.svg'
import star from './asserts/star.svg'
import wavingBot from './asserts/robo_wave.gif'
import { FaGithub, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import ReactTypingEffect from 'react-typing-effect'
import { home } from './data';

function Home(){
    return(
        <div className='flex flex-col items-center justify-around h-full md:flex-row relative' id='home'>
            <div className='my-5'>
                <h1 className='text-xl font-medium md:text-2xl lg:text-3xl xl:text-4xl'>Hello 👋, I'm <span className='font-bold text-indigo-500'>{home.name}</span></h1>
                <h2 className='text-base font-medium my-5 md:text-lg lg:text-xl xl:text-2xl'>
                    I'm a <ReactTypingEffect 
                            text={home.roles}
                            speed={100}
                            eraseSpeed={50}
                            eraseDelay={2000}
                            />
                </h2>
                <div className='flex h-[50px] items-center'>
                    <FaGithub className='text-3xl'/>
                    <FaLinkedinIn className='text-3xl ml-5 hover:fill-blue-400'/>
                    <FaYoutube className='text-3xl ml-5 hover:fill-red-600'/>
                </div>
            </div>
            <div className='w-4/5 sm:w-2/3 md:w-2/5'>
                <img src={landingImage} alt="Landing Image" className='w-full h-full object-contain'/>
            </div>
            <div className='hidden absolute w-full h-full -z-10 md:flex'>
                <img src={star} alt="Star" className='w-10 h-10 star1'/>
                <img src={star} alt="Star" className='w-10 h-10 star2'/>
                <img src={star} alt="Star" className='w-10 h-10 star3'/>
                <img src={wavingBot} alt="Waving Bot" className='wavingBot'/>
            </div>
        </div>
    )
}

export default Home;