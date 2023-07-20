import { Button } from 'components/ContactForm/ContactForm.styled'
import PropTypes from 'prop-types'
import { List } from './ContactList.styled'

export const ContactList = ({contacts, onDeleteBtn}) => {
  
  return (
    <List>
      {contacts.map((contact) => {
        return (
          <li key={contact.id}>
            <div>
            <p>☎ {contact.name}:</p>
            <p>{contact.number}</p>
            </div>
            <Button onClick={() => onDeleteBtn(contact.id)}>Delete</Button>
          </li>
        )

      })}
    </List>
  )
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDeleteBtn: PropTypes.func.isRequired,
}