class Contact extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.firstName}</td>
        <td>{this.props.lastName}</td>
        <td>{this.props.email}</td>
        <td>{this.props.phone}</td>
        <td>{this.props.extension}</td>
        <td className='company-name'>{this.props.companyName}</td>
      </tr>
    )
  }
}

Contact.propTypes = {
  firstName: React.PropTypes.string.isRequired,
  lastName: React.PropTypes.string,
  email: React.PropTypes.string,
  phone: React.PropTypes.string,
  extension: React.PropTypes.string,
  companyName: React.PropTypes.string
}
