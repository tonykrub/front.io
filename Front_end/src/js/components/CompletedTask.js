var React = require("react")


var CompletedTask = React.createClass({
    
    
    
render: function() {
    var items = this.props.items.map((strike, index) => {
    	return <li key={index}> 
        <button onClick={ () => this.props.handleOnClick } style={ { textDecoration: strike.isClicked ? 'line-through' : 'none' } }> Complete</button>
      {this.props.taskIndex}
      </li>
    });
    
		return <ul>
    	{ items }
    </ul>
  }
});



module.exports = CompletedTask;
