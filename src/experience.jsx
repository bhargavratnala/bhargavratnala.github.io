import ExperienceImage from './asserts/experience.svg'
import { experience } from './data';

const experiences = experience.map((exp, index) => {
    return (
        <div key={index} className='w-[300px] m-3 basis-[300px] border-2 border-black/40 rounded-lg shadow-sm cursor-pointer hover:shadow-lg'>
            <h2 className='w-full mt-3 flex justify-center items-center text-sm sm:text-base md:text-base lg:text-lg'>{exp.company}</h2>
            <div className='flex w-full h-full'>
                <div>
                    <div className='m-3 w-full'>
                        <p className='text-xs sm:text-sm md:text-base'>Role : {exp.role}</p>
                        <p className='text-xs sm:text-sm md:text-base'>Location : {exp.location}</p>
                        <p className='text-xs sm:text-sm md:text-base'>Duration : {exp.duration}</p>
                    </div>
                </div>
                <img src={exp.image} alt='experience' className='w-[30%] h-full object-contain object-center m-3'/>
            </div>
            {exp.link &&
                <a href={exp.link} target='_blank' rel='noreferrer' className='w-full flex justify-center items-center py-2 bg-blue-400 text-white hover:bg-blue-500 transition-all'>More Details</a>
            }
        </div>
    )
});

function Experience(){
    return(
        <div className="w-full my-8 pt-5" id='experience'>
            <h1 className='flex justify-center items-center w-full h-10 my-5 text-xl font-bold md:text-base lg:text-xl xl:text-2xl'>Experience <img src={ExperienceImage} alt='experience' className='w-14 h-14 mx-5 md:w-24 md:h-24' /></h1>
            <div className='w-full flex justify-center items-center flex-wrap'>
                {experiences}
            </div>
        </div>
    )
}

export default Experience;