function Email(props) {
  return <a href={`mailto:${props.emailAddress}`}>{props.emailAddress}</a>
}
