function sortByName(a,b) {
  if (a.last_name === b.last_name) {
    return (a.first_name > b.first_name) ? 1 : ((b.first_name > a.first_name) ? -1 : 0);
  }
  return (a.last_name > b.last_name) ? 1 : -1;
}

function sortByEmail(a,b) {

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

  fieldSortIndicator(field) {
    if(field === this.state.sortField) {
      if(this.state.sortDirection === 'asc') {
        return <i className="fa fa-sort-asc" aria-hidden="true"></i>;
      } else if(this.state.sortDirection === 'desc') {
        return <i className="fa fa-sort-desc" aria-hidden="true"></i>;
      }
    }
    // show sortable icon
    return <i className="fa fa-sort" aria-hidden="true"></i>;
  }

  // handleSort {
  //
  // }

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
              <SortableHeader text='Name' sortIcon={this.fieldSortIndicator('name')} />
              <SortableHeader text='Email Address' sortIcon={this.fieldSortIndicator('email')} />
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
