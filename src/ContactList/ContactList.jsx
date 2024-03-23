
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

export const ContactList = ({contacts, onDeleteContact}) => {
  return (
    <div>
      <ul>
        {Array.isArray(contacts) && contacts.map((contact) => {
          return  <Contact contact={contact} key={contact.id} onDeleteContact={onDeleteContact}/>
        })}
      </ul>



       
    </div>
  )
}
