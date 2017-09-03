describe('<ContactListHeader />', () => {
  it('displays Your Contacts in the header', () =>{
    var header = TestUtils.renderIntoDocument(
      <ContactListHeader />
    );
    const h1 = TestUtils.findRenderedDOMComponentWithTag(header, 'h1');

    expect(h1.textContent).toMatch('Your Contacts');
  });

  it('displays an Add Contact button', () =>{
    var header = TestUtils.renderIntoDocument(
      <ContactListHeader />
    );
    const button = TestUtils.findRenderedDOMComponentWithTag(header, 'button');

    expect(button.textContent).toMatch('Add Contact');
  });
});
