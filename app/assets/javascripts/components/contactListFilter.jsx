class ContactListFilter extends React.Component {
  render() {
    return (
      <form className='form-inline'>
        <div className='form-group'>
          <label htmlFor='email-filter'>Filter by email:</label>
          <input id='email-filter' className='form-control input-lg' type='text' value={this.props.filter} onChange={this.props.handleFilter} />
        </div>
      </form>
    )
  }
}

ContactListFilter.protpTypes = {
  filter: React.PropTypes.string,
  handleFilter: React.PropTypes.func.isRequired
}
