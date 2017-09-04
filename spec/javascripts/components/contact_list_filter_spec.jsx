describe('<ContactListFilter />', () => {
  it('displays a Filter by email label', () =>{
    var header = TestUtils.renderIntoDocument(
      <ContactListFilter />
    );
    const label = TestUtils.findRenderedDOMComponentWithTag(header, 'label');

    expect(label.textContent).toMatch('Filter by email:');
  });

  it('displays a filter input', () => {
    var header = TestUtils.renderIntoDocument(
      <ContactListFilter />
    );
    const input = TestUtils.findRenderedDOMComponentWithTag(header, 'input');

    expect(input.id).toEqual('email-filter');
  })

  it('associates the label with the filter', () => {
    var header = TestUtils.renderIntoDocument(
      <ContactListFilter />
    );
    const label = TestUtils.findRenderedDOMComponentWithTag(header, 'label');

    expect(label.getAttribute('for')).toEqual('email-filter');
  })
});
