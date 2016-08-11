var React = require('react');
var SubContainer = require('./Subcontainer');
var Compose = require('./Compose');
var NavChildComponents = require('./NavChildComponents');
var Nav2ChildComponent= require('./Nav2ChildComponent');
var loadedData = false;
var GmailBox = React.createClass({
  getInitialState: function()
  {
    return({accessToken:'', accessTokenType:'',messageWithId:[]});
  },
  gmailLogin: function()
  {
    var acToken, tokenType, expiresIn;
    var OAUTHURL    =   'https://accounts.google.com/o/oauth2/v2/auth?';
    var VALIDURL    =   'https://www.googleapis.com/oauth2/v4/token?access_token=';
    var SCOPE       =   'https://mail.google.com/ https://www.googleapis.com/auth/gmail.readonly';
    var CLIENTID    =   '857790453992-i19vra19irrlg4cdf501jgbisgo0quva.apps.googleusercontent.com';
    var REDIRECT    =   'http://localhost:8081';
    var TYPE        =   'token';
    var _url        =   OAUTHURL + 'scope=' + SCOPE + '&client_id=' + CLIENTID + '&redirect_uri=' + REDIRECT + '&response_type=' + TYPE;
    var win         =   window.open(_url, "windowname1", 'width=800, height=600');

    var pollTimer   =   window.setInterval(function()
    {
        try
        {
            if (win.document.URL.indexOf(REDIRECT) != -1)
            {
                window.clearInterval(pollTimer);
                var url =   win.document.URL;
                acToken =   gup(url, 'access_token');
                tokenType = gup(url, 'token_type');
                expiresIn = gup(url, 'expires_in');
                localStorage.setItem('gToken',acToken);
                localStorage.setItem('gTokenType',tokenType);
                localStorage.setItem('gExprireIn',expiresIn);
                //console.log("gToken.."+localStorage.getItem('gToken'));
                //console.log("gTokenType.."+localStorage.getItem('gTokenType'));
                //console.log("gExprireIn.."+localStorage.getItem('gExprireIn'));
                function gup(url, name) {
                    name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
                    var regexS = "[\\#&]"+name+"=([^&#]*)";
                    var regex = new RegExp( regexS );
                    var results = regex.exec( url );
                    if( results == null )
                        return "";
                    else
                        return results[1];
                }
                win.close();
            }
        }
        catch(e)
        {
          console.log(e);
        }
    }, 500);
    this.getDataWithId();
  },
  getDataWithId: function()
  {
      var accessToken = localStorage.getItem('gToken');
      $.ajax({
       url: 'https://www.googleapis.com/gmail/v1/users/techahamed94%40gmail.com/messages/?key={AIzaSyC9IlrVOXYwtjyWbH1-GDwH7G9KpbCg4SM}',
       dataType: 'json',
       async:false,
       type: 'GET',
       beforeSend: function (request)
       {
         request.setRequestHeader("Authorization", "Bearer "+accessToken);
       },
       success: function(data)
       {
         this.setState({messageWithId:data});
         console.log(this.state.messageWithId);
         loadedData = true;
       }.bind(this),
       error: function(xhr, status, err) {
         console.error(err.toString());
       }.bind(this)
    });

  },
  render:function()
  {
    var login;
    if(loadedData){
      login = <SubContainer messageData={this.state.messageWithId}/>;
    }
    //console.log(this.state.messageWithId);
      return(
        <div className="GmailBox">
          <div className="container">
            <div className="mail-box">
              <div className="container-fluid">
              <div className="row">
              <button id="authorize-button" onClick={this.gmailLogin} className="btn btn-primary pull-right">Login</button>
              </div>

              <NavChildComponents/>
              <Nav2ChildComponent/>
                <Compose/>
                    {login}
                </div>
              </div>
            </div>
          </div>
      );
  }
  });

module.exports = GmailBox;
