import React, {Component} from 'react';
import * as action from '../store/actions/Auth'
import {connect} from 'react-redux'
import {Link, withRouter} from 'react-router-dom'

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.RegisterHandler = this.RegisterHandler.bind(this)
    }

    RegisterHandler(event) {
        event.preventDefault();
        let username = event.target.elements.username.value,
            email = event.target.elements.email.value,
            password1 = event.target.elements.password1.value,
            password2 = event.target.elements.password2.value;
        this.props.onAuth(username, email, password1, password2)
    }

    render() {
        return (
            <div id="containerbar" className="containerbar authenticate-bg">
                {/* Start Container */}
                <div className="container">
                    <div className="auth-box register-box">
                        {/* Start row */}
                        <div className="row no-gutters align-items-center justify-content-center">
                            {/* Start col */}
                            <div className="col-md-6 col-lg-5">
                                {/* Start Auth Box */}
                                <div className="auth-box-right">
                                    <div className="card">
                                        <div className="card-body">
                                            <form onSubmit={this.RegisterHandler}>
                                                <div className="form-head">
                                                    <Link to="/" className="logo"><img
                                                        src="/static/assets/images/logo.svg" className="img-fluid" alt="logo"/></Link>
                                                </div>
                                                <h4 className="text-primary my-4">Sign Up !</h4>
                                                <div className="form-group">
                                                    <input type="text" className="form-control" id="username"
                                                           placeholder="Username" name={'username'} required/>
                                                </div>
                                                <div className="form-group">
                                                    <input type="email" name={'email'} className="form-control"
                                                           id="email"
                                                           placeholder="Email" required/>
                                                </div>
                                                <div className="form-group">
                                                    <input type="password" name='password1' className="form-control"
                                                           id="password"
                                                           placeholder="Password" required/>
                                                </div>
                                                <div className="form-group">
                                                    <input type="password" name='password2' className="form-control"
                                                           id="re-password"
                                                           placeholder="Re-Type Password" required/>
                                                </div>
                                                <div className="form-row mb-3">
                                                    <div className="col-sm-12">
                                                        <div className="custom-control custom-checkbox text-left">
                                                            <input type="checkbox" className="custom-control-input"
                                                                   id="terms"/>
                                                            <label className="custom-control-label font-14"
                                                                   htmlFor="terms">I Agree to Terms &amp; Conditions of
                                                                qua </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <button type={'submit'}
                                                        className="btn btn-success btn-lg btn-block font-18">Register
                                                </button>
                                            </form>
                                            <p className="mb-0 mt-3">Already have an account? <Link to="/login">Log
                                                in</Link></p>
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
        onAuth: (username, email, password1, password2) => dispatch(action.authSignup(username, email, password1, password2))
    }
};
export default connect(mapSateToProps, mapDispatchToProps)(withRouter(Register));