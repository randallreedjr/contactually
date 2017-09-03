class ContactListFilter extends React.Component {
  render() {
    return (
      <div>Filter by email:<input value={this.props.filter} onChange={this.props.handleFilter} /></div>
    )
  }
}

ContactListFilter.protpTypes = {
  filter: React.PropTypes.string,
  handleFilter: React.PropTypes.func.isRequired
}
