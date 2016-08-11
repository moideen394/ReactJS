var React = require('react');
var DraftChildComponent = require('./draft');
var SubContainer = React.createClass({
  getInitialState:function()
  {
    return {ids:[]};
  },
componentWillMount:function()
{
  console.log("Ahamed");
  //console.log(this.props.messageData);
  var row=[];
    console.log(this.props.messageData.messages.length);
  for(var i=0;i<this.props.messageData.messages.length;i++)
  {

    console.log(this.props.messageData.messages[0].id);

    var id1=this.props.messageData.messages[i].id;
    console.log(id1);
    row.push(id1);
    this.setState({ids:row})
}
},
render:function()
{
  return(<div> <DraftChildComponent id2={this.state.ids}/></div>)
}
});

module.exports = SubContainer;
