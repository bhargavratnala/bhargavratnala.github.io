import ContactImage from './asserts/contact.svg'
import MeRB from './asserts/icon_rb.png'
import {contact} from './data'

function Contact(){

    const mail_url = "https://fastapi-mailer-a2kq.onrender.com/send_mail"

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());

        const response = await fetch(mail_url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            alert('Email sent successfully!');
            e.target.reset();
        } else {
            alert('Error sending email.');
        }
    };

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
                <form className="group w-[95%] h-full border-black/30 border-2 rounded-2xl overflow-hidden md:w-1/2 lg:w-1/3 ml-4 p-6 flex flex-col justify-center items-center bg-white"
                    onSubmit={handleSubmit}>
                    <label className="w-full mb-3">
                      <span className="block font-semibold mb-1">Email</span>
                      <input
                        type="email"
                        name="email"
                        required
                        className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="your@email.com"
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
                      />
                    </label>
                    <button
                      type="submit"
                      className="bg-blue-600 text-white px-6 py-2 rounded font-bold hover:bg-blue-700 transition"
                    >
                      Send
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Contact;