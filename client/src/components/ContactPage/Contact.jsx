import './Contact.scss';

function Contact() {

  return (
    <div className='contact'>
      <section className='contact-sec'>
        <h1 className='contact-sec__title'>Contact Us</h1>
        <form className='contact-form' id='contact-form' method='post'>
          <label for='first-name' className='contact-form__label contact-form__label--required'>First Name</label>
          <input type='text' name='first-name' id='first-name' required/>

          <label for='last-name' className='contact-form__label contact-form__label--required'>Last Name</label>
          <input type='text' name='last-name' id='last-name' required/>

          <label for='email' className='contact-form__label contact-form__label--required'>Email</label>
          <input type='email' name='email' id='email'
            placeholder='example@email.com'
            pattern='[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$'
            title='Please input a valid email address. Example: name@email.com'
            required />

          <label for='comment-box' className='contact-form__label contact-form__label--required'>Comments</label>
          <textarea name='comments' maxlength='500' placeholder='Enter your comment here (max 500 characters)' id='comment-box'></textarea>
          <p id='character-output'></p>

          <p className='error-message'></p>
          <button className='submit-btn contact-form__submit-btn' type='submit' id='submit-btn'>Submit</button>
        </form>
      </section>
    </div>
  )
}

export default Contact;