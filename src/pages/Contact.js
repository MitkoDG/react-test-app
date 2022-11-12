import React from 'react'
import classes from './Contact.module.css'

const Contact = () => {
  const [formStatus, setFormStatus] = React.useState('Send')
  const onSubmit = (e) => {
    e.preventDefault()
    setFormStatus('Submitting...')
    const { name, email, message } = e.target.elements
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    }
    console.log(conFom)
  }
  return (
    <div className={classes.form_container}>
      <h2>Contact Us</h2>
      <form onSubmit={onSubmit}>
        <div className={classes.form_control}>
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input type="text" id="name" required />
        </div>
        <div className={classes.form_control}>
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input type="email" id="email" required />
        </div>
        <div className={classes.form_control}>
          <label htmlFor="message">
            Message
          </label>
          <textarea id="message" required />
        </div>
        <button type="submit">
          {formStatus}
        </button>
      </form>
    </div>
  )
}

export default Contact