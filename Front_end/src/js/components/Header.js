var React = require("react")
var reactBootstrap = require("react-bootstrap");
var Grid = require('react-bootstrap').Grid;
var Col = require('react-bootstrap').Col;
var Row = require('react-bootstrap').Row;

var Header = React.createClass({

    render: function() {

        return (

            <div className="main_container">
                <header>
                  <Grid>
                    <Row>
                      <Col md={3}>
                            <h1>Front.io</h1>
                            </Col>
                              <Col md={9}>
                              <ul>
                                <li>Welcome back, Cyrus</li>
                                <li><button>Logout</button></li>
                              </ul>  
                            </Col>
                         </Row>
                        </Grid>
                </header>
            </div>
        )

    }

});

module.exports = Header;
