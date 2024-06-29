import { useEffect, useState, useRef } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    
    return () => clearTimeout(timeoutId)
  }, [])

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, form.current, import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
      .then(
        () => {
          toast.success('Message successfully sent!');
          form.current.reset();
        },
        () => {
          toast.error('Failed to send the message, please try again');
          console.error('Email send error:', error);
        }
      );
  };

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['G', 'e', 't', ' ', 'i', 'n', ' ', 't', 'o', 'u', 'c', 'h']}
              idx={15}
            />
          </h1>
          <p>
          For any professional or business inquiries, please feel free to reach out to me through the contact form on this page. I am always open to discussing potential collaborations, project opportunities, or any other business-related matters.
          </p>
          <p>
          Should you require further information, such as a detailed CV or academic transcript, these documents can be provided upon request via email. Please do not hesitate to reach out with any specific requirements or questions you may have.
          </p>
         

        </div>
        
       

        <div className="contact-form">
          <form ref={form} onSubmit={sendEmail}>
            <h2>Contact Me</h2>
            <ul>
              <div>
              <li className="half">
                <input placeholder="Name" type="text" name="name" required />
              </li>
              <li className="half">
                <input
                  placeholder="Email"
                  type="email"
                  name="email"
                  required
                />
              </li>

              </div>
              
              <li>
                <input
                  placeholder="Subject"
                  type="text"
                  name="subject"
                  required
                />
              </li>
              <li>
                <textarea
                  placeholder="Message"
                  name="message"
                  required
                ></textarea>
              </li>
              <li>
                <input type="submit" className="flat-button" value="SEND" />
              </li>
            </ul>
          </form>
        </div>
      </div>

      <Loader type="pacman" />
      <ToastContainer />
    </>
  );
};

export default Contact;
