import React, {Component} from 'react';

class ForgotPassword extends Component {
    render() {
        return (
           <div id="containerbar" className="containerbar authenticate-bg">
  {/* Start Container */}
  <div className="container">
    <div className="auth-box forgot-password-box">
      {/* Start row */}
      <div className="row no-gutters align-items-center justify-content-center">
        {/* Start col */}
        <div className="col-md-6 col-lg-5">
          {/* Start Auth Box */}
          <div className="auth-box-right">
            <div className="card">
              <div className="card-body">
                <form action="forgotpsw.html#">
                  <div className="form-head">
                    <a href="index.html" className="logo"><img src="assets/images/logo.svg" className="img-fluid" alt="logo" /></a>
                  </div>
                  <h4 className="text-primary my-4">Forgot Password ?</h4>
                  <p className="mb-4">Enter the email address below to receive reset password instructions.</p>
                  <div className="form-group">
                    <input type="email" className="form-control" id="email" placeholder="Email ID" required />
                  </div>
                  <button type="submit" className="btn btn-success btn-lg btn-block font-18">Send Email</button>
                </form>
                <p className="mb-0 mt-3">Remember Password? <a href="login">Log in</a></p>
              </div>
            </div>
          </div>
          {/* End Auth Box */}
        </div>
        {/* End col */}
      </div>
      {/* End row */}
    </div>
  </div>
  {/* End Container */}
</div>
        );
    }
}

export default ForgotPassword;