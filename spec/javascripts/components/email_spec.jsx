describe('<Email />', () => {
  it('has a mailto link to the email address', () => {
    var email = TestUtils.renderIntoDocument(
      <Email emailAddress='example@test.com' />
    );
    const a = TestUtils.findRenderedDOMComponentWithTag(email, 'a');

    expect(a.getAttribute('href')).toEqual('mailto:example@test.com');
  });

  it('displays the email address', () => {
    var email = TestUtils.renderIntoDocument(
      <Email emailAddress='example@test.com' />
    );
    const a = TestUtils.findRenderedDOMComponentWithTag(email, 'a');

    expect(a.textContent).toEqual('example@test.com');
  });
});
