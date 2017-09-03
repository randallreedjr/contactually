function sortByName(a,b) {
  if (a.last_name === b.last_name) {
    return (a.first_name > b.first_name) ? 1 : ((b.first_name > a.first_name) ? -1 : 0);
  }
  return (a.last_name > b.last_name) ? 1 : -1;
}

function sortByEmail(a,b) {
  return (a.email_address > b.email_address) ? 1 : ((b.email_address > a.email_address) ? -1 : 0);
}

class ContactListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      sortField: '',
      sortDirection: '',
      loading: true
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.handleSort = this.handleSort.bind(this);
  }

  componentDidMount() {
    $.ajax({
      url: '/contacts.json',
      type: 'GET',
      success: (response) => {
        this.setState({ contacts: response, loading: false });
      }
    });
  }

  handleDelete(id) {
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
      // we are already sorting by this field; toggle the direction
      sortDirection = 'desc';
      contacts.reverse();
    } else {
      sortDirection = 'asc';
    }

    this.setState({ contacts , sortField: field, sortDirection });
  }

  contents() {
    if (this.state.loading) {
      return (<h3>Loading...</h3>);
    } else if (this.state.contacts.length === 0) {
      return (<h3>You have no contacts. Add a contact or upload a contact file.</h3>);
    } else {
      return (
        <ContactList
          contacts={this.state.contacts}
          sortField={this.state.sortField}
          sortDirection={this.state.sortDirection}
          handleSort={this.handleSort}
          handleDelete={this.handleDelete}
        />
      )
    }
  }

  render() {
    return (
      <div className="contact-list">
        <h1>
          Your Contacts
          <button>Add Contact</button>
        </h1>
        {this.contents()}
      </div>
    );
  }
}
