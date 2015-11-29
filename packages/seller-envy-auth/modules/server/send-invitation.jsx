let invitation = ( options ) => {
  _insertInvitation( options );
  console.error("Inserted invite");
  var email = _prepareEmail( options.token );
  console.error("Prepared email: ");
  _sendInvitation( options.email, email );
  console.error("Sent email");
};

let _insertInvitation = ( invite ) => {
  Invitations.insert( invite );
};

let _prepareEmail = ( token ) => {
  let domain = Meteor.settings.private.domain;
  let url    = `http://${ domain }/invite/${ token }`;

  console.error(`Sending email from ${url}`);
  try {
    let html = ReactDOMServer.renderToString(<SellerEnvy.Views.InviteTemplate url={url}/>);
    return html;
  }
  catch (ex) {
    console.error(ex);
  }
  console.error("Got html");
};

let _sendInvitation = ( email, content ) => {
  Email.send({
    to: email,
    from: "Woot <woot@sellerenvy.com>",
    subject: "A Special Invitation for you",
    html: content
  });
};

SellerEnvy.Modules.server.sendInvitation = invitation;