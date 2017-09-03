class SortableHeader extends React.Component {
  fieldSortIndicator() {
    if(this.props.field === this.props.sortField) {
      if(this.props.sortDirection === 'asc') {
        return <i className="fa fa-sort-asc" aria-hidden="true"></i>;
      } else if(this.props.sortDirection === 'desc') {
        return <i className="fa fa-sort-desc" aria-hidden="true"></i>;
      }
    }
    // show sortable icon
    return <i className="fa fa-sort" aria-hidden="true"></i>;
  }

  render() {
    return (
      <th onClick={this.props.onClick} className='sortable-header' data-field={this.props.field}>
        {this.props.text}
        {this.fieldSortIndicator()}
      </th>
    );
  }
}

SortableHeader.propTypes = {
  text: React.PropTypes.string.isRequired,
  field: React.PropTypes.string,
  sortField: React.PropTypes.string,
  sortDirection: React.PropTypes.string,
  onClick: React.PropTypes.func
}
