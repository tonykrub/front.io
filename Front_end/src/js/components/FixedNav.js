var Collapse = require('rc-collapse');
var Panel = Collapse.Panel;
var React = require("react");
var FormsLists = require("./FormsLists")
var ShareList = require("./ShareList")


var FixedNav = React.createClass({

    render: function() {

        return (

<div className="main_container">
    <Collapse accordion={true} >

    <Panel header="Switch" key="1">

    <ul>
      <li>Give a list</li>
      <li>Receive a list</li>

    </ul>

    </Panel>

    <Panel header="Parcourir les listes" key="2">

    <ul>
      <li>list#1</li>
    </ul>

    </Panel>
    <Panel header="Filtrer les listes par" key="3">

    <ul>
      <li>Deadline</li>
      <li>Livrables</li>
      <li>Priorité
          <ul>
            <li>Croissante</li>
            <li>Décroissante</li>

          </ul>
      </li>

    </ul>

    </Panel>
    <Panel header="Create a list" key="4">
      <FormsLists />
    </Panel>
    <Panel header="Create a task" key="5">
      <FormsLists />
    </Panel>
    <ShareList />
    </Collapse>
</div>
        )
      }

});

module.exports = FixedNav;
