function sortByName(a,b) {
  if (a.last_name === b.last_name) {
    return (a.first_name > b.first_name) ? 1 : ((b.first_name > a.first_name) ? -1 : 0);
  }
  return (a.last_name > b.last_name) ? 1 : -1;
}

function sortByEmail(a,b) {
  return (a.email_address > b.email_address) ? 1 : ((b.email_address > a.email_address) ? -1 : 0);
}

class ContactList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      sortField: '',
      sortDirection: ''
    };
    this.delete = this.delete.bind(this);
    this.handleSort = this.handleSort.bind(this);
  }

  componentDidMount() {
    $.ajax({
      url: '/contacts.json',
      type: 'GET',
      success: (response) => {
        this.setState({ contacts: response });
      }
    });
  }

  delete(id) {
    $.ajax({
      url: `/contacts/${id}.json`,
      type: 'DELETE',
      success: () => {
        this.setState(prevState => ({
          contacts: prevState.contacts.filter(c => c.id != id)
        }));
      }
    });
  }

  handleSort(e) {
    var field;
    if (e.target.tagName === 'I') {
      // Handle clicking of icon directly
      field = e.target.parentElement.getAttribute('data-field');
    } else {
      field = e.target.getAttribute('data-field');
    }

    var contacts = this.state.contacts;
    var sortDirection;

    if (field === 'name') {
      contacts.sort(sortByName);
    } else if (field === 'email') {
      contacts.sort(sortByEmail);
    }

    if (this.state.sortField === field && this.state.sortDirection === 'asc') {
      sortDirection = 'desc';
      contacts.reverse();
    } else {
      sortDirection = 'asc';
    }

    this.setState({ contacts: contacts, sortField: field, sortDirection: sortDirection});
  }

  render() {
    var contacts = this.state.contacts.map(contact => {
      return (
        <Contact
          key={contact.id}
          id={contact.id}
          firstName={contact.first_name}
          lastName={contact.last_name}
          emailAddress={contact.email_address}
          phoneNumber={contact.phone_number}
          extension={contact.extension}
          companyName={contact.company_name}
          editUrl={contact.edit_url}
          delete={this.delete}
        />
      );
    });

    return (
      <div className="contact-list">
        <h1>Listing Contacts</h1>

        <table>
          <thead>
            <tr>
              <SortableHeader
                text='Name'
                field='name'
                sortField={this.state.sortField}
                sortDirection={this.state.sortDirection}
                onClick={this.handleSort}
              />
              <SortableHeader
                text='Email Address'
                field='email'
                sortField={this.state.sortField}
                sortDirection={this.state.sortDirection}
                onClick={this.handleSort}
              />
              <th>Phone Number</th>
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
