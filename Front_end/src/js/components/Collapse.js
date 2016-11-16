var Collapse = require('rc-collapse');
var Panel = Collapse.Panel;
var React = require('react');
var ReactDOM = require('react-dom');
var collapse = (
  <Collapse accordion={true}>
    <Panel header="hello">this is panel content</Panel>
    <Panel header="title2">this is panel content2 or other</Panel>
  </Collapse>
);
