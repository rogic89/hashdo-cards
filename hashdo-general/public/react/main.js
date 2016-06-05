/* global card, locals */

card.onReady = function () {
  // include React dependencies and Card component
  card.require('https://cdnjs.cloudflare.com/ajax/libs/react/15.1.0/react.min.js', function() {
    card.require('https://cdnjs.cloudflare.com/ajax/libs/react/15.1.0/react-dom.min.js', function() {
      card.require('./card/dist/Card.js', function() {
        var props = locals.props;
        props.card = card;
        ReactDOM.render(
            React.createElement(Card, props),  // pass locals and card as props
            document.getElementById('react-root')
        );  // attach DOM events
      });
    });
  });
};

