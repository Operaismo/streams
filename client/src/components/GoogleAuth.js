import React from "react";

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client.init({
        clientId:
          "271062148777-s32fovlsh62ehkngor36r2hdl0f42ru8.apps.googleusercontent.com",
        scope: 'email'
      }).then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
      });
    });
  }
  render() {
    return <div>Google Auth</div>;
  }
}

export default GoogleAuth;