describe('<Phone />', () => {
  describe('when phone number is present', () => {
    it('displays the formatted phone number', function () {
      var phone = TestUtils.renderIntoDocument(
        <Phone phoneNumber='2123459876' />
      );
      const span = TestUtils.findRenderedDOMComponentWithTag(phone, 'span');

      expect(span.textContent).toEqual('(212) 345-9876');
    });
  });

  describe('when phone number is absent', () => {
    it('displays an empty string', function () {
      var phone = TestUtils.renderIntoDocument(
        <Phone />
      );
      const span = TestUtils.findRenderedDOMComponentWithTag(phone, 'span');

      expect(span.textContent).toEqual('');
    });
  });

  describe('when phone number is invalid', () => {
    it('displays an empty string', function () {
      var phone = TestUtils.renderIntoDocument(
        <Phone phoneNumber='abc123.,;-'/>
      );
      const span = TestUtils.findRenderedDOMComponentWithTag(phone, 'span');

      expect(span.textContent).toEqual('');
    });
  });
});
