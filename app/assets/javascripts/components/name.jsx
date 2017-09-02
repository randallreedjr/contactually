class Name extends React.Component {
  render() {
    return (
      <a href={this.props.url}>
        {`${this.props.firstName} ${this.props.lastName}`}
      </a>
    );
  }
}
