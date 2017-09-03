class ContactListHeader extends React.Component {
  render() {
    // TODO: Make add button work
    return (
      <div className="contact-list">
        <h1>
          Your Contacts
          <button>Add Contact</button>
        </h1>
        {this.props.children}
      </div>
    );
  }
}
