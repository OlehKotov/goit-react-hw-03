import css from "./ContactForm.module.css";

const ContactForm = ({onAddUser}) => {

const handleSubmit = (event) => {
       event.preventDefault()
       const name = event.currentTarget.elements.name.value
       const number = event.currentTarget.elements.number.value
       const formData = {
        name,
        number
       }
       onAddUser(formData);
       event.currentTarget.reset();
}

  return (
    <form onSubmit={handleSubmit}>
        <label>
            <span>Name</span><br />
                <input type="text" name="name" required></input>
        </label>
        <br />
        <label>
            <span>Number</span><br />
                <input type="number" name="number" required></input>
        </label>
        <br />
        <button type="submit">Add contact</button>
    </form>
  )
}

export default ContactForm