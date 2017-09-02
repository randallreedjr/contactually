class Email extends React.Component {
  render() {
    return (
      <a href={`mailto:${this.props.emailAddress}`}>
        {this.props.emailAddress}
      </a>
    );
  }
}

Email.propTypes = {
  emailAddress: React.PropTypes.string
}
