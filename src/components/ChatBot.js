import React, {Component} from 'react';
import WebSocketInstance from "../websocket";
import {connect} from "react-redux";

class ChatBot extends Component {
    state = {
        message: "",
        length: 1,
        loadmore: false,
        url: '',
        username: "",
        show_chat: false
    };

    constructor(props) {
        super(props);
        if (this.props.socket_active) {
            WebSocketInstance.disconnect();
        }
        this.initialiseChat();
    }

    initialiseChat() {
        if (this.props.socket_active) {
            WebSocketInstance.disconnect();
        }
        this.waitForSocketConnection(() => {
            WebSocketInstance.fetchMessages(
                this.props.username,
                this.props.username,
                this.state.length
            );
        });
        let user = this.props.username;
        if (!user) {
            user += "1"
        }
        WebSocketInstance.connect(user, this.state.length);
    }

    waitForSocketConnection(callback) {
        const component = this;
        setTimeout(function () {
            if (WebSocketInstance.state() === 1) {
                console.log("Connection is made");
                callback();

            } else {
                console.log("wait for connection...");
                component.waitForSocketConnection(callback);
            }
        }, 100);
    }

    messageChangeHandler = event => {
        this.setState({message: event.target.value});
    };

    sendMessageHandler = e => {
        e.preventDefault();
        const messageObject = {
            from: this.props.username,
            content: this.state.message,
            chatId: this.props.username
        };
        WebSocketInstance.newChatMessage(messageObject);
        this.setState({message: ""});
    };

    renderTimestamp = timestamp => {
        let prefix = "";
        const timeDiff = Math.round(
            (new Date().getTime() - new Date(timestamp).getTime()) / 60000
        );
        if (timeDiff < 1) {
            // less than one minute ago
            prefix = "just now...";
        } else if (timeDiff < 60 && timeDiff > 0) {
            // less than sixty minutes ago
            prefix = `${timeDiff} minutes ago`;
        } else if (timeDiff < 24 * 60 && timeDiff > 60) {
            // less than 24 hours ago
            prefix = `${Math.round(timeDiff / 60)} hours ago`;
        } else if (timeDiff < 31 * 24 * 60 && timeDiff > 24 * 60) {
            // less than 7 days ago
            prefix = `${Math.round(timeDiff / (60 * 24))} days ago`;
        } else {
            prefix = `${new Date(timestamp)}`;
            prefix = new Date(prefix).toLocaleDateString()
        }
        return prefix;
    };


    scrollToBottom = () => {
        this.messagesEnd1.scrollIntoView({behavior: "smooth"});
    };

    componentDidMount() {
        this.scrollToBottom();
    }

    componentDidUpdate() {
        this.scrollToBottom();
    }

    componentWillReceiveProps(newProps) {
        this.scrollToBottom();
        if (this.props.username) {
            if (this.state.username !== this.props.username) {
                WebSocketInstance.disconnect();
                this.waitForSocketConnection(() => {
                    WebSocketInstance.fetchMessages(
                        this.props.username,
                        this.props.username,
                        this.state.length
                    );
                });
                WebSocketInstance.connect(this.props.username, this.state.length);
                this.setState({
                    username: this.props.username,
                    show_chat: true
                });
            }
        }
    }

    render() {
        let profile_pic = process.env.PUBLIC_URL + "/static/images/user/userlisting/img-07.jpg";
        let renderMessages = messages => {
            const currentUser = this.props.username;
            if (messages) {
                return messages.map((message) => (
                    <div key={message.id}>
                        {
                            message.author.username === currentUser ?
                                <div className="chat-message chat-message-right">
                                    <div className="chat-message-text">
                                        <span>{message.text}</span>
                                    </div>
                                    <div className="chat-message-meta">
                                        <span>4:18 pm<i className="feather icon-check ml-2"/></span>
                                    </div>
                                </div> :
                                <div className="chat-message chat-message-left">
                                    <div className="chat-message-text">
                                        <span>{message.text}</span>
                                    </div>
                                    <div className="chat-message-meta">
                                        <span>4:20 pm<i className="feather icon-check ml-2"/></span>
                                    </div>
                                </div>
                        }
                    </div>
                ));
            } else {
                return <h3>loading messages...</h3>
            }
        };
        return (
            <div>
                <div className="chat-body">
                    <div className="tab-content" id="chat-listContent">
                        <div className="tab-pane fade show active" style={{marginBottom:"15px"}} id="chat-first" role="tabpanel"
                             aria-labelledby="chat-first-tab">
                            <div className="chat-day text-center mb-3">
                                <span className="badge badge-secondary-inverse">Today</span>
                            </div>
                            {
                                this.props.messages && renderMessages(this.props.messages)
                            }
                            <div style={{float: "left", clear: "both"}}
                                 ref={el => {
                                     this.messagesEnd1 = el;
                                 }}
                            />

                        </div>

                    </div>
                </div>
                <div className="chat-bottom">
                    <div className="chat-messagebar">
                        <form method={'post'} className="Ej-replaybox" onSubmit={this.sendMessageHandler}>
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <a href="index.html#" id="button-addonmic"><i
                                        className="feather icon-mic"/></a>
                                </div>
                                <input type="text" className="form-control" placeholder="Type a message..."
                                       aria-label="Text" value={this.state.message}
                                       onChange={this.messageChangeHandler}/>
                                <div className="input-group-append">
                                    <a href="javascript:;" className="mr-3" id="button-addonlink"><i
                                        className="feather icon-paperclip"/></a>
                                    <button style={{border:"0px",backgroundColor:"inherit",fontSize:"22px"}} type={'submit'} id="button-addonsend"><i
                                        className="feather icon-send"/></button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        username: state.auth.username,
        messages: state.message.messages
    };
};

export default connect(mapStateToProps)(ChatBot);
