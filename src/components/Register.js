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
        this.setState({
            error: ""
        });
        let username = event.target.elements.username.value,
            email = event.target.elements.email.value,
            password1 = event.target.elements.password1.value,
            password2 = event.target.elements.password2.value,
            pattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        if (pattern.test(username)) {
            this.setState({
                error: "your username cannot be an email"
            });
        } else {
            if (password1 === password2) {
                this.props.onAuth(username, email, password1, password2)
            } else {
                this.setState({
                    error: "the two password field dont match"
                })
            }
        }
    }

    render() {
        let email_errorMessage = null;
        let pass_errorMessage = null;
        let name_errorMessage = null;
        if (this.props.error) {
            if (this.props.error.password1) {
                pass_errorMessage = this.props.error.password1.map(error =>
                    <ul style={{color: 'red'}}>
                        {error}
                    </ul>
                )

            }
            if (this.props.error.email) {
                email_errorMessage =
                    <ul style={{color: 'red'}}>
                        {this.props.error.email
                        }
                    </ul>


            }
            if (this.props.error.username) {
                name_errorMessage =
                    <ul style={{color: 'red'}}>
                        {this.props.error.username}
                    </ul>

            }
        }
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
                                                        src="/static/assets/images/logo.svg" className="img-fluid"
                                                        alt="logo"/></Link>
                                                </div>
                                                <h4 className="text-primary my-4">Sign Up !</h4>
                                                <p style={{color: "red"}}>{this.state.error}</p>
                                                <div className="form-group">
                                                    <input type="text" className="form-control" id="username"
                                                           placeholder="Username" name={'username'} required/>
                                                    {name_errorMessage}
                                                </div>
                                                <div className="form-group">
                                                    <input type="email" name={'email'} className="form-control"
                                                           id="email"
                                                           placeholder="Email" required/>
                                                    {email_errorMessage}
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
                                                    {pass_errorMessage}
                                                </div>
                                                <div className="form-row mb-3">
                                                    <div className="col-sm-12">
                                                        <div className="custom-control custom-checkbox text-left">
                                                            <input type="checkbox" className="custom-control-input"
                                                                   id="terms" required/>
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
        error: state.auth.error
    }
};
const mapDispatchToProps = dispatch => {

    return {
        onAuth: (username, email, password1, password2) => dispatch(action.authSignup(username, email, password1, password2))
    }
};
export default connect(mapSateToProps, mapDispatchToProps)(withRouter(Register));