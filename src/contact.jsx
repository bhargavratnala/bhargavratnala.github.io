import ContactImage from './asserts/contact.svg'
import MeRB from './asserts/icon_rb.png'
import {contact} from './data'
import { toast } from 'react-toastify'
import {useState} from 'react'

function Contact(){

    const mail_url = "https://fastapi-mailer-a2kq.onrender.com/send_mail"

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());

        try{
            const response = await fetch(mail_url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                toast.success('Email sent successfully!');
                e.target.reset();
            } else {
                toast.error('Error sending email.');
            }
        } catch (error) {
            console.error('Error sending email:', error);
            toast.error('Error sending email.');
        }
    };

    const socials = contact.socials.map((social, index) => {
        return (
            <a key={index} href={social.link} target='_blank' rel='noreferrer'>
                <img src={social.icon} alt={social.name} className='w-6 h-6 object-contain'/>
            </a>
        );
    });

    const [loading, setLoading] = useState(false);

    return (
        <div className="min-h-full w-full pt-5 pb-10:" id='contact'>
            <h1 className='flex justify-center items-center w-full h-10 my-5 text-xl font-bold md:text-base lg:text-xl xl:text-2xl'>Contact <img src={ContactImage} alt='contact' className='w-14 h-14 mx-5 md:w-24 md:h-24' /></h1>
            <div className='w-full h-full flex flex-wrap justify-center items-center'>
                <div className='group h-full border-black/30 border-2 rounded-2xl overflow-hidden md:w-1/2 lg:w-1/3 m-2'>
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
                <form className="group w-full h-full border-black/30 border-2 rounded-2xl overflow-hidden md:w-1/2 lg:w-1/3 p-6 flex flex-col justify-center items-center m-2"
                    onSubmit={async (e) => {
                        setLoading(true);
                        await handleSubmit(e);
                        setLoading(false);
                    }}>
                    <label className="w-full mb-3">
                      <span className="block font-semibold mb-1">Mail</span>
                      <input
                        type="mail"
                        name="mail"
                        required
                        className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="your@email.com"
                        disabled={loading}
                      />
                    </label>
                    <label className="w-full mb-3">
                      <span className="block font-semibold mb-1">Subject</span>
                      <input
                        type="text"
                        name="subject"
                        required
                        className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="Subject"
                        disabled={loading}
                      />
                    </label>
                    <label className="w-full mb-4">
                      <span className="block font-semibold mb-1">Message</span>
                      <textarea
                        name="body"
                        required
                        rows={5}
                        className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
                        placeholder="Type your message here..."
                        disabled={loading}
                      />
                    </label>
                    <button
                      type="submit"
                      className="bg-blue-600 text-white px-6 py-2 rounded font-bold hover:bg-blue-700 transition flex items-center justify-center"
                      disabled={loading}
                    >
                      {loading ? (
                        <svg className="animate-spin h-5 w-5 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                        </svg>
                      ) : null}
                      {loading ? "Sending..." : "Send"}
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Contact;