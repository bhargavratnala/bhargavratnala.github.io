import ContactImage from './asserts/contact.svg'
import MeRB from './asserts/icon_rb.png'
import {contact} from './data'

function Contact(){

    const socials = contact.socials.map((social, index) => {
        return (
            <a key={index} href={social.link} target='_blank' rel='noreferrer'>
                <img src={social.icon} alt={social.name} className='w-6 h-6 object-contain'/>
            </a>
        );
    });

    return (
        <div className="min-h-full w-full pt-5 pb-10" id='contact'>
            <h1 className='flex justify-center items-center w-full h-10 my-5 text-xl font-bold md:text-base lg:text-xl xl:text-2xl'>Contact <img src={ContactImage} alt='contact' className='w-14 h-14 mx-5 md:w-24 md:h-24' /></h1>
            <div className='w-full h-full flex justify-center items-center'>
                <div className='group w-[95%] h-full border-black/30 border-2 rounded-2xl overflow-hidden md:w-1/2 lg:w-1/3'>
                    <div className='w-full h-52 flex justify-center contactImage'>
                        <img src={MeRB} alt='contact' className='h-[90%] m-3 p-3 object-contain bg-black/40 rounded-xl group-hover:scale-105 transition-all'/>
                    </div>
                    <div className='flex justify-center items-center flex-col mt-5'>
                        <h2 className='text-xl font-bold'>Bhargav Ratnala</h2>
                        <div className='m-3 w-[90%] md:w-[75%]' dangerouslySetInnerHTML={{__html : contact.description}}>
                        </div>
                        <div className='w-[90%] my-3 md:w-[75%] flex space-x-5'>
                            {socials}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;