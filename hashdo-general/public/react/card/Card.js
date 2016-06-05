const isNode = typeof module !== 'undefined' && module.exports,  // check if server or client
      React = isNode ? require('react') : window.React,
      ReactDOM = isNode ? require('react-dom') : window.ReactDOM;

class Card extends React.Component {

  constructor(props) {
    super(props);
    this.state = {text: props.order};
  }

  handleClick() {
    console.log('events work');
    this.setState({text: 'events work'});
  }

  render() {
    return (
      <div id={5} style={{cursor: 'pointer'}} className={`test-class`} onClick={() => this.handleClick()}>
        <div>{this.state.text}</div>
        <Sample/>
      </div>
    );
  }

}


// sample component
const Sample = () => (
    <div>test component</div>
);



if (isNode) {
  module.exports = Card;  // for node server-side rendering
}
