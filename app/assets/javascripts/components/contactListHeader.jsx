class ContactListHeader extends React.Component {
  render() {
    // TODO: Make add button work
    return (
      <div className="contact-list">
        <h1>
          Your Contacts
        </h1>
        {this.props.children}
      </div>
    );
  }
}
