SellerEnvy = {};
SellerEnvy.VERSION = "0.0.1";
SellerEnvy.Views = {};
SellerEnvy.Collection = {};

const publicRedirect = () => {
  if ( Meteor.userId() ) {
    FlowRouter.go( 'index' );
  }
};

publicRoutes = FlowRouter.group({
  name: 'public',
  triggersEnter: [ publicRedirect ]
});

const authenticatedRedirect = () => {
  if (Meteor.isServer) {
    FlowRouter.go('login');
  }
  if ( !Meteor.loggingIn() && !Meteor.userId() ) {
    FlowRouter.go( 'login' );
  }
};

authenticatedRoutes = FlowRouter.group({
  name: 'authenticated',
  triggersEnter: [ authenticatedRedirect ]
});

if(Meteor.isServer) {
  FlowRouter.setDeferScriptLoading(true);
  Meteor.startup(() => {
    process.env.MAIL_URL = "smtp://postmaster%40sellerenvy.com:e57ce8c2b28e3285ee00206f61403f2b@smtp.mailgun.org:587";
  });
}