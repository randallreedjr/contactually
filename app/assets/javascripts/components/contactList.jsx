class ContactList extends React.Component {
  render() {
    return (
      <div className="contact-list">
        <h1>Your Contacts</h1>

        <table>
          <thead>
            <tr>
              <SortableHeader
                text='Name'
                field='name'
                sortField={this.props.sortField}
                sortDirection={this.props.sortDirection}
                onClick={this.props.handleSort}
              />
              <SortableHeader
                text='Email Address'
                field='email'
                sortField={this.props.sortField}
                sortDirection={this.props.sortDirection}
                onClick={this.props.handleSort}
              />
              <th>Phone Number</th>
              <th>Extension</th>
              <th>Company</th>
              <th colSpan="2"></th>
            </tr>
          </thead>

          <tbody>
            {this.props.contacts.map(contact => {
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
                  delete={this.props.handleDelete}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

ContactList.propTypes = {
  contacts: React.PropTypes.array.isRequired,
  sortField: React.PropTypes.string,
  sortDirection: React.PropTypes.string,
  handleSort: React.PropTypes.func.isRequired,
  handleDelete: React.PropTypes.func.isRequired
}
