function formatPhoneNumber(phoneNumber) {
  if(phoneNumber && phoneNumber.match(/\d{10}/)) {
    const areaCode = phoneNumber.slice(0,3);
    const prefix = phoneNumber.slice(3,6);
    const lineNumber = phoneNumber.slice(6);
    return `(${areaCode}) ${prefix}-${lineNumber}`;
  } else {
    return '';
  }
}

class Phone extends React.Component {
  render() {
    return (
      <span>{formatPhoneNumber(this.props.phoneNumber)}</span>
    );
  }
}

Phone.propTypes = {
  phoneNumber: React.PropTypes.string
}
