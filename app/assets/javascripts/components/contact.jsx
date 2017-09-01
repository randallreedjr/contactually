

class Contact extends React.Component {
  render() {
    return (
      <tr>
        <td><Name firstName={this.props.firstName} lastName={this.props.lastName} url={this.props.showUrl}/></td>
        <td><Email emailAddress={this.props.emailAddress} /></td>
        <td><Phone phoneNumber={this.props.phoneNumber} /></td>
        <td><Extension extension={this.props.extension} /></td>
        <td className='company-name'>{this.props.companyName}</td>
        <td><a href={this.props.editUrl}>Edit</a></td>
        <td><a href='#'>Delete</a></td>
      </tr>
    )
  }
}

Contact.propTypes = {
  firstName: React.PropTypes.string.isRequired,
  lastName: React.PropTypes.string,
  emailAddress: React.PropTypes.string,
  phoneNumber: React.PropTypes.string,
  extension: React.PropTypes.string,
  companyName: React.PropTypes.string,
  showUrl: React.PropTypes.string,
  editUrl: React.PropTypes.string
}
