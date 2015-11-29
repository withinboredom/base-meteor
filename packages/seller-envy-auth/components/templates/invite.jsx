SellerEnvy.Views.InviteTemplate = React.createClass({

  render() {
    return (
      <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <title>Neopolitan Welcome Email</title>

        <style type="text/css">{" \
      @import url(http://fonts.googleapis.com/css?family=Droid+Sans);\
\
      /* Take care of image borders and formatting */\
\
      img {\
      max-width: 600px;\
      outline: none;\
      text-decoration: none;\
      -ms-interpolation-mode: bicubic;\
      }\
\
      a {\
      text-decoration: none;\
      border: 0;\
      outline: none;\
      color: #bbbbbb;\
      }\
\
      a img {\
      border: none;\
      }\
\
      /* General styling */\
\
      td, h1, h2, h3  {\
      font-family: Helvetica, Arial, sans-serif;\
      font-weight: 400;\
      }\
\
      td {\
      text-align: center;\
      }\
\
      body {\
      -webkit-font-smoothing:antialiased;\
      -webkit-text-size-adjust:none;\
      width: 100%;\
      height: 100%;\
      color: #37302d;\
      background: #ffffff;\
      font-size: 16px;\
      }\
\
      table {\
      border-collapse: collapse !important;\
      }\
\
      .headline {\
      color: #ffffff;\
      font-size: 36px;\
      }\
\
      .force-full-width {\
      width: 100% !important;\
      }\
"}</style>

        <style type="text/css" media="screen">{"\
      @media screen {\
      /*Thanks Outlook 2013! http://goo.gl/XLxpyl*/\
      td, h1, h2, h3 {\
      font-family: 'Droid Sans', 'Helvetica Neue', 'Arial', 'sans-serif' !important;\
      }\
      }"}
        </style>

        <style type="text/css" media="only screen and (max-width: 480px)">{"\
      /* Mobile styles */\
      @media only screen and (max-width: 480px) {\
\
      table[class=\"w320\"] {\
      width: 320px !important;\
      }\
\
\
      }"}
        </style>

      </head>
      <body className="body"
            style={{
            padding:0,
            margin:0,
            display:"block", background:'#ffffff', "WebkitTextSizeAdjust":"none"}}
            bgcolor="#ffffff">
      <table align="center" cellPadding="0" cellSpacing="0" width="100%" height="100%">
        <tbody>
        <tr>
          <td align="center" valign="top" bgcolor="#ffffff" width="100%">
            <center>
              <table style={{margin: "0 auto"}} cellPadding="0" cellSpacing="0" width="600" className="w320">
                <tbody>
                <tr>
                  <td align="center" valign="top">

                    <table style={{margin: "0 auto"}} cellPadding="0" cellSpacing="0" width="100%" >
                      <tbody>
                      <tr>
                        <td style={{"fontSize": "30px", textAlign:'center'}}>
                          <br />
                          Seller Envy
                          <br />
                          <br />
                        </td>
                      </tr>
                      </tbody>
                    </table>

                    <table style={{margin: "0 auto"}} cellPadding="0" cellSpacing="0" width="100%" bgcolor="#4dbfbf">
                      <tbody>
                      <tr>
                        <td>
                          <br />
                          <img src="robot.gif" width="216" height="189" alt="robot picture"/>
                        </td>
                      </tr>
                      <tr>
                        <td className="headline">
                          Welcome!
                        </td>
                      </tr>
                      <tr>
                        <td>

                          <center>
                            <table style={{margin: "0 auto"}} cellPadding="0" cellSpacing="0" width="60%">
                              <tbody>
                              <tr>
                                <td style={{color:"#187272"}}>
                                  <br />
                                  To the awesomest place on earth! We're sure you will feel right at home with Seller
                                  Envy.
                                  <br />
                                  <br />
                                </td>
                              </tr>
                              </tbody>
                            </table>
                          </center>

                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div>
                            <a href={this.props.url}
                               style={{backgroundColor:"#178f8f",
                               borderRadius:"4px",
                               color:"#ffffff",
                               display:"inline-block",
                               fontFamily:"Helvetica, Arial, sans-serif",
                               fontSize:"16px",
                               fontWeight:"bold",
                               lineHeight:"50px",
                               textAlign:"center",
                               textDecoration:"none",
                               width:"200px",
                               "WebkitTextSizeAdjust":"none"}}>Activate
                              Account!</a>
                            </div>
                          <br />
                          <br />
                        </td>
                      </tr>
                      </tbody>
                    </table>
                    <table style={{margin: "0 auto"}} cellPadding="0" cellSpacing="0" className="force-full-width"
                           bgcolor="#414141">
                      <tbody>
                      <tr>
                        <td style={{backgroundColor:"#414141"}}>
                          <br/>
                          <br/>
                          <br />
                          <br />
                        </td>
                      </tr>
                      <tr>
                        <td style={{color:"#bbbbbb", fontSize:"12px"}}>
                          <a href="#">View in browser</a> | <a href="#">Unsubscribe</a> | <a href="#">Contact</a>
                          <br /><br />
                        </td>
                      </tr>
                      <tr>
                        <td style={{color:"#bbbbbb", fontSize:"12px"}}>
                          © 2015 All Rights Reserved
                          <br />
                          <br />
                        </td>
                      </tr>
                      </tbody>
                    </table>


                  </td>
                </tr>
                </tbody>
              </table>
            </center>
          </td>
        </tr>
        </tbody>
      </table>
      </body>
      </html>);
  }
});
