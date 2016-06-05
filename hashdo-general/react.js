var React = require('react'),
    ReactDOMServer = require('react-dom/server'),
    Card = require('./public/react/card/dist/Card');

module.exports = {
  name: 'REACT',
  description: 'A basic React card.',
  icon: 'http://cdn.hashdo.com/icons/html.png',
  clientStateSupport: true,
  inputs: {
    order: {
      example: 'Click me!',
    },
  },

  getCardData: function (inputs, state, callback) {
    var props = Object.assign({}, inputs, state);
    callback(null, {
      dom: ReactDOMServer.renderToString(React.createElement(Card, props))   // can comment out while developing
    }, {
      props: props  // pass the props to client side
    });
  }
};

