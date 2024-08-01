import SkillsProjects from './asserts/skills_projects.svg'
import { IoMdCloseCircleOutline } from "react-icons/io";
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Carousel from './carousel.jsx';
import { projects_skills } from './data';

function SkillSProjects(){

    const projects_list = projects_skills.projects_list;

    const [projectOpen, setProjectOpen] = useState(false);
    const [projectData, setProjectData] = useState(projects_skills.projects[projects_list[0]]);
    const navigate = useNavigate();
    const { projectName } = useParams();

    useEffect(() => {
        if(projectName){
            setProjectOpen(true);
            setProjectData(projects_skills.projects[projectName]);
        }
    });

    const projects = projects_list.map((projectName, index) => {
        let project = projects_skills.projects[projectName];
        return (
            <div className='group flex flex-col items-center w-56 p-2 m-5 mx-8 basis-72 rounded-md border-neutral-5000 border-2 shadow-md cursor-pointer overflow-hidden hover:shadow-2xl' key={index}>
                <img src={project.thumbnail} alt='project image' className='h-36 w-56 object-cover object-center rounded-md transition-all group-hover:scale-105' />
                <p className='w-full text-center my-1 mt-3'>{project.name}</p>
                <p className='w-full text-center my-1'>{project.short_description}</p>
                <div className='flex w-full'>
                    <button className='w-full text-blue-400 border border-blue-400 py-1 rounded-md m-3 my-1' onClick={() => {
                        setProjectOpen(true);
                        setProjectData(project);
                        navigate(`/${projectName}`);
                        
                    }}>Details</button>
                    <button className='w-full bg-blue-400 text-white py-1 rounded-md m-3 my-1' onClick={() => {
                        window.open(project.link, '_blank');
                    }}>Live</button>
                </div>
            </div>
        )
    });

    const skills = projects_skills.skills.map((skill, index) => {
        return (
            <div className='group h-20 p-3 mx-10 my-3 flex justify-center items-center border-neutral-5000 border-2 shadow-lg cursor-pointer rounded-md hover:shadow-2xl' key={index}>
                <div className='w-10 h-10 ml-2 flex justify-center items-center flex-col'>
                    <img src={skill.image} alt='skill' className='w-16 h-16 object-cover object-center'/>
                </div>
                <div className='mx-3 w-36 transition-all'>
                    <p className='group-hover:text-blue-400'>{skill.name}</p>
                    <p className='text-xs'>{skill.description}</p>
                </div>
            </div>
        )
    });

    return (
        <div className="min-h-full w-full pt-5" id='skills&projects'>
            <h1 className='flex justify-center items-center w-full h-10 my-5 text-xl font-bold md:text-base lg:text-xl xl:text-2xl'>Skills and Projects <img src={SkillsProjects} alt='skills and projects' className='w-14 h-14 mx-5 md:w-24 md:h-24' /></h1>
            <div className='mt-10'>
                <h2 className='text-xl opacity-50 m-5 text-center'>Projets</h2>
                <div className='flex justify-center items-center flex-wrap py-5 mx-5'>
                    {projects}
                </div>
            </div>
            <div>
                <h2 className='text-xl opacity-50 m-5 text-center'>Skills</h2>
                <div className='flex justify-center items-center flex-wrap py-5 mx-5'>
                    {skills}
                </div>
            </div>
            <div className={ projectOpen ? 'w-full h-full absolute top-0 left-0 z-50 bg-black/50 transition-all ease-in-out duration-500' : 'w-full h-full absolute top-0 left-0 z-50 bg-black/50 transition-all ease-in-out duration-500 opacity-0 scale-0' }>
                <div className='w-full projectCard absolute top-[60px] left-0 box-border bg-white rounded-lg shadow-lg md:w-4/5 md:left-[10%] md:h-4/5 md:top-[10%]'>
                    <div className='w-full h-[60px] flex justify-between items-center px-5 border-b-2'>
                        <h2 className='text-xl lg:2xl xl:3xl'>
                            {projectData.name}
                        </h2>
                        <button className='hover:text-red-500 w-8 h-8' onClick={() => {
                            setProjectOpen(false);
                            navigate('/');
                        }}>
                            <IoMdCloseCircleOutline className='w-full h-full'/>
                        </button>
                    </div>
                    <div className='w-full projectCard overflow-y-scroll scrollbar px-5 py-5 flex flex-col lg:flex-row-reverse'>
                        <div className='w-full h-3/4 md:h-full lg:w-1/2 lg:h-2/3'>
                            <Carousel images={projectData.images}/>
                            <div className='w-full m-5'>
                                <div className='flex w-full mt-8'>
                                    { projectData.demo && <p className='text-sm bg-brown text-white px-5 rounded-md mx-3 cursor-pointer py-2' onClick={() => {
                                        window.open(projectData.demo, '_blank');
                                    }}>Watch Demo</p> }
                                    { projectData.source && <p className='text-sm bg-brown text-white px-5 rounded-md mx-3 cursor-pointer py-2' onClick={() => {
                                        window.open(projectData.source, '_blank');
                                    }
                                    }>Source Code</p> }
                                    { projectData.link && <p className='text-sm bg-brown text-white px-5 rounded-md mx-3 cursor-pointer py-2' onClick={() => {
                                        window.open(projectData.link, '_blank');
                                    }}>Deployment</p> }
                                </div>
                                <p className='text-lg mt-5 text-black/50'>tags</p>
                                <div className='flex w-full flex-wrap'>
                                    { projectData.techStack.map((tag, index) => {
                                        return (
                                            <p className='text-sm bg-blue-300 text-white px-5 py-2 rounded-md mx-3 my-2' key={index}>{tag}</p>
                                        )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                        <div className='w-full lg:w-1/2'>
                            <h2 className='text-black/50'>Description</h2>
                            <div className='p-5' dangerouslySetInnerHTML={{__html : projectData.long_description }}>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SkillSProjects;