class ContactListFilter extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor='email-filter'>Filter by email:</label>
        <input id='email-filter' value={this.props.filter} onChange={this.props.handleFilter} />
      </div>
    )
  }
}

ContactListFilter.protpTypes = {
  filter: React.PropTypes.string,
  handleFilter: React.PropTypes.func.isRequired
}
