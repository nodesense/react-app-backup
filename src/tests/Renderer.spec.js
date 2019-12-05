import React from 'react';
import TestRenderer from 'react-test-renderer';

const Child = props => <div>{props.children}</div>;
const Counter = props => <div className={ props.count % 2 == 1? 'odd': 'even'}>{props.count}</div>;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  render() {
    return (
      <section>
        <div>bar</div>
        <Child><p>Hello</p></Child>
        <div>bar</div>
        <button onClick={() => this.setState({count: this.state.count + 1})}>
          ++
        </button>
        <Counter count={this.state.count} />
      </section>
    );
  }
}

// https://medium.com/@koba04/testing-react-components-with-react-test-renderer-b4df590d0320
describe("running renderer tests", () => {
    it("running renderer tests", () => {

 
        const wrapper =  TestRenderer.create(<App />);
        const root = wrapper.root;
            
        let  tree = wrapper.toJSON();
        expect(tree).toMatchSnapshot();


        // find a component by Type
        console.assert(root.find(node => node.type === Child).props.children.type === 'p');
        // find a component by Props
        console.assert(root.findByProps({children: 'Hello'}).type === 'p');
        
        // find all components by Type
        console.assert(root.findAllByType('div').length === 4);
        
        // initial state
        const instance = root.instance;
        console.assert(root.findByType(Counter).props.count === 0);
        console.assert(instance.state.count === 0);
        
        // click the button
        const button = root.findByType('button').props.onClick();
        console.assert(root.findByType(Counter).props.count === 1);
        console.assert(instance.state.count === 1);
        
        // setState directly
        instance.setState({count: instance.state.count + 1});
        console.assert(root.findByType(Counter).props.count === 2);
        console.assert(instance.state.count === 2);

        tree = wrapper.toJSON();
        expect(tree).toMatchSnapshot();
    })

});
