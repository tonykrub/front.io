var Collapse = require('rc-collapse');
var Panel = Collapse.Panel;
var React = require("react");
var FormsLists = require("./FormsLists");
var reactBootstrap = require("react-bootstrap");
var FormGroup = require('react-bootstrap').FormGroup;
var ControlLabel = require('react-bootstrap').ControlLabel;
var Button = require('react-bootstrap').Button;
var FormControl = require('react-bootstrap').FormControl;


var ShareList = React.createClass({

    render: function() {

        return (

<div className="main_container_share">
    <Collapse accordion={true} >

    <Panel header="Share a list" key="4">


      <ControlLabel>Enter email</ControlLabel>
      <FormControl
        type="text"
        placeholder="Enter email"
      />

      <FormGroup controlId="formControlsTextarea">
       <ControlLabel>Description(optional)</ControlLabel>
       <FormControl componentClass="textarea" placeholder="textarea" />
     </FormGroup>

     <FormGroup controlId="formControlsSelect">

       <ControlLabel>Text</ControlLabel>
       <FormControl componentClass="select" placeholder="selectionner">
         <option value="select">select</option>
         <option value="other">...</option>
       </FormControl>

     </FormGroup>

     <Button type="submit">
       Submit
     </Button>


    </Panel>
    </Collapse>
</div>
        )
      }

});

module.exports = ShareList;
