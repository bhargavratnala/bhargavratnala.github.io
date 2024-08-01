import EducationImage from './asserts/education.svg'
import { FaLocationDot } from "react-icons/fa6";
import { SlBadge } from "react-icons/sl";
import { FaGraduationCap } from "react-icons/fa6";
import { education } from './data';

function Education(){

    const educations = education.map((edu, index) => {
        return (
            <div key={index} className="educationCard flex justify-center items-center flex-col py-3 px-5 mx-5 my-3 border-[1px] border-black/40 rounded-lg" style={{'--content':edu.duration}}>
                <div className='flex justify-between w-full mx-5 items-center'>
                    <div>
                        <h2 className='font-bold'>{edu.title}</h2>
                        <p className='text-sm'>{edu.name}</p>
                    </div>
                    <img src={edu.image} alt='GMRIT' className='object-contain w-[30%] max-h-10'/>
                </div>
                <div className='flex w-full mx-5 my-1 justify-between items-center'>
                    <p className='flex items-center text-xs sm:text-sm md:text-base lg:text-lg'><FaLocationDot className='text-red-500 mr-1' />{edu.location}</p>
                    <p className='flex items-center text-xs sm:text-sm md:text-base lg:text-lg'>{edu.degree}</p>
                </div>
                <div className='flex w-full mx-5 my-1 justify-between items-center'>
                    {edu.board && <p className='flex items-center text-xs sm:text-sm md:text-base lg:text-lg'><FaGraduationCap className='text-blue-500 mr-1'/>{edu.board}</p>}
                    <p className='flex items-center text-xs sm:text-sm md:text-base lg:text-lg'><SlBadge className='text-yellow-300 mr-1'/>{edu.grade}</p>
                </div>
                <div className='w-full mx-5'>
                    <p className='text-xs sm:text-sm md:text-base lg:text-lg'>{edu.description}</p>
                </div>
                <div className='w-full mx-5 mt-3'>
                    <button className='border-2 border-black/40 text-black/40 rounded-md px-3 py-1 shadow-lg hover:shadow-md hover:text-black/70 transition-all' onClick={() => {
                        window.open(edu.link, '_blank');
                    }}>More Details</button>
                </div>
            </div>
        )
    });

    return (
        <div className="min-h-full w-full pt-5" id='education'>
            <h1 className='flex justify-center items-center w-full h-10 my-5 text-xl font-bold md:text-base lg:text-xl xl:text-2xl'>Education <img src={EducationImage} alt='skills and projects' className='w-14 h-14 mx-5 md:w-24 md:h-24' /></h1>
            <div className='w-full border-l-4 m-5 border-blue-500 md:w-1/2 md:ml-[50%]'>
                {educations}
                <div className="educationCard text-lg mt-8 text-blue-500 font-bold after:content-['DOB']">
                    8<sup>th</sup>, May 2004
                </div>
            </div>
        </div>
    );
}

export default Education;