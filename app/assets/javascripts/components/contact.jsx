class Contact extends React.Component {
  handleDelete(){
    this.props.delete(this.props.id)
  }

  render() {
    return (
      <tr>
        <td className='name'><Name firstName={this.props.firstName} lastName={this.props.lastName} url={`/contacts/${this.props.id}`}/></td>
        <td className='email'><Email emailAddress={this.props.emailAddress} /></td>
        <td className='phone'><Phone phoneNumber={this.props.phoneNumber} /></td>
        <td><Extension extension={this.props.extension} /></td>
        <td className='company-name'>{this.props.companyName}</td>
        <td><a href={this.props.editUrl}>Edit</a></td>
        <td>
          <button className='btn btn-danger' onClick={this.handleDelete.bind(this)}>
            Delete
            <i className="fa fa-trash-o" aria-hidden="true"></i>
          </button>
        </td>
      </tr>
    )
  }
}

Contact.propTypes = {
  id: React.PropTypes.number.isRequired,
  firstName: React.PropTypes.string.isRequired,
  lastName: React.PropTypes.string,
  emailAddress: React.PropTypes.string,
  phoneNumber: React.PropTypes.string,
  extension: React.PropTypes.string,
  companyName: React.PropTypes.string,
  editUrl: React.PropTypes.string,
  delete: React.PropTypes.func.isRequired
}
