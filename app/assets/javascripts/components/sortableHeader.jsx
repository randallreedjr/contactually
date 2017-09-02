class SortableHeader extends React.Component {
  render() {
    return (
      <th>
        {this.props.text}
        {this.props.sortIcon}
      </th>
    );
  }
}

SortableHeader.propTypes = {
  text: React.PropTypes.string.isRequired,
  sortIcon: React.PropTypes.object
}
