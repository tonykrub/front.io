var React = require("react")


var RemoveTask = React.createClass({
    
   deleteElement:function(){
    },


    render: function(){
    
        return ( 
        <ul>
            {this.props.items.map((task, taskIndex) => 
                <li key={taskIndex}>
                    {task}
                    <button onClick={this.props.deleteTask} value={taskIndex}> X </button>
                </li>
            )}
        </ul>
    )   
    }
    
 });
 
module.exports = RemoveTask