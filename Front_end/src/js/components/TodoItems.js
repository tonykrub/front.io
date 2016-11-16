var React = require("react");


var TodoItems = React.createClass({
    
    render: function() {
    
    var listItems = this.props.entries.map(createTasks);
    
    function createTasks(item) {
      return ( 
        <li key={item.key}>{item.text}
        </li>
      )
    }
    
    return (
      <ul className="theList">
        {listItems}
      </ul>
    );
 
  }
    
    
})





module.exports = TodoItems