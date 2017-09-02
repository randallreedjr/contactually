class Name extends React.Component {
  render() {
    return (
      <a href={this.props.url}>
        {`${this.props.firstName} ${this.props.lastName}`}
      </a>
    );
  }
}

Name.propTypes = {
  firstName: React.PropTypes.string,
  lastName: React.PropTypes.string,
  url: React.PropTypes.string
}
