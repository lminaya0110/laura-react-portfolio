import React from 'react'
import './contact.css'
import { useRef } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_znow90m', 'template_uhq0zmg', form.current, 'VsRs5rku8ZQXCDG4z')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      })

      e.target.reset()
  }


  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact_container'>
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required></input>
          <input type='email' name='email' placeholder='Your Email' required></input>

          <textarea name="message" rows="10" placeholder='Your Message' required></textarea>

          <button type='submit' className='btn btn-primary'>Send Message</button>


        </form>

        
      </div>



    </section>
  )
}

export default Contact