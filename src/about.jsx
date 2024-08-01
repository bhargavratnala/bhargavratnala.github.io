import Me from './asserts/me.jpg'
import Smile from './asserts/smile.svg'
import aboutIcon from './asserts/about_icon.svg'
import { about } from './data';

function About(){
    return(
        <div className='w-full h-full flex flex-col items-center justify-center md:flex-row-reverse relative' id='about'>
            <img src={Me} alt="Me" className='h-1/2 object-contain rounded-xl md:border-4 md:border-yellow-300'/>
            <h2 className='flex items-center h-10 text-xl my-5 md:items-start md:h-full md:py-7 md:my-0 md:text-2xl lg:text-3xl xl:4xl'>About Me <img src={Smile} alt='smile'  className='mx-2'/></h2>
            <div className='font-bold mx-5 md:w-1/3 md:text-xl lg:text-2xl xl:text-3xl'>
                {about.content}
            </div>
            <img src={aboutIcon} alt='about' className='hidden absolute bottom-3 left-3 md:block'/>
        </div>
    )
}

export default About;