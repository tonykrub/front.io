var React = require("react")
var Collapse = require('rc-collapse');
var Panel = Collapse.Panel;

var TaskMainNav = React.createClass({

    render: function() {

        return (


                <ul className="moving-container">
                  <Collapse accordion={true} >
                  <Panel header="Task name here" key="1">

                    <p className="single_task_description">typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>

                    <ul className="single_task_ul">
                      <li>2016-11-10</li>
                      <li>Priority : 1 </li>
                    </ul>

                  </Panel>

                  </Collapse>
                </ul>

        )

    }

});

module.exports = TaskMainNav;
