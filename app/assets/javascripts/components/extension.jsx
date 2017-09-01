function formatExtension(extension) {
  if(extension) {
    return 'x' + extension;
  }
}

function Extension(props) {
  return <span>{formatExtension(props.extension)}</span>
}
