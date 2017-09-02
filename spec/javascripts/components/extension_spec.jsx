describe('<Extension />', () => {
  describe('when extension is present', () => {
    it('displays the formatted extension', function () {
      var extension = TestUtils.renderIntoDocument(
        <Extension extension='149' />
      );
      const span = TestUtils.findRenderedDOMComponentWithTag(extension, 'span');

      expect(span.textContent).toEqual('x149');
    });
  });

  describe('when extension is absent', () => {
    it('displays an empty string', function () {
      var extension = TestUtils.renderIntoDocument(
        <Extension />
      );
      const span = TestUtils.findRenderedDOMComponentWithTag(extension, 'span');

      expect(span.textContent).toEqual('');
    });
  });

  describe('when extension is invalid', () => {
    it('displays an empty string', function () {
      var extension = TestUtils.renderIntoDocument(
        <Extension extension='$r3'/>
      );
      const span = TestUtils.findRenderedDOMComponentWithTag(extension, 'span');

      expect(span.textContent).toEqual('');
    });
  });
});
