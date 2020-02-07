import React from "react";
import {connect} from "react-redux";
import {BrowserRouter as Router} from "react-router-dom";
import BaseRouter from "./routes";
import * as actions from "./store/actions/Auth";
import * as navActions from "./store/actions/nav";
import * as messageActions from "./store/actions/message";
import WebSocketInstance from "./websocket";
import HomePage from "./components/HomePage";
import Login from "./components/Login";
import Register from "./components/Register";
import ForgotPassword from "./components/ForgotPassword";

class App extends React.Component {
    constructor(props) {
        super(props);
        WebSocketInstance.addCallbacks(
            this.props.setMessages.bind(this),
            this.props.addMessage.bind(this)
        );
    }

    componentDidMount() {
        this.props.onTryAutoSignup();
    }

    render() {
        return (
            <Router>
                <BaseRouter exact path="/" comp={HomePage} {...this.props}
                            login={true}/>
                <BaseRouter exact path="/login" comp={Login} {...this.props}
                            login={false}/>
                <BaseRouter exact path="/register" comp={Register} {...this.props}
                            login={false}/>
                <BaseRouter exact path="/forgot-password" comp={ForgotPassword} {...this.props}
                            login={false}/>
            </Router>
        );
    }
}

const mapStateToProps = state => {
    return {
        showAddChatPopup: state.nav.showAddChatPopup,
        authenticated: state.auth.token
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onTryAutoSignup: () => dispatch(actions.authCheckState()),
        closeAddChatPopup: () => dispatch(navActions.closeAddChatPopup()),
        addMessage: message => dispatch(messageActions.addMessage(message)),
        setMessages: messages => dispatch(messageActions.setMessages(messages))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);