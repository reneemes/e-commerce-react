import { useState } from 'react';
import './Contact.scss';

function Contact() {
  const [charCount, setCharCount] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [formName, setFormName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setModalOpen(true);

    e.target.reset();
    setCharCount(0);
  }

  const closeModal = () => {
    setModalOpen(false);
  }

  return (
    <div className='contact'>
      <div className='contact-intro'>
        <p className='contact-intro__txt'>
          Questions about an order? Interested in collaborating?
          Or just want to share a strong opinion about poppy seeds?
        </p>
        <p className='contact-intro__txt'>
          Fill out the form below and we’ll get back to you within 1–2 business days.
        </p>
      </div>

      <section className='contact-sec'>
        <h1 className='contact-sec__title'>Contact Us</h1>
        <form className='contact-form' id='contact-form' onSubmit={handleSubmit}>
          <label htmlFor='name' className='contact-form__label contact-form__label--required'>Name</label>
          <input 
            type='text' 
            name='name' 
            id='name' 
            placeholder='Full Name' 
            onChange={(e) => setFormName(e.target.value)}
            required
          />

          <label htmlFor='reason' className='contact-form__label contact-form__label--required'>Reason</label>
          <select name='reason' id='reason'>
            <option value={''}>Select</option>
            <option value={'order-questions'}>Order Questions</option>
            <option value={'wholesale'}>Wholesale or Partnerships</option>
            <option value={'media'}>Press or Media</option>
            <option value={'feedback'}>Feedback</option>
            <option value={'other'}>Other</option>
          </select>

          <label htmlFor='email' className='contact-form__label contact-form__label--required'>Email</label>
          <input type='email' name='email' id='email'
            placeholder='example@email.com'
            pattern='[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$'
            title='Please input a valid email address. Example: name@email.com'
            required />

          <label htmlFor='comment-box' className='contact-form__label contact-form__label--required'>Comments</label>
          <textarea 
            name='comments' 
            maxLength='500' 
            placeholder='Tell us what’s on your mind. (max 500 characters)' 
            id='comment-box'
            onChange={(e) => setCharCount(e.target.value.length)}
            required
          />
          <p id='character-output'>{charCount}/500</p>

          <button 
            className='submit-btn contact-form__submit-btn' 
            type='submit' 
            id='submit-btn'
          >Submit</button>
        </form>
      </section>
      <div className='response-msg'>
        <p className='response-msg__txt'>We aim to respond to all messages within 48 hours, Monday–Friday.</p>
        <p className='response-msg__txt'>No bots. No auto-responder. Just real humans who care deeply about bagels.</p>
      </div>

      {/* Modal */}
      <div className={`modal ${!modalOpen ? 'hidden' : ''}`}>
        <div className='modal__overlay' onClick={closeModal}>
          <div className='modal__content'>
            <button className="modal__close-btn" aria-label="Close" onClick={closeModal}>&times;</button>
            <p>Thank you {formName} for your message!</p>
            <p>We aim to respond to all messages within 48 hours, Monday–Friday.</p>
            <p>No bots. No auto-responder. Just real humans who care deeply about bagels.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;