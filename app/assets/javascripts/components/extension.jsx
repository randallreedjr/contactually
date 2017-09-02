function formatExtension(extension) {
  if(extension && extension.match(/^\d+$/)) {
    return 'x' + extension;
  } else {
    return '';
  }
}

class Extension extends React.Component {
  render() {
    return (
      <span>{formatExtension(this.props.extension)}</span>
    );
  }
}

Extension.propTypes = {
  extension: React.PropTypes.string
}
