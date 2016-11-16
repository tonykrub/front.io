var Collapse = require('rc-collapse');
var Panel = Collapse.Panel;
var React = require("react");
var reactBootstrap = require("react-bootstrap");
var FormGroup = require('react-bootstrap').FormGroup;
var ControlLabel = require('react-bootstrap').ControlLabel;
var Button = require('react-bootstrap').Button;
var FormControl = require('react-bootstrap').FormControl;



var FormsLists = React.createClass({

    render: function() {

        return(
          <div>
              <form>
              <div>


              <ControlLabel>List Name</ControlLabel>
              <FormControl
                type="text"
                placeholder="Enter text"
              />

              <ControlLabel>Deadline</ControlLabel>
              <FormControl
                type="text"
                placeholder="Enter text"
              />


              <ControlLabel>List Name</ControlLabel>
              <FormControl
                type="text"
                placeholder="Enter text"
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

                </div>

              </form>

          </div>
)
}

});

module.exports = FormsLists;
