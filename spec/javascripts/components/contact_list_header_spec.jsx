describe('<ContactListHeader />', () => {
  it('displays Your Contacts in the header', () =>{
    var header = TestUtils.renderIntoDocument(
      <ContactListHeader />
    );
    const h1 = TestUtils.findRenderedDOMComponentWithTag(header, 'h1');

    expect(h1.textContent).toMatch('Your Contacts');
  });
});
