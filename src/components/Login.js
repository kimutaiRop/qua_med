import React, {Component} from 'react';
import * as action from '../store/actions/Auth'
import {connect} from 'react-redux'
import {Link, withRouter} from 'react-router-dom'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.LoginHandler = this.LoginHandler.bind(this)
    }

    LoginHandler(event) {
        event.preventDefault();
        let name_email = event.target.elements.username.value,
            password = event.target.elements.password.value;
        this.props.onAuth(name_email, password)
    }

    render() {
        let errorMessage = null;
        if (this.props.error) {
            let em_pas1 = this.props.error.email || this.props.error.password1,
                em_pas2 = this.props.error.password2 || this.props.error.username;
            if (!em_pas1) {
                if (!em_pas2) {
                    errorMessage =
                            this.props.error

                }
            }
        }
        return (
            <div id="containerbar" className="containerbar authenticate-bg">
                {/* Start Container */}
                <div className="container">
                    <div className="auth-box login-box">
                        {/* Start row */}
                        <div className="row no-gutters align-items-center justify-content-center">
                            {/* Start col */}
                            <div className="col-md-6 col-lg-5">
                                {/* Start Auth Box */}
                                <div className="auth-box-right">
                                    <div className="card">
                                        <div className="card-body">
                                            {errorMessage}
                                            <form onSubmit={this.LoginHandler}>
                                                <div className="form-head">
                                                    <Link to="/" className="logo"><img
                                                        src="/static/assets/images/logo.svg" className="img-fluid" alt="logo"/></Link>
                                                </div>
                                                <h4 className="text-primary my-4">Log in !</h4>
                                                <div className="form-group">
                                                    <input type="text" name={'username'} className="form-control" id="username"
                                                           placeholder="Username" required/>
                                                </div>
                                                <div className="form-group">
                                                    <input type="password" name={'password'} className="form-control" id="password"
                                                           placeholder="Password" required/>
                                                </div>
                                                <div className="form-row mb-3">
                                                    <div className="col-sm-6">
                                                        <div className="custom-control custom-checkbox text-left">
                                                            <input type="checkbox" className="custom-control-input"
                                                                   id="rememberme"/>
                                                            <label className="custom-control-label font-14"
                                                                   htmlFor="rememberme">Remember Me</label>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <div className="forgot-psw">
                                                            <Link id="forgot-psw" to="forgot-password"
                                                               className="font-14">Forgot Password?</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <button type={'submit'}
                                                        className="btn btn-success btn-lg btn-block font-18">Log in
                                                </button>
                                            </form>
                                            <p className="mb-0 mt-3">Don't have a account? <Link to="/register">Sign
                                                up</Link></p>
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

const mapSateToProps = (state) => {
    return {
        loading: state.loading,
        error: state.loading
    }
};
const mapDispatchToProps = dispatch => {

    return {
        onAuth: (username, password) => dispatch(action.authLogin(username, password))
    }
};
export default connect(mapSateToProps, mapDispatchToProps)(withRouter(Login));