var React = require("react")
var Collapse = require('rc-collapse');
var Panel = Collapse.Panel;
var TaskMainNav = require("./TaskMainNav");

var MainNav = React.createClass({

    render: function() {

        return (

          <div className="moving-nav">
              <div className="moving-container-first">
                  <h1>List Name here</h1>
              </div>

              <TaskMainNav />
              <TaskMainNav />
              <TaskMainNav />
              <TaskMainNav />
              <TaskMainNav />
              <TaskMainNav />
              <TaskMainNav />
              <TaskMainNav />
              <TaskMainNav />

          </div>


        )

    }

});

module.exports = MainNav;
