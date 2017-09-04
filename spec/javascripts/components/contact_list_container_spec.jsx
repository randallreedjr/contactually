describe('<ContactListContainer />', () => {
  it('displays an Add Contact button', () =>{
    var header = TestUtils.renderIntoDocument(
      <ContactListContainer />
    );
    const button = TestUtils.findRenderedDOMComponentWithClass(header, 'add-contact');

    expect(button.textContent).toMatch('Add Contact');
  });

  it('displays an Add Contact button', () =>{
    var header = TestUtils.renderIntoDocument(
      <ContactListContainer />
    );
    const button = TestUtils.findRenderedDOMComponentWithClass(header, 'upload-contacts');

    expect(button.textContent).toMatch('Upload Contacts');
  });
});
