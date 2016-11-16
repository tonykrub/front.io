var React = require("react")
var RemoveTask = require("./RemoveTask")
var CompletedTask = require('./CompletedTask')



var TodoList = React.createClass({
    
    getInitialState: function() {
        return {
            items: [],
            task: ''
        };
  },
  
    addTask:function (e){
        this.setState({
            items: this.state.items.concat([this.state.task]),
            task: ''
        })
        e.preventDefault();
    },

    deleteTask: function(e) {
        var taskIndex = parseInt(e.target.value, 10);
        this.setState(state => {
            this.state.items.splice(taskIndex, 1);
            return {items: state.items};
        });
    },
     onChange: function(e) {
        this.setState({ task: e.target.value });
    },
//     handleOnClick: function(index) {
//     this.setState({
//     	users: this.state.items.map((tasks, i) => {
//       	if (i === index) {
//         	tasks.isClicked = !tasks.isClicked;
//         }
//         return tasks;
//       })
//     })
//  	},
 
  render: function() {
      return (
        <div className="todoListMain">
          <div className="header">
            <RemoveTask items={this.state.items} deleteTask={this.deleteTask} />
            <form onSubmit={this.addTask}>
                <input onChange={this.onChange} type="text" value={this.state.task}
                 placeholder="enter task"></input>
                <button type="submit">add</button>
            </form>
          </div>
        </div>
      );
    }
});

module.exports = TodoList
