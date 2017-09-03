// use wrapper component to avoid error
// Error: Invariant Violation: findAllInRenderedTree(...): instance must be a composite component
// see https://github.com/facebook/react/issues/4692#issuecomment-163029873

// also cannot render SortableHeader component directly
// Warning: validateDOMNesting(...): <th> cannot appear as a child of <div>.

class TestHeader extends React.Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <SortableHeader
              text={this.props.text}
              field={this.props.field}
              sortField={this.props.sortField}
              sortDirection={this.props.sortDirection}
            />
          </tr>
        </thead>
      </table>
    )
  }
}

describe('<SortableHeader />', () => {
  it('displays the header text', () => {
    var header = TestUtils.renderIntoDocument(
        <TestHeader text='Test' />
    );
    const th = TestUtils.findRenderedDOMComponentWithTag(header, 'th');
    expect(th.textContent).toEqual('Test');
  });

  describe('when field is not sort field', () => {
    it('displays the default sort icon',  () => {
      var header = TestUtils.renderIntoDocument(
          <TestHeader text='Test' field='foo' sortField='bar' />
      );
      const i = TestUtils.findRenderedDOMComponentWithTag(header, 'i');
      expect(i.classList.contains('fa-sort')).toEqual(true);
    });
  });

  describe('when field is the sort field', () => {
    describe('when sort direction is asc', () => {
      it('displays the sort ascending icon', () => {
        var header = TestUtils.renderIntoDocument(
          <TestHeader text='test' field='foo' sortField='foo' sortDirection='asc' />
        );
        const i = TestUtils.findRenderedDOMComponentWithTag(header, 'i');
        expect(i.classList.contains('fa-sort-asc')).toEqual(true);
      });
    });

    describe('when sort direction is desc', () => {
      it('displays the sort descending icon', () => {
        var header = TestUtils.renderIntoDocument(
          <TestHeader text='test' field='foo' sortField='foo' sortDirection='desc' />
        );
        const i = TestUtils.findRenderedDOMComponentWithTag(header, 'i');
        expect(i.classList.contains('fa-sort-desc')).toEqual(true);
      });
    });
  });
});
