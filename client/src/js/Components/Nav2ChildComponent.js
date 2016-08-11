var React = require('react');
//var ComposeChildComponent=require('./ComposeChild.js');
var Compose=require('./Compose.js');
//var ComposeGrandChildComponent=require('./ComposeGrandChild.js');
var Nav2ChildComponent = React.createClass({
render: function(){
  return(<div className="container-fluid">
  <ul className="nav navbar-nav navbar-left ">

      <li className="dropdown">
           <a href="#" className="dropdown-toggle active" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">MAIL MENU<span className="caret"></span></a>
        <ul className="dropdown-menu">
            <li><a href="#">INBOX</a></li>
            <li><a href="#">ALL MAIL</a></li>
            <li><a href="#">SENT</a></li>
            <li><a href="#draft">DRAFT </a></li>
            <li><a href="#">FAVOURITE </a></li>
            <li><a href="#">TRASH </a></li>

            <li role="separator" className="divider"></li>
        </ul>
      </li>
      <li>
           <div className="chk-all">
                  <input type="checkbox" className="mail-checkbox mail-group-checkbox"/>
                      <div className="btn-group">
                          <a data-toggle="dropdown" href="#" className="btn mini all active" aria-expanded="false">
                              All
                              <span className="caret"></span>
                          </a>
                          <ul className="dropdown-menu active">
                              <li><a href="#"> None</a></li>
                              <li><a href="#"> Read</a></li>
                              <li><a href="#"> Unread</a></li>
                          </ul>
                      </div>
            </div>
      </li>
      <li>
            <div className="btn-group">
                <a data-original-title="Refresh" data-placement="top" data-toggle="dropdown" href="#" className="btn mini tooltips"></a>
            </div>
            <div className="btn-group hidden-phone">
                <a data-toggle="dropdown" href="#" className="btn mini blue active" aria-expanded="false">
                    More
                    <span className="caret"></span>
                </a>
                <ul className="dropdown-menu">
                    <li><a href="#"><i className="fa fa-pencil"></i> Mark as Read</a></li>
                    <li><a href="#"><i className="fa fa-ban"></i> Spam</a></li>
                    <li className="divider"></li>
                    <li><a href="#"><i className="fa fa-trash-o"></i> Delete</a></li>
                </ul>
            </div>
        </li>
            <div className="btn-group">
                <a data-toggle="dropdown" href="#" className="btn mini blue active">
                    Move to
                    <span className="caret"></span>
                </a>
                <ul className="dropdown-menu">
                    <li><a href="#"><i className="fa fa-pencil"></i> Mark as Read</a></li>
                    <li><a href="#"><i className="fa fa-ban"></i> Spam</a></li>
                    <li className="divider"></li>
                    <li><a href="#"><i className="fa fa-trash-o"></i> Delete</a></li>
                </ul>
          </div>
    </ul>
    <div className="container-fluid pull-right">
    <ul className="unstyled inbox-pagination pull-left" >

                                <li>
                                    <a className="np-btn" id="paginationleft" href="#"><span className="glyphicon glyphicon-chevron-left  pagination-left"></span></a>
                                </li>
                                <li><span >1-50 of 234</span></li>
                                <li>
                                    <a className="np-btn" href="#" id="paddingright"><span className="glyphicon glyphicon-chevron-right  pagination-right"></span></a>
                                </li>
                                <li>
                                    <a className="np-btn" href="https://www.gmail.com/" id="paddingright"><b><i>Ahamedmoideen</i></b></a>
                                </li>

                            </ul>
            <div id="profile">

                  <a title="Ahamed" href="http://www.google.co.in" className="twPc-avatarLink pull-right">
                              <img alt="Ahamed" src="./images/one.jpg" className="twPc-avatarImg" />
                  </a>

            </div>
        </div>

     </div>

       )
       }
       })
       module.exports = Nav2ChildComponent;
