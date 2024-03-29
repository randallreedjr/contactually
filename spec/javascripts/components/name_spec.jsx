describe('<Name />', () => {
  it('has a link to the contact url', () => {
    var name = TestUtils.renderIntoDocument(
      <Name url='http://www.example.com' />
    );
    const a = TestUtils.findRenderedDOMComponentWithTag(name, 'a');

    expect(a.getAttribute('href')).toEqual('http://www.example.com');
  });

  it('displays the full name', () => {
    var name = TestUtils.renderIntoDocument(
      <Name firstName='John' lastName='Smith' />
    );

    const a = TestUtils.findRenderedDOMComponentWithTag(name, 'a');

    expect(a.textContent).toEqual('John Smith');
  });
});
