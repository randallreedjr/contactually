function formatPhoneNumber(phoneNumber) {
  return '(' + phoneNumber.slice(0,3) + ') ' + phoneNumber.slice(3,6) + '-' + phoneNumber.slice(6)
}

function formatExtension(extension) {
  if(extension) {
    return 'x' + extension;
  }
}

class Contact extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.firstName}</td>
        <td>{this.props.lastName}</td>
        <td>{this.props.emailAddress}</td>
        <td>{formatPhoneNumber(this.props.phoneNumber)}</td>
        <td>{formatExtension(this.props.extension)}</td>
        <td className='company-name'>{this.props.companyName}</td>
        <td><a href={this.props.showUrl}>Show</a></td>
        <td><a href={this.props.editUrl}>Edit</a></td>
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
