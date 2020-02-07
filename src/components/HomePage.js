import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import * as action from '../store/actions/Auth'
import ChatBot from "./ChatBot";
import axios from 'axios'

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profile: {},
            user: {},
            show_prof: true
        }
    }

    componentDidMount() {
        let url = '/get-profile/';
        axios.defaults.xsrfCookieName = "csrftoken";
        axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: `Token ${localStorage.getItem('token')}`,
        };
        axios.get(url).then(
            res => {
                let profile = res.data,
                    user = res.data.user;
                this.setState({
                    profile: profile,
                    user: user
                })
            })

    }

    render() {
        let prof_show_opt = '',
            setting_show_opt = '',
            chat_show_opt = '';
        if (this.state.show_prof) {
            prof_show_opt = 'show active'
        }
        if (this.state.settings) {
            setting_show_opt = 'show active'
        }
        if (this.state.show_chat) {
            chat_show_opt = 'show active'
        }
        return (
            <div>
                <div className="modal error-screen-modal fade" id="errorScreen" tabIndex={-1} role="dialog"
                     aria-labelledby="errorScreenTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="errorScreenTitle">Connection Error</h5>
                            </div>
                            <div className="modal-body">
                                <img src="/static/assets/images/connection_error.svg" className="img-fluid"
                                     alt="connection_error"/>
                                <h5>Computer not Connected</h5>
                                <p>Please, check internet connection this PC.</p>
                                <button type="button" className="btn btn-info"><i className="feather icon-repeat mr-2"/>Try
                                    Again
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="chat-layout">
                    {/* Start Chat Leftbar */}
                    <div className="chat-leftbar">
                        <div className="tab-content" id="pills-tab-justifiedContent">
                            <div className={`tab-pane fade ${prof_show_opt}`} id="pills-profile-justified"
                                 role="tabpanel"
                                 aria-labelledby="pills-profile-tab-justified">
                                <div className="chat-profilebar">
                                    <div className="chat-left-headbar">
                                        <div className="row align-items-center">
                                            <div className="col-9">
                                                <ul className="list-unstyled mb-0">
                                                    <li className="media">
                                                        <img className="align-self-center mr-2"
                                                             src="/static/assets/images/logo.svg"
                                                             alt="Generic placeholder image"/>
                                                        <div className="media-body">
                                                            <h5 className="mb-0 mt-2">My Profile</h5>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-3">
                                                {
                                                    localStorage.getItem('token')?
                                                        <a href="#" onClick={this.props.authLogout} data-toggle="tooltip" data-placement="right"
                                                   title="Logout"><i className="feather icon-log-out"/></a>
                                                        :
                                                        <Link to="/login" data-toggle="tooltip" data-placement="right"
                                                   title="Logout"><i className="feather icon-log-out"/></Link>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    <div className="chat-left-body">
                                        <div className="profilebar">
                                            <img className="profile-pic img-fluid" src="/static/assets/images/men.svg"
                                                 alt="profile-pic"/>
                                            <div className="profile-edit">
                                                <i className="feather icon-camera upload-button"/>
                                                <input className="profile-upload" type="file" accept="image/*"/>
                                            </div>
                                            <h5>Will Patinson</h5>
                                            <p className="mb-0">Florida, USA</p>
                                        </div>
                                        <div className="profile-detail">
                                            <ul className="list-unstyled mb-0">
                                                <li className="media">
                                                    <i className="feather icon-user align-self-center"/>
                                                    <div className="media-body">
                                                        <p>Username</p>
                                                        <div className="input-group">
                                                            <input type="text" className="form-control"
                                                                   defaultValue="Will Patinson"
                                                                   aria-label="Will Patinson"
                                                                   aria-describedby="button-addon-group-username"/>
                                                            <div className="input-group-append">
                                                                <button className="btn btn-link" type="button"
                                                                        id="button-addon-group-username">Update
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="media">
                                                    <i className="feather icon-map align-self-center"/>
                                                    <div className="media-body">
                                                        <p>Location</p>
                                                        <div className="input-group">
                                                            <input type="text" className="form-control"
                                                                   defaultValue="Florida, USA" aria-label="Florida, USA"
                                                                   aria-describedby="button-addon-group-location"/>
                                                            <div className="input-group-append">
                                                                <button className="btn btn-link" type="button"
                                                                        id="button-addon-group-location">Update
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="media">
                                                    <i className="feather icon-message-square align-self-center"/>
                                                    <div className="media-body">
                                                        <p>Status</p>
                                                        <div className="input-group">
                                                            <input type="text" className="form-control"
                                                                   defaultValue="I am on Gappa."
                                                                   aria-label="I am on Gappa"
                                                                   aria-describedby="button-addon-group-status"/>
                                                            <div className="input-group-append">
                                                                <button className="btn btn-link" type="button"
                                                                        id="button-addon-group-status">Update
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="media">
                                                    <i className="feather icon-mail align-self-center"/>
                                                    <div className="media-body">
                                                        <p>Email ID</p>
                                                        <div className="input-group">
                                                            <input type="email" className="form-control"
                                                                   defaultValue="demo@example.com"
                                                                   aria-label="demo@example.com"
                                                                   aria-describedby="button-addon-group-emailid"/>
                                                            <div className="input-group-append">
                                                                <button className="btn btn-link" type="button"
                                                                        id="button-addon-group-emailid">Update
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="media">
                                                    <i className="feather icon-lock align-self-center"/>
                                                    <div className="media-body">
                                                        <p>Password</p>
                                                        <div className="input-group">
                                                            <input type="password" className="form-control"
                                                                   defaultValue="********" aria-label="********"
                                                                   aria-describedby="button-addon-group-password"/>
                                                            <div className="input-group-append">
                                                                <button className="btn btn-link" type="button"
                                                                        id="button-addon-group-password">Update
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={`tab-pane fade ${setting_show_opt}`} id="pills-setting-justified"
                                 role="tabpanel"
                                 aria-labelledby="pills-setting-tab-justified">
                                <div className="chat-settingbar">
                                    <div className="chat-left-headbar">
                                        <div className="row align-items-center">
                                            <div className="col-9">
                                                <ul className="list-unstyled mb-0">
                                                    <li className="media">
                                                        <img className="align-self-center mr-2"
                                                             src="/static/assets/images/logo.svg"
                                                             alt="Generic placeholder image"/>
                                                        <div className="media-body">
                                                            <h5 className="mb-0 mt-2">Setting</h5>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-3">
                                                {
                                                    localStorage.getItem('token')?
                                                        <a href="#" onClick={this.props.authLogout} data-toggle="tooltip" data-placement="right"
                                                   title="Logout"><i className="feather icon-log-out"/></a>
                                                        :
                                                        <Link to="/login" data-toggle="tooltip" data-placement="right"
                                                   title="Logout"><i className="feather icon-log-out"/></Link>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    <div className="chat-left-body">
                                        <p className="setting-header">General Settings</p>
                                        <div className="general-setting">
                                            <div className="row align-items-center pb-3">
                                                <div className="col-9"><h6 className="mb-0">Notification Sounds</h6>
                                                </div>
                                                <div className="col-3 text-right">
                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input"
                                                               id="notificationSound" defaultChecked/>
                                                        <label className="custom-control-label"
                                                               htmlFor="notificationSound"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row align-items-center pb-3">
                                                <div className="col-9"><h6 className="mb-0">New Message Alerts</h6>
                                                </div>
                                                <div className="col-3 text-right">
                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input"
                                                               id="newMessageAlerts"/>
                                                        <label className="custom-control-label"
                                                               htmlFor="newMessageAlerts"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row align-items-center pb-3">
                                                <div className="col-9"><h6 className="mb-0">Show Mini Messages in
                                                    Sidebar</h6></div>
                                                <div className="col-3 text-right">
                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input"
                                                               id="showMiniMessages"/>
                                                        <label className="custom-control-label"
                                                               htmlFor="showMiniMessages"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="setting-header">Privacy Settings</p>
                                        <div className="privacy-setting">
                                            <div className="row align-items-center pb-3">
                                                <div className="col-9"><h6 className="mb-0">Read Receipts</h6></div>
                                                <div className="col-3 text-right">
                                                    <div className="custom-control custom-switch">
                                                        <input type="checkbox" className="custom-control-input"
                                                               id="readReceipts" defaultChecked/>
                                                        <label className="custom-control-label" htmlFor="readReceipts"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row align-items-center pb-3">
                                                <div className="col-9"><h6 className="mb-0">Show Profile Picture</h6>
                                                </div>
                                                <div className="col-3 text-right">
                                                    <div className="custom-control custom-switch">
                                                        <input type="checkbox" className="custom-control-input"
                                                               id="showProfilePicture"/>
                                                        <label className="custom-control-label"
                                                               htmlFor="showProfilePicture"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row align-items-center pb-3">
                                                <div className="col-9"><h6 className="mb-0">Allow Messages from
                                                    Strangers</h6></div>
                                                <div className="col-3 text-right">
                                                    <div className="custom-control custom-switch">
                                                        <input type="checkbox" className="custom-control-input"
                                                               id="allowMessageToStrangers"/>
                                                        <label className="custom-control-label"
                                                               htmlFor="allowMessageToStrangers"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="setting-header">Design Settings</p>
                                        <div className="design-setting custom-checkbox-button">
                                            <div className="form-check-inline checkbox-primary">
                                                <input type="checkbox" id="customCheckboxInline5"
                                                       name="customCheckboxInline2" defaultChecked/>
                                                <label htmlFor="customCheckboxInline5"/>
                                            </div>
                                            <div className="form-check-inline checkbox-secondary">
                                                <input type="checkbox" id="customCheckboxInline6"
                                                       name="customCheckboxInline2"/>
                                                <label htmlFor="customCheckboxInline6"/>
                                            </div>
                                            <div className="form-check-inline checkbox-success">
                                                <input type="checkbox" id="customCheckboxInline7"
                                                       name="customCheckboxInline2"/>
                                                <label htmlFor="customCheckboxInline7"/>
                                            </div>
                                            <div className="form-check-inline checkbox-danger">
                                                <input type="checkbox" id="customCheckboxInline8"
                                                       name="customCheckboxInline2"/>
                                                <label htmlFor="customCheckboxInline8"/>
                                            </div>
                                            <div className="form-check-inline checkbox-warning">
                                                <input type="checkbox" id="customCheckboxInline9"
                                                       name="customCheckboxInline2"/>
                                                <label htmlFor="customCheckboxInline9"/>
                                            </div>
                                            <div className="form-check-inline checkbox-info">
                                                <input type="checkbox" id="customCheckboxInline10"
                                                       name="customCheckboxInline2"/>
                                                <label htmlFor="customCheckboxInline10"/>
                                            </div>
                                            <div className="form-check-inline checkbox-light">
                                                <input type="checkbox" id="customCheckboxInline11"
                                                       name="customCheckboxInline2"/>
                                                <label htmlFor="customCheckboxInline11"/>
                                            </div>
                                            <div className="form-check-inline checkbox-dark">
                                                <input type="checkbox" id="customCheckboxInline12"
                                                       name="customCheckboxInline2"/>
                                                <label htmlFor="customCheckboxInline12"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Chat Settingbar */}
                        </div>
                        <div className="chat-menu">
                            <ul className="nav nav-pills nav-justified mb-0" id="pills-tab-justified" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link" id="pills-profile-tab-justified" data-toggle="pill"
                                       href="#" role="tab" onClick={() => this.ChangeView('show_prof')}
                                       aria-controls="pills-profile-justified" aria-selected="false"><i
                                        className="feather icon-user"/></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="pills-setting-tab-justified" data-toggle="pill"
                                       href="#" role="tab" onClick={() => this.ChangeView('settings')}
                                       aria-controls="pills-setting-justified" aria-selected="false"><i
                                        className="feather icon-settings"/></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="chat-rightbar">
                        <div className="chat-detail">
                            <div className="chat-head">
                                <div className="row align-items-center">
                                    <div className="col-6">
                                        <ul className="list-unstyled mb-0">
                                            <li className="media">
                                                <div className="user-status"/>
                                                <img className="align-self-center rounded-circle"
                                                     src="/static/assets/images/girl.svg"
                                                     alt="Generic placeholder image"/>
                                                <div className="media-body">
                                                    <h5>{this.state.user.first_name} {this.state.user.last_name}</h5>
                                                    <p className="mb-0">Online</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-6">
                                        <ul className="list-inline float-right mb-0">
                                            <li className="list-inline-item">
                                                <a href="#" data-toggle="modal"
                                                   data-target="#incomingVoiceCall"><i className="feather icon-phone"/></a>
                                            </li>
                                            <li className="list-inline-item">
                                                <a href="#" data-toggle="modal"
                                                   data-target="#incomingVideoCall"><i className="feather icon-video"/></a>
                                            </li>
                                            <li className="list-inline-item">
                                                <div className="dropdown">
                                                    <a href="#" className id="chatDropdown"
                                                       data-toggle="dropdown" aria-haspopup="true"
                                                       aria-expanded="false"><i
                                                        className="feather icon-more-vertical-"/></a>
                                                    <div className="dropdown-menu dropdown-menu-right"
                                                         aria-labelledby="chatDropdown">
                                                        <a className="dropdown-item font-14" href="#"
                                                           id="view-user-info">View User Info</a>
                                                        <a className="dropdown-item font-14"
                                                           href="#">Search</a>
                                                        <a className="dropdown-item font-14"
                                                           href="#">Archive</a>
                                                        <a className="dropdown-item font-14" href="#">Mute</a>
                                                        <a className="dropdown-item font-14" href="#">Export
                                                            Chat</a>
                                                        <a className="dropdown-item font-14" href="#">Clear
                                                            Message</a>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-inline-item">
                                                <a href="#" className="back-arrow"><i
                                                    className="feather icon-x"/></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {
                                this.state.user.username ?
                                    <ChatBot profile={this.state.profile} username={this.state.user.username}
                                             user={this.state.user}/> :
                                    null
                            }
                        </div>
                        {/* End Chat Detail */}
                        {/* Start Chat User Info */}
                        <div className="chat-user-info">
                            <div className="chat-user-head">
                                <div className="row align-items-center">
                                    <div className="col-9">
                                        <h5>User Info</h5>
                                    </div>
                                    <div className="col-3">
                                        <ul className="list-inline float-right mb-0">
                                            <li className="list-inline-item">
                                                <a href="#" id="close-user-info"><i
                                                    className="feather icon-x"/></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="chat-user-body">
                                <div className="userbar">
                                    <img className="user-pic img-fluid" src="/static/assets/images/girl.svg"
                                         alt="user-pic"/>
                                    <h5>Emily Cook</h5>
                                    <p className="mb-0">New York, USA</p>
                                </div>
                                <div className="user-detail">
                                    <p className="user-detail-header">About</p>
                                    <div className="user-about">
                                        <h6><i className="feather icon-heart mr-2"/>Feeling good today.</h6>
                                        <h6 className="my-3"><i className="feather icon-mail mr-2"/>demo@example.com
                                        </h6>
                                        <h6 className="mb-0"><i className="feather icon-phone-call mr-2"/>+1 9876543210
                                        </h6>
                                    </div>
                                    <p className="user-detail-header">Social Profile</p>
                                    <div className="user-social">
                                        <ul className="list-inline mb-0">
                                            <li className="list-inline-item">
                                                <a href="#" className="facebook"><i
                                                    className="feather icon-facebook"/></a>
                                            </li>
                                            <li className="list-inline-item">
                                                <a href="#" className="twitter"><i
                                                    className="feather icon-twitter"/></a>
                                            </li>
                                            <li className="list-inline-item">
                                                <a href="#" className="instagram"><i
                                                    className="feather icon-instagram"/></a>
                                            </li>
                                        </ul>
                                    </div>
                                    <p className="user-detail-header">Media</p>
                                    <div className="user-media">
                                        <div className="user-media-slider">
                                            <div className="user-media-slider-item">
                                                <img src="/static/assets/images/media_01.png" className
                                                     alt="user-media"/>
                                            </div>
                                            <div className="user-media-slider-item">
                                                <img src="/static/assets/images/media_02.png" className
                                                     alt="user-media"/>
                                            </div>
                                            <div className="user-media-slider-item">
                                                <img src="/static/assets/images/media_03.png" className
                                                     alt="user-media"/>
                                            </div>
                                            <div className="user-media-slider-item">
                                                <img src="/static/assets/images/media_04.png" className
                                                     alt="user-media"/>
                                            </div>
                                            <div className="user-media-slider-item">
                                                <img src="/static/assets/images/pdf.svg" className alt="user-media"/>
                                            </div>
                                            <div className="user-media-slider-item">
                                                <img src="/static/assets/images/xls.svg" className alt="user-media"/>
                                            </div>
                                            <div className="user-media-slider-item">
                                                <img src="/static/assets/images/doc.svg" className alt="user-media"/>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="user-detail-header">Settings</p>
                                    <div className="user-setting">
                                        <div className="row align-items-center pb-3">
                                            <div className="col-9"><h6 className="mb-0">Mute Notifications</h6></div>
                                            <div className="col-3 text-right">
                                                <div className="custom-control custom-switch">
                                                    <input type="checkbox" className="custom-control-input"
                                                           id="muteNotification" defaultChecked/>
                                                    <label className="custom-control-label" htmlFor="muteNotification"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row align-items-center pb-3">
                                            <div className="col-9"><h6 className="mb-0">Block Contact</h6></div>
                                            <div className="col-3 text-right">
                                                <div className="custom-control custom-switch">
                                                    <input type="checkbox" className="custom-control-input"
                                                           id="blockContact"/>
                                                    <label className="custom-control-label" htmlFor="blockContact"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End Chat User Info */}
                    </div>
                    {/* End Chat Rightbar */}
                </div>
            </div>

        );
    }

    ChangeView = (settings) => {
        if (settings === 'settings') {
            this.setState({
                settings: true,
                show_prof: false,
                show_chat: false
            })
        } else if (settings === 'show_chat') {
            this.setState({
                settings: false,
                show_prof: false,
                show_chat: true
            })
        } else {
            this.setState({
                settings: false,
                show_prof: true,
                show_chat: false
            })
        }
    }
}

const mapStateToProps = (state) => {
    return {
        loading: state.loading,
        error: state.error
    }
};
const mapDispatchToProps = dispatch => {
    return {
        authLogout: event =>
            dispatch(action.logout())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(HomePage))