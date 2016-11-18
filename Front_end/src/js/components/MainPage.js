var React = require('react');
// require("bootstrap/dist/css/bootstrap.css");
var TodoList = require('./TodoList')
var MainNav = require('./MainNav')
var FixedNav = require('./FixedNav')
var Header = require('./Header')
var Collapse = require('./Collapse')
var FormsLists = require('./FormsLists');
var ShareList = require('./ShareList')


var reactBootstrap = require("react-bootstrap");
var Grid = require('react-bootstrap').Grid;
var Col = require('react-bootstrap').Col;
var Row = require('react-bootstrap').Row;
var PanelGroup = require('react-bootstrap').PanelGroup;
var Panel = require('react-bootstrap').Panel;




var MainPage = React.createClass({
  render: function() {
    return (
      <main>
        <Grid>
          <Row>
          <Col md={12}>
              <Header/>
          </Col>
            <Col md={4}>
              <FixedNav />
              <ShareList />

            </Col>
            <Col md={8}>
            <MainNav />
            </Col>
         </Row>
        </Grid>
      </main>
    );
  }
});

module.exports = MainPage;
