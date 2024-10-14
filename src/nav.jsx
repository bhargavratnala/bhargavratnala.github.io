import icon from './asserts/icon_rb.png'
import { useState, useEffect } from 'react';

function Nav(){

    const [navOpen, setNavOpen] = useState(false);

    function scrollTo(id){
        document.getElementById(id).scrollIntoView({behavior: 'smooth'});
    }

    useEffect(() => {
        document.getElementById('scroll-element').addEventListener('scroll', () => {
            let scrollPosition = document.getElementById('scroll-element').scrollTop;
            let home = document.getElementById('home').offsetTop - 100;
            let about = document.getElementById('about').offsetTop - 100;
            let skills = document.getElementById('skills&projects').offsetTop - 100;
            let experience = document.getElementById('experience').offsetTop - 100;
            let education = document.getElementById('education').offsetTop - 100;
            let contact = document.getElementById('contact').offsetTop - 100;
            function setActiveNav(index){
                document.querySelectorAll('#nav li').forEach((el, ind) => ind == index ? el.classList.add('active') : el.classList.remove('active'));
                document.querySelectorAll('#mobile-nav li').forEach((el, ind) => ind == index ? el.classList.add('active') : el.classList.remove('active'));
            }
            if(scrollPosition >= home && scrollPosition < about){
                setActiveNav(0);
            }
            else if(scrollPosition >= about && scrollPosition < skills){
                setActiveNav(1);
            }
            else if(scrollPosition >= skills && scrollPosition < experience){
                setActiveNav(2);
            }
            else if(scrollPosition >= experience && scrollPosition < education){
                setActiveNav(3);
            }
            else if(scrollPosition >= education && scrollPosition < contact){
                setActiveNav(4);
            }
            else if(scrollPosition >= contact){
                setActiveNav(5);
            }
        })
    }, [])

    return(
        <nav className="flex w-full h-[60px] justify-between relative z-50">
            <div className='flex h-full items-center justify-center mx-3'>
                <img src={icon} alt="My Portfolio" className='w-[50px] h-[50px] rounded-full object-top border-blue-500 border-2'/>
                <h1 className='m-3 text-xl md:text-base lg:text-lg xl:text-xl'>Bhargav Ratnala</h1>
            </div>
            <ul className='hidden h-full items-center mx-2 md:flex sm:text-sm md:text-base lg:text-lg xl:text-xl' id="nav">
                <li className='p-3 cursor-pointer h-[60px] flex items-center justify-center hover:text-blue-600 hover:bg-blue-200 active' onClick={() => scrollTo('home')}>Home</li>
                <li className='p-3 cursor-pointer h-[60px] flex items-center justify-center hover:text-blue-600 hover:bg-blue-200' onClick={() => scrollTo('about')}>About</li>
                <li className='p-3 cursor-pointer h-[60px] flex items-center justify-center hover:text-blue-600 hover:bg-blue-200' onClick={() => scrollTo('skills&projects')}>Skills & Projects</li>
                <li className='p-3 cursor-pointer h-[60px] flex items-center justify-center hover:text-blue-600 hover:bg-blue-200' onClick={() => scrollTo('experience')}>Experience</li>
                <li className='p-3 cursor-pointer h-[60px] flex items-center justify-center hover:text-blue-600 hover:bg-blue-200' onClick={() => scrollTo('education')}>Education</li>
                <li className='p-3 cursor-pointer h-[60px] flex items-center justify-center hover:text-blue-600 hover:bg-blue-200' onClick={() => scrollTo('contact')}>Contact</li>
            </ul>
            <div className='bg-white md:hidden'>
                <div className={ navOpen ? 'absolute w-[40px] h-[40px] top-[10px] right-[10px] cursor-pointer rounded-full navButton close' : 'absolute w-[40px] h-[40px] top-[10px] right-[10px] cursor-pointer rounded-full navButton'} onClick={() => setNavOpen(~navOpen)}>
                    <span className='w-[20px] h-[2px] rounded absolute top-[12px] right-[10px] bg-black transition-all'></span>
                    <span className='w-[20px] h-[2px] rounded absolute top-[19px] right-[10px] bg-black transition-all'></span>
                    <span className='w-[20px] h-[2px] rounded absolute top-[26px] right-[10px] bg-black transition-all'></span>
                </div>
                <ul className={navOpen ? 'bg-white flex flex-col w-full absolute top-[60px] left-0 items-center shadow-md rounded-bl-md roundeed-br-md transition-all' : 'bg-white flex flex-col w-full absolute top-[60px] left-0 items-center shadow-md rounded-bl-md roundeed-br-md transition-all closeNav'} id='mobile-nav'>
                    <li className='cursor-pointer w-full flex h-[40px] justify-center items-center hover:bg-blue-100 hover:text-blue-600 active' onClick={() => window.location.href='#home'}>Home</li>
                    <li className='cursor-pointer w-full flex h-[40px] justify-center items-center hover:bg-blue-100 hover:text-blue-600' onClick={() => window.location.href='#about'}>About</li>
                    <li className='cursor-pointer w-full flex h-[40px] justify-center items-center hover:bg-blue-100 hover:text-blue-600' onClick={() => window.location.href='#skills&projects'}>Skills & Projects</li>
                    <li className='cursor-pointer w-full flex h-[40px] justify-center items-center hover:bg-blue-100 hover:text-blue-600' onClick={() => window.location.href='#experience'}>Experience</li>
                    <li className='cursor-pointer w-full flex h-[40px] justify-center items-center hover:bg-blue-100 hover:text-blue-600' onClick={() => window.location.href='#education'}>Education</li>
                    <li className='cursor-pointer w-full flex h-[40px] justify-center items-center hover:bg-blue-100 hover:text-blue-600' onClick={() => window.location.href='#contact'}>Contact</li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;