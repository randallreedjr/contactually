function sortByName(a,b) {
  if (a.last_name === b.last_name) {
    return (a.first_name > b.first_name) ? 1 : ((b.first_name > a.first_name) ? -1 : 0);
  }
  return (a.last_name > b.last_name) ? 1 : -1;
}

class ContactList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: []
    };
  }

  componentDidMount() {
    $.ajax({
      url: '/contacts.json',
      type: 'GET',
      success: (response) => {
        this.setState({ contacts: response.sort(sortByName) });
      }
    });
  }

  render() {
    var contacts = this.state.contacts.map((contact) => {
      return (
        <Contact
          key={contact.id}
          firstName={contact.first_name}
          lastName={contact.last_name}
          emailAddress={contact.email_address}
          phoneNumber={contact.phone_number}
          extension={contact.extension}
          companyName={contact.company_name}
          showUrl={contact.show_url}
          editUrl={contact.edit_url}
        />
      );
    });

    return (
      <div className="contact-list">
        <h1>Listing Contacts</h1>

        <table>
          <thead>
            <tr>
              <th>First name</th>
              <th>Last name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Extension</th>
              <th>Company</th>
              <th colSpan="2"></th>
            </tr>
          </thead>

          <tbody>
            {contacts}
          </tbody>
        </table>
      </div>
    )
  }
}
