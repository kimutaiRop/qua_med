import React, {Component} from 'react';

class HomePage extends Component {
    render() {
        return (
            <div>
  <div className="modal create-group-modal fade" id="createGroup" tabIndex={-1} role="dialog" aria-labelledby="createGroupTitle" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="createGroupTitle">Create Group</h5>
        </div>
        <div className="modal-body">
          <form>
            <div className="form-group">
              <input type="text" className="form-control" id="groupName" placeholder="Enter Group Name" />
            </div>
            <div className="form-group">
              <textarea className="form-control" name="groupDesc" id="groupDesc" rows={3} placeholder="Enter Group Description" defaultValue={""} />
            </div>
            <p className="create-group-header">Add Users</p>
            <div className="added-users">
              <div className="avatar-group">
                <div className="avatar">
                  <a href="index.html#" data-toggle="tooltip" data-placement="top" title data-original-title="Emily Cook">
                    <img src="assets/images/girl.svg" alt="avatar" className="rounded-circle" />
                  </a>
                </div>
                <div className="avatar">
                  <a href="index.html#" data-toggle="tooltip" data-placement="top" title data-original-title="Lauren Gotlib">
                    <img src="assets/images/men.svg" alt="avatar" className="rounded-circle" />
                  </a>
                </div>
                <div className="avatar">
                  <a href="index.html#" data-toggle="tooltip" data-placement="top" title data-original-title="Noir Ajkeban">
                    <img src="assets/images/women.svg" alt="avatar" className="rounded-circle" />
                  </a>
                </div>
                <div className="avatar">
                  <a href="index.html#" data-toggle="tooltip" data-placement="top" title data-original-title="Add New User">
                    <img src="assets/images/plus.svg" alt="avatar" className="rounded-circle" />
                  </a>
                </div>
              </div>
            </div>
            <div className="add-users-search">
              <div className="input-group">
                <input type="search" className="form-control" placeholder="Search" aria-label="Search" aria-describedby="add-users-search-btn" />
                <div className="input-group-append">
                  <button className="btn" type="submit" id="add-users-search-btn"><i className="feather icon-search" /></button>
                </div>
              </div>
            </div>
            <div className="add-users-list">
              <ul className="list-unstyled">
                <li className="media">
                  <img className="align-self-center rounded-circle" src="assets/images/girl.svg" alt="Generic placeholder image" />
                  <div className="media-body">
                    <h5><span>Emily Cook</span></h5>
                    <p>Hey there. I am on Chalty.</p>
                  </div>
                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="userfirstAdd" defaultChecked />
                    <label className="custom-control-label" htmlFor="userfirstAdd" />
                  </div>
                </li>
                <li className="media">
                  <img className="align-self-center rounded-circle" src="assets/images/boy.svg" alt="Generic placeholder image" />
                  <div className="media-body">
                    <h5>James Simeron</h5>
                    <p>Work mode ON !!</p>
                  </div>
                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="usersecondAdd" />
                    <label className="custom-control-label" htmlFor="usersecondAdd" />
                  </div>
                </li>
                <li className="media">
                  <img className="align-self-center rounded-circle" src="assets/images/men.svg" alt="Generic placeholder image" />
                  <div className="media-body">
                    <h5>Lauren Gotlib</h5>
                    <p>Let's go hiking.</p>
                  </div>
                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="userthirdAdd" defaultChecked />
                    <label className="custom-control-label" htmlFor="userthirdAdd" />
                  </div>
                </li>
                <li className="media">
                  <img className="align-self-center rounded-circle" src="assets/images/girl.svg" alt="Generic placeholder image" />
                  <div className="media-body">
                    <h5>Nebraska Oshivo</h5>
                    <p>Why so serious ?</p>
                  </div>
                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="userfourthAdd" />
                    <label className="custom-control-label" htmlFor="userfourthAdd" />
                  </div>
                </li>
                <li className="media">
                  <img className="align-self-center rounded-circle" src="assets/images/women.svg" alt="Generic placeholder image" />
                  <div className="media-body">
                    <h5>Noir Ajkeban</h5>
                    <p> ** No Status **</p>
                  </div>
                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="userfifthAdd" defaultChecked />
                    <label className="custom-control-label" htmlFor="userfifthAdd" />
                  </div>
                </li>
                <li className="media">
                  <img className="align-self-center rounded-circle" src="assets/images/boy.svg" alt="Generic placeholder image" />
                  <div className="media-body">
                    <h5><span>John Smith</span></h5>
                    <p>Hey there. I am on Chalty.</p>
                  </div>
                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="userSixthAdd" defaultChecked />
                    <label className="custom-control-label" htmlFor="userSixthAdd" />
                  </div>
                </li>
                <li className="media">
                  <img className="align-self-center rounded-circle" src="assets/images/girl.svg" alt="Generic placeholder image" />
                  <div className="media-body">
                    <h5>Arya Thompson</h5>
                    <p>Work mode ON !!</p>
                  </div>
                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="userSeventhdAdd" />
                    <label className="custom-control-label" htmlFor="userSeventhdAdd" />
                  </div>
                </li>
                <li className="media">
                  <img className="align-self-center rounded-circle" src="assets/images/men.svg" alt="Generic placeholder image" />
                  <div className="media-body">
                    <h5>Mike Wright</h5>
                    <p>Let's go hiking.</p>
                  </div>
                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="userEightAdd" />
                    <label className="custom-control-label" htmlFor="userEightAdd" />
                  </div>
                </li>
                <li className="media">
                  <img className="align-self-center rounded-circle" src="assets/images/boy.svg" alt="Generic placeholder image" />
                  <div className="media-body">
                    <h5>Robert Pattinson</h5>
                    <p>Why so serious ?</p>
                  </div>
                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="userNinthAdd" />
                    <label className="custom-control-label" htmlFor="userNinthAdd" />
                  </div>
                </li>
                <li className="media">
                  <img className="align-self-center rounded-circle" src="assets/images/women.svg" alt="Generic placeholder image" />
                  <div className="media-body">
                    <h5>Seema Rao</h5>
                    <p> ** No Status **</p>
                  </div>
                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="userTenthAdd" />
                    <label className="custom-control-label" htmlFor="userTenthAdd" />
                  </div>
                </li>
                <li className="media">
                  <img className="align-self-center rounded-circle" src="assets/images/girl.svg" alt="Generic placeholder image" />
                  <div className="media-body">
                    <h5>Noir Williamson</h5>
                    <p> ** No Status **</p>
                  </div>
                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="userEleventhAdd" />
                    <label className="custom-control-label" htmlFor="userEleventhAdd" />
                  </div>
                </li>
              </ul>
            </div>
            <div className="mt-3 text-center">
              <button type="submit" className="btn btn-primary"><i className="feather icon-plus mr-2" />Create Group</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  {/* End Incoming Video Call Modal */}
  {/* Start Incoming Video Call Modal */}
  <div className="modal incoming-video-modal fade" id="incomingVideoCall" tabIndex={-1} role="dialog" aria-labelledby="incomingVideoCallTitle" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title text-white" id="incomingVideoCallTitle">Incoming Video Call</h5>
        </div>
        <div className="modal-body">
          <img src="assets/images/girl.svg" alt="avatar" className="rounded-circle" />
          <h5 className="text-white">Jessica Meir</h5>
          <p className="text-white">Texas, USA</p>
          <button type="button" className="btn btn-success mr-3"><i className="feather icon-check mr-2" />Accept</button>
          <button type="button" className="btn btn-danger" data-dismiss="modal"><i className="feather icon-x mr-2" />Reject</button>
        </div>
      </div>
    </div>
  </div>
  {/* End Incoming Video Call Modal */}
  {/* Start Incoming Voice Call Modal */}
  <div className="modal incoming-voice-modal fade" id="incomingVoiceCall" tabIndex={-1} role="dialog" aria-labelledby="incomingVoiceCallTitle" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="incomingVoiceCallTitle">Incoming Voice Call</h5>
        </div>
        <div className="modal-body">
          <img src="assets/images/men.svg" alt="avatar" className="rounded-circle" />
          <h5>Jessica Meir</h5>
          <p>Texas, USA</p>
          <button type="button" className="btn btn-success mr-3"><i className="feather icon-check mr-2" />Accept</button>
          <button type="button" className="btn btn-danger" data-dismiss="modal"><i className="feather icon-x mr-2" />Reject</button>
        </div>
      </div>
    </div>
  </div>
  {/* End Incoming Voice Call Modal */}
  {/* Start Error Screen Modal */}
  <div className="modal error-screen-modal fade" id="errorScreen" tabIndex={-1} role="dialog" aria-labelledby="errorScreenTitle" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="errorScreenTitle">Connection Error</h5>
        </div>
        <div className="modal-body">
          <img src="assets/images/connection_error.svg" className="img-fluid" alt="connection_error" />
          <h5>Computer not Connected</h5>
          <p>Please, check internet connection this PC.</p>
          <button type="button" className="btn btn-info"><i className="feather icon-repeat mr-2" />Try Again</button>
        </div>
      </div>
    </div>
  </div>
  {/* End Incoming Voice Call Modal */}
  {/* Start Chat Layout */}
  <div className="chat-layout">
    {/* Start Chat Leftbar */}
    <div className="chat-leftbar">
      <div className="tab-content" id="pills-tab-justifiedContent">
        {/* Start Chat Listbar */}
        <div className="tab-pane fade show active" id="pills-chat-justified" role="tabpanel" aria-labelledby="pills-chat-tab-justified">
          <div className="chat-listbar">
            <div className="chat-left-headbar">
              <div className="row align-items-center">
                <div className="col-9">
                  <ul className="list-unstyled mb-0">
                    <li className="media">
                      <img className="align-self-center mr-2" src="assets/images/logo.svg" alt="Generic placeholder image" />
                      <div className="media-body">
                        <h5 className="mb-0 mt-2">Chat</h5>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="col-3">
                  <a href="/login" data-toggle="tooltip" data-placement="right" title="Logout"><i className="feather icon-log-out" /></a>
                </div>
              </div>
            </div>
            <div className="chat-left-search">
              <form>
                <div className="input-group">
                  <input type="search" className="form-control" placeholder="Search" aria-label="Search" aria-describedby="chat-left-search-btn" />
                  <div className="input-group-append">
                    <button className="btn" type="submit" id="chat-left-search-btn"><i className="feather icon-search" /></button>
                  </div>
                </div>
              </form>
            </div>
            <div className="chat-left-body">
              <div className="nav flex-column nav-pills chat-userlist" id="chat-list-tab" role="tablist" aria-orientation="vertical">
                <a className="nav-link active" id="chat-first-tab" data-toggle="pill" href="index.html#chat-first" role="tab" aria-controls="chat-first" aria-selected="true">
                  <div className="media active">
                    <div className="user-status" />
                    <img className="align-self-center rounded-circle" src="assets/images/girl.svg" alt="User Image" />
                    <div className="media-body">
                      <h5>Emily Cook<span className="chat-timing">02:30 pm</span></h5>
                      <p>Waiting for module 1 to finish...</p>
                    </div>
                  </div>
                </a>
                <a className="nav-link" id="chat-second-tab" data-toggle="pill" href="index.html#chat-second" role="tab" aria-controls="chat-second" aria-selected="false">
                  <div className="media">
                    <img className="align-self-center rounded-circle" src="assets/images/boy.svg" alt="User Image" />
                    <div className="media-body">
                      <h5>James Simeron<span className="chat-timing">Today</span></h5>
                      <p>Send your CV for more info...</p>
                    </div>
                  </div>
                </a>
                <a className="nav-link" id="chat-third-tab" data-toggle="pill" href="index.html#chat-third" role="tab" aria-controls="chat-third" aria-selected="false">
                  <div className="media">
                    <div className="user-status status-offline" />
                    <img className="align-self-center rounded-circle" src="assets/images/men.svg" alt="User Image" />
                    <div className="media-body">
                      <h5>Lauren Gotlib<span className="badge badge-primary ml-2">5</span><span className="chat-timing">Oct 08</span></h5>
                      <p>Hi</p>
                    </div>
                  </div>
                </a>
                <a className="nav-link" id="chat-fourth-tab" data-toggle="pill" href="index.html#chat-fourth" role="tab" aria-controls="chat-fourth" aria-selected="false">
                  <div className="media">
                    <img className="align-self-center rounded-circle" src="assets/images/women.svg" alt="User Image" />
                    <div className="media-body">
                      <h5>Nebraska Oshivo<span className="chat-timing">Sep 25</span></h5>
                      <p>Could you please send PDF?</p>
                    </div>
                  </div>
                </a>
                <a className="nav-link" id="chat-fifth-tab" data-toggle="pill" href="index.html#chat-fifth" role="tab" aria-controls="chat-fifth" aria-selected="false">
                  <div className="media">
                    <div className="user-status status-away" />
                    <img className="align-self-center rounded-circle" src="assets/images/girl.svg" alt="User Image" />
                    <div className="media-body">
                      <h5>Noir Ajkeban<span className="badge badge-primary ml-2">8</span> <span className="chat-timing">Sep 10</span></h5>
                      <p>See you at the Lunch...</p>
                    </div>
                  </div>
                </a>
                <a className="nav-link" id="chat-sixth-tab" data-toggle="pill" href="index.html#chat-sixth" role="tab" aria-controls="chat-sixth" aria-selected="false">
                  <div className="media">
                    <img className="align-self-center rounded-circle" src="assets/images/boy.svg" alt="User Image" />
                    <div className="media-body">
                      <h5>Will Patinson<span className="chat-timing">Sep 08</span></h5>
                      <p>Where have you been?</p>
                    </div>
                  </div>
                </a>
                <a className="nav-link" id="chat-seventh-tab" data-toggle="pill" href="index.html#chat-seventh" role="tab" aria-controls="chat-seventh" aria-selected="false">
                  <div className="media">
                    <img className="align-self-center rounded-circle" src="assets/images/girl.svg" alt="User Image" />
                    <div className="media-body">
                      <h5>Simran Kaur<span className="badge badge-primary ml-2">3</span> <span className="chat-timing">Sep 07</span></h5>
                      <p>I sent app proposal to you.</p>
                    </div>
                  </div>
                </a>
                <a className="nav-link" id="chat-eighth-tab" data-toggle="pill" href="index.html#chat-eighth" role="tab" aria-controls="chat-eighth" aria-selected="false">
                  <div className="media">
                    <img className="align-self-center rounded-circle" src="assets/images/women.svg" alt="User Image" />
                    <div className="media-body">
                      <h5>Courtney Cox<span className="chat-timing">Sep 05</span></h5>
                      <p>Please, revert on issues.</p>
                    </div>
                  </div>
                </a>
                <a className="nav-link" id="chat-ninth-tab" data-toggle="pill" href="index.html#chat-ninth" role="tab" aria-controls="chat-ninth" aria-selected="false">
                  <div className="media">
                    <img className="align-self-center rounded-circle" src="assets/images/men.svg" alt="User Image" />
                    <div className="media-body">
                      <h5>Andrew Garfield<span className="chat-timing">Aug 25</span></h5>
                      <p>Your presence is awaited...</p>
                    </div>
                  </div>
                </a>
                <a className="nav-link" id="chat-tenth-tab" data-toggle="pill" href="index.html#chat-tenth" role="tab" aria-controls="chat-tenth" aria-selected="false">
                  <div className="media">
                    <img className="align-self-center rounded-circle" src="assets/images/girl.svg" alt="User Image" />
                    <div className="media-body">
                      <h5>Rose Witherspoon<span className="chat-timing">Aug 18</span></h5>
                      <p>Fanfest is coming...</p>
                    </div>
                  </div>
                </a>
                <a className="nav-link" id="chat-eleventh-tab" data-toggle="pill" href="index.html#chat-eleventh" role="tab" aria-controls="chat-eleventh" aria-selected="false">
                  <div className="media">
                    <img className="align-self-center rounded-circle" src="assets/images/women.svg" alt="User Image" />
                    <div className="media-body">
                      <h5>Seema Roy<span className="chat-timing">Aug 11</span></h5>
                      <p>Bye. Tc...</p>
                    </div>
                  </div>
                </a>
                <a className="nav-link" id="chat-twelth-tab" data-toggle="pill" href="index.html#chat-twelth" role="tab" aria-controls="chat-twelth" aria-selected="false">
                  <div className="media">
                    <img className="align-self-center rounded-circle" src="assets/images/boy.svg" alt="User Image" />
                    <div className="media-body">
                      <h5>Anand Kumar<span className="badge badge-primary ml-2">2</span> <span className="chat-timing">Aug 03</span></h5>
                      <p>I see</p>
                    </div>
                  </div>
                </a>
                <a className="nav-link" id="chat-thirteenth-tab" data-toggle="pill" href="index.html#chat-thirteenth" role="tab" aria-controls="chat-thirteenth" aria-selected="false">
                  <div className="media">
                    <img className="align-self-center rounded-circle" src="assets/images/men.svg" alt="User Image" />
                    <div className="media-body">
                      <h5>Vladimir Jeir<span className="chat-timing">Jul 28</span></h5>
                      <p>When are you coming home?</p>
                    </div>
                  </div>
                </a>
                <a className="nav-link" id="chat-fourtinth-tab" data-toggle="pill" href="index.html#chat-fourtinth" role="tab" aria-controls="chat-fourtinth" aria-selected="false">
                  <div className="media">
                    <img className="align-self-center rounded-circle" src="assets/images/girl.svg" alt="User Image" />
                    <div className="media-body">
                      <h5>Jessica Meir<span className="chat-timing">Jul 21</span></h5>
                      <p>Hmmmm</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* End Chat Listbar */}
        {/* Start Chat Addbar */}
        <div className="tab-pane fade" id="pills-addchat-justified" role="tabpanel" aria-labelledby="pills-addchat-tab-justified">
          <div className="chat-addbar">
            <div className="chat-left-headbar">
              <div className="row align-items-center">
                <div className="col-9">
                  <ul className="list-unstyled mb-0">
                    <li className="media">
                      <img className="align-self-center mr-2" src="assets/images/logo.svg" alt="Generic placeholder image" />
                      <div className="media-body">
                        <h5 className="mb-0 mt-2">New Chat</h5>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="col-3">
                  <a href="index.html#" data-toggle="modal" data-target="#createGroup"><i className="feather icon-users" /></a>
                </div>
              </div>
            </div>
            <div className="chat-left-search">
              <form>
                <div className="input-group">
                  <input type="search" className="form-control" placeholder="Search" aria-label="Search" aria-describedby="chat-left-search-user-btn" />
                  <div className="input-group-append">
                    <button className="btn" type="submit" id="chat-left-search-user-btn"><i className="feather icon-search" /></button>
                  </div>
                </div>
              </form>
            </div>
            <div className="chat-left-body">
              <div className="nav flex-column nav-pills chat-userlist" id="new-chat-tab" role="tablist" aria-orientation="vertical">
                <a className="nav-link active" id="new-chat-first-tab" data-toggle="pill" href="index.html#" role="tab" aria-selected="true">
                  <div className="media">
                    <img className="align-self-center rounded-circle" src="assets/images/men.svg" alt="User Image" />
                    <div className="media-body">
                      <h5>John Doe</h5>
                      <p>Hey there. I am on Chalty.</p>
                    </div>
                  </div>
                </a>
                <a className="nav-link" id="new-chat-second-tab" data-toggle="pill" href="index.html#" role="tab" aria-selected="false">
                  <div className="media">
                    <img className="align-self-center rounded-circle" src="assets/images/women.svg" alt="User Image" />
                    <div className="media-body">
                      <h5>Ema Star</h5>
                      <p>Work mode ON !!</p>
                    </div>
                  </div>
                </a>
                <a className="nav-link" id="new-chat-third-tab" data-toggle="pill" href="index.html#" role="tab" aria-selected="false">
                  <div className="media">
                    <img className="align-self-center rounded-circle" src="assets/images/boy.svg" alt="User Image" />
                    <div className="media-body">
                      <h5>Roger Day</h5>
                      <p>Let's go hiking.</p>
                    </div>
                  </div>
                </a>
                <a className="nav-link" id="new-chat-fourth-tab" data-toggle="pill" href="index.html#" role="tab" aria-selected="false">
                  <div className="media">
                    <img className="align-self-center rounded-circle" src="assets/images/men.svg" alt="User Image" />
                    <div className="media-body">
                      <h5>Paul Taylor</h5>
                      <p>Why so serious ?</p>
                    </div>
                  </div>
                </a>
                <a className="nav-link" id="new-chat-fifth-tab" data-toggle="pill" href="index.html#" role="tab" aria-selected="false">
                  <div className="media">
                    <img className="align-self-center rounded-circle" src="assets/images/girl.svg" alt="User Image" />
                    <div className="media-body">
                      <h5>Cary Peck</h5>
                      <p> ** No Status **</p>
                    </div>
                  </div>
                </a>
                <a className="nav-link" id="new-chat-sixth-tab" data-toggle="pill" href="index.html#" role="tab" aria-selected="false">
                  <div className="media">
                    <img className="align-self-center rounded-circle" src="assets/images/women.svg" alt="User Image" />
                    <div className="media-body">
                      <h5>Meghan Murphy</h5>
                      <p>Feeling happy...</p>
                    </div>
                  </div>
                </a>
                <a className="nav-link" id="new-chat-seventh-tab" data-toggle="pill" href="index.html#" role="tab" aria-selected="false">
                  <div className="media">
                    <img className="align-self-center rounded-circle" src="assets/images/boy.svg" alt="User Image" />
                    <div className="media-body">
                      <h5>Sansa Smith</h5>
                      <p>World is Selfish.</p>
                    </div>
                  </div>
                </a>
                <a className="nav-link" id="new-chat-eighth-tab" data-toggle="pill" href="index.html#" role="tab" aria-selected="false">
                  <div className="media">
                    <img className="align-self-center rounded-circle" src="assets/images/girl.svg" alt="User Image" />
                    <div className="media-body">
                      <h5>Jelly Witherspoon</h5>
                      <p>Best day of my life.</p>
                    </div>
                  </div>
                </a>
                <a className="nav-link" id="new-chat-ninth-tab" data-toggle="pill" href="index.html#" role="tab" aria-selected="false">
                  <div className="media">
                    <img className="align-self-center rounded-circle" src="assets/images/men.svg" alt="User Image" />
                    <div className="media-body">
                      <h5>Loy Diesel</h5>
                      <p>Hoping for better tomorrow.</p>
                    </div>
                  </div>
                </a>
                <a className="nav-link" id="new-chat-tenth-tab" data-toggle="pill" href="index.html#" role="tab" aria-selected="false">
                  <div className="media">
                    <img className="align-self-center rounded-circle" src="assets/images/boy.svg" alt="User Image" />
                    <div className="media-body">
                      <h5>Sham Chaterjee</h5>
                      <p>No Status</p>
                    </div>
                  </div>
                </a>
                <a className="nav-link" id="new-chat-eleventh-tab" data-toggle="pill" href="index.html#" role="tab" aria-selected="false">
                  <div className="media">
                    <img className="align-self-center rounded-circle" src="assets/images/girl.svg" alt="User Image" />
                    <div className="media-body">
                      <h5>Krishna Nayar</h5>
                      <p>Looking for Graphics Designer.</p>
                    </div>
                  </div>
                </a>
                <a className="nav-link" id="new-chat-twelth-tab" data-toggle="pill" href="index.html#" role="tab" aria-selected="false">
                  <div className="media">
                    <img className="align-self-center rounded-circle" src="assets/images/men.svg" alt="User Image" />
                    <div className="media-body">
                      <h5>Arjun Lohia</h5>
                      <p>Mood Off</p>
                    </div>
                  </div>
                </a>
                <a className="nav-link" id="new-chat-thirteenth-tab" data-toggle="pill" href="index.html#" role="tab" aria-selected="false">
                  <div className="media">
                    <img className="align-self-center rounded-circle" src="assets/images/boy.svg" alt="User Image" />
                    <div className="media-body">
                      <h5>Mike Spencer</h5>
                      <p>It's School time</p>
                    </div>
                  </div>
                </a>
                <a className="nav-link" id="new-chat-fourthinth-tab" data-toggle="pill" href="index.html#" role="tab" aria-selected="false">
                  <div className="media">
                    <img className="align-self-center rounded-circle" src="assets/images/men.svg" alt="User Image" />
                    <div className="media-body">
                      <h5>Tom Cruz</h5>
                      <p>New Job. New Asporations.</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* End Chat Addbar */}
        {/* Start Chat Profilebar */}
        <div className="tab-pane fade" id="pills-profile-justified" role="tabpanel" aria-labelledby="pills-profile-tab-justified">
          <div className="chat-profilebar">
            <div className="chat-left-headbar">
              <div className="row align-items-center">
                <div className="col-12">
                  <ul className="list-unstyled mb-0">
                    <li className="media">
                      <img className="align-self-center mr-2" src="assets/images/logo.svg" alt="Generic placeholder image" />
                      <div className="media-body">
                        <h5 className="mb-0 mt-2">My Profile</h5>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="chat-left-body">
              <div className="profilebar">
                <img className="profile-pic img-fluid" src="assets/images/men.svg" alt="profile-pic" />
                <div className="profile-edit">
                  <i className="feather icon-camera upload-button" />
                  <input className="profile-upload" type="file" accept="image/*" />
                </div>
                <h5>Will Patinson</h5>
                <p className="mb-0">Florida, USA</p>
              </div>
              <div className="profile-detail">
                <ul className="list-unstyled mb-0">
                  <li className="media">
                    <i className="feather icon-user align-self-center" />
                    <div className="media-body">
                      <p>Username</p>
                      <div className="input-group">
                        <input type="text" className="form-control" defaultValue="Will Patinson" aria-label="Will Patinson" aria-describedby="button-addon-group-username" />
                        <div className="input-group-append">
                          <button className="btn btn-link" type="button" id="button-addon-group-username">Update</button>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="media">
                    <i className="feather icon-map align-self-center" />
                    <div className="media-body">
                      <p>Location</p>
                      <div className="input-group">
                        <input type="text" className="form-control" defaultValue="Florida, USA" aria-label="Florida, USA" aria-describedby="button-addon-group-location" />
                        <div className="input-group-append">
                          <button className="btn btn-link" type="button" id="button-addon-group-location">Update</button>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="media">
                    <i className="feather icon-message-square align-self-center" />
                    <div className="media-body">
                      <p>Status</p>
                      <div className="input-group">
                        <input type="text" className="form-control" defaultValue="I am on Gappa." aria-label="I am on Gappa" aria-describedby="button-addon-group-status" />
                        <div className="input-group-append">
                          <button className="btn btn-link" type="button" id="button-addon-group-status">Update</button>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="media">
                    <i className="feather icon-mail align-self-center" />
                    <div className="media-body">
                      <p>Email ID</p>
                      <div className="input-group">
                        <input type="email" className="form-control" defaultValue="demo@example.com" aria-label="demo@example.com" aria-describedby="button-addon-group-emailid" />
                        <div className="input-group-append">
                          <button className="btn btn-link" type="button" id="button-addon-group-emailid">Update</button>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="media">
                    <i className="feather icon-lock align-self-center" />
                    <div className="media-body">
                      <p>Password</p>
                      <div className="input-group">
                        <input type="password" className="form-control" defaultValue="********" aria-label="********" aria-describedby="button-addon-group-password" />
                        <div className="input-group-append">
                          <button className="btn btn-link" type="button" id="button-addon-group-password">Update</button>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* End Chat Profilebar */}
        {/* Start Chat Settingbar */}
        <div className="tab-pane fade" id="pills-setting-justified" role="tabpanel" aria-labelledby="pills-setting-tab-justified">
          <div className="chat-settingbar">
            <div className="chat-left-headbar">
              <div className="row align-items-center">
                <div className="col-9">
                  <ul className="list-unstyled mb-0">
                    <li className="media">
                      <img className="align-self-center mr-2" src="assets/images/logo.svg" alt="Generic placeholder image" />
                      <div className="media-body">
                        <h5 className="mb-0 mt-2">Setting</h5>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="col-3">
                  <div className="dropdown">
                    <a href="index.html#" id="settingDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="feather icon-more-vertical-" /></a>
                    <div className="dropdown-menu dropdown-menu-right" aria-labelledby="settingDropdown">
                      <a className="dropdown-item font-14" href="index.html#">Reset to Defaults</a>
                      <a className="dropdown-item font-14" href="index.html#">Backup</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="chat-left-body">
              <p className="setting-header">General Settings</p>
              <div className="general-setting">
                <div className="row align-items-center pb-3">
                  <div className="col-9"><h6 className="mb-0">Notification Sounds</h6></div>
                  <div className="col-3 text-right">
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" id="notificationSound" defaultChecked />
                      <label className="custom-control-label" htmlFor="notificationSound" />
                    </div>
                  </div>
                </div>
                <div className="row align-items-center pb-3">
                  <div className="col-9"><h6 className="mb-0">New Message Alerts</h6></div>
                  <div className="col-3 text-right">
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" id="newMessageAlerts" />
                      <label className="custom-control-label" htmlFor="newMessageAlerts" />
                    </div>
                  </div>
                </div>
                <div className="row align-items-center pb-3">
                  <div className="col-9"><h6 className="mb-0">Show Mini Messages in Sidebar</h6></div>
                  <div className="col-3 text-right">
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" id="showMiniMessages" />
                      <label className="custom-control-label" htmlFor="showMiniMessages" />
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
                      <input type="checkbox" className="custom-control-input" id="readReceipts" defaultChecked />
                      <label className="custom-control-label" htmlFor="readReceipts" />
                    </div>
                  </div>
                </div>
                <div className="row align-items-center pb-3">
                  <div className="col-9"><h6 className="mb-0">Show Profile Picture</h6></div>
                  <div className="col-3 text-right">
                    <div className="custom-control custom-switch">
                      <input type="checkbox" className="custom-control-input" id="showProfilePicture" />
                      <label className="custom-control-label" htmlFor="showProfilePicture" />
                    </div>
                  </div>
                </div>
                <div className="row align-items-center pb-3">
                  <div className="col-9"><h6 className="mb-0">Allow Messages from Strangers</h6></div>
                  <div className="col-3 text-right">
                    <div className="custom-control custom-switch">
                      <input type="checkbox" className="custom-control-input" id="allowMessageToStrangers" />
                      <label className="custom-control-label" htmlFor="allowMessageToStrangers" />
                    </div>
                  </div>
                </div>
              </div>
              <p className="setting-header">Design Settings</p>
              <div className="design-setting custom-checkbox-button">
                <div className="form-check-inline checkbox-primary">
                  <input type="checkbox" id="customCheckboxInline5" name="customCheckboxInline2" defaultChecked />
                  <label htmlFor="customCheckboxInline5" />
                </div>
                <div className="form-check-inline checkbox-secondary">
                  <input type="checkbox" id="customCheckboxInline6" name="customCheckboxInline2" />
                  <label htmlFor="customCheckboxInline6" />
                </div>
                <div className="form-check-inline checkbox-success">
                  <input type="checkbox" id="customCheckboxInline7" name="customCheckboxInline2" />
                  <label htmlFor="customCheckboxInline7" />
                </div>
                <div className="form-check-inline checkbox-danger">
                  <input type="checkbox" id="customCheckboxInline8" name="customCheckboxInline2" />
                  <label htmlFor="customCheckboxInline8" />
                </div>
                <div className="form-check-inline checkbox-warning">
                  <input type="checkbox" id="customCheckboxInline9" name="customCheckboxInline2" />
                  <label htmlFor="customCheckboxInline9" />
                </div>
                <div className="form-check-inline checkbox-info">
                  <input type="checkbox" id="customCheckboxInline10" name="customCheckboxInline2" />
                  <label htmlFor="customCheckboxInline10" />
                </div>
                <div className="form-check-inline checkbox-light">
                  <input type="checkbox" id="customCheckboxInline11" name="customCheckboxInline2" />
                  <label htmlFor="customCheckboxInline11" />
                </div>
                <div className="form-check-inline checkbox-dark">
                  <input type="checkbox" id="customCheckboxInline12" name="customCheckboxInline2" />
                  <label htmlFor="customCheckboxInline12" />
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
            <a className="nav-link active" id="pills-chat-tab-justified" data-toggle="pill" href="index.html#pills-chat-justified" role="tab" aria-controls="pills-chat-justified" aria-selected="true"><i className="feather icon-message-circle" /></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id="pills-addchat-tab-justified" data-toggle="pill" href="index.html#pills-addchat-justified" role="tab" aria-controls="pills-addchat-justified" aria-selected="false"><i className="feather icon-edit-1" /></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id="pills-profile-tab-justified" data-toggle="pill" href="index.html#pills-profile-justified" role="tab" aria-controls="pills-profile-justified" aria-selected="false"><i className="feather icon-user" /></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id="pills-setting-tab-justified" data-toggle="pill" href="index.html#pills-setting-justified" role="tab" aria-controls="pills-setting-justified" aria-selected="false"><i className="feather icon-settings" /></a>
          </li>
        </ul>
      </div>
    </div>
    {/* End Chat Leftbar */}
    {/* Start Chat Rightbar */}
    <div className="chat-rightbar">
      {/* Start Chat Detail */}
      <div className="chat-detail">
        <div className="chat-head">
          <div className="row align-items-center">
            <div className="col-6">
              <ul className="list-unstyled mb-0">
                <li className="media">
                  <div className="user-status" />
                  <img className="align-self-center rounded-circle" src="assets/images/girl.svg" alt="Generic placeholder image" />
                  <div className="media-body">
                    <h5>Emily Cook</h5>
                    <p className="mb-0">Online</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-6">
              <ul className="list-inline float-right mb-0">
                <li className="list-inline-item">
                  <a href="index.html#" data-toggle="modal" data-target="#incomingVoiceCall"><i className="feather icon-phone" /></a>
                </li>
                <li className="list-inline-item">
                  <a href="index.html#" data-toggle="modal" data-target="#incomingVideoCall"><i className="feather icon-video" /></a>
                </li>
                <li className="list-inline-item">
                  <div className="dropdown">
                    <a href="index.html#" className id="chatDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="feather icon-more-vertical-" /></a>
                    <div className="dropdown-menu dropdown-menu-right" aria-labelledby="chatDropdown">
                      <a className="dropdown-item font-14" href="index.html#" id="view-user-info">View User Info</a>
                      <a className="dropdown-item font-14" href="index.html#">Search</a>
                      <a className="dropdown-item font-14" href="index.html#">Archive</a>
                      <a className="dropdown-item font-14" href="index.html#">Mute</a>
                      <a className="dropdown-item font-14" href="index.html#">Export Chat</a>
                      <a className="dropdown-item font-14" href="index.html#">Clear Message</a>
                    </div>
                  </div>
                </li>
                <li className="list-inline-item">
                  <a href="index.html#" className="back-arrow"><i className="feather icon-x" /></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="chat-body">
          <div className="tab-content" id="chat-listContent">
            <div className="tab-pane fade show active" id="chat-first" role="tabpanel" aria-labelledby="chat-first-tab">
              <div className="chat-day text-center mb-3">
                <span className="badge badge-secondary-inverse">Today</span>
              </div>
              <div className="chat-message chat-message-right">
                <div className="chat-message-text">
                  <span>Hello! please, let me know the status about project after school.</span>
                </div>
                <div className="chat-message-meta">
                  <span>4:18 pm<i className="feather icon-check ml-2" /></span>
                </div>
              </div>
              <div className="chat-message chat-message-left">
                <div className="chat-message-text">
                  <span>I have completed 4 stages 5 stages remaining.</span>
                </div>
                <div className="chat-message-meta">
                  <span>4:20 pm<i className="feather icon-check ml-2" /></span>
                </div>
              </div>
              <div className="chat-message chat-message-right">
                <div className="chat-message-text">
                  <span>Let me share video for detailed information</span>
                </div>
                <div className="chat-message-meta">
                  <span>4:22 pm<i className="feather icon-check ml-2" /></span>
                </div>
              </div>
              <div className="chat-message chat-message-right">
                <div className="chat-message-text">
                  <div className="message-video">
                    <video controls width={210}>
                      <source src="assets/images/video.mp4" type="video/mp4" />
                    </video>
                  </div>
                  <span>Demo.mp4</span>
                </div>
                <div className="chat-message-meta">
                  <span>4:25 pm<i className="feather icon-check ml-2" /></span>
                </div>
              </div>
              <div className="chat-message chat-message-left">
                <div className="chat-message-text">
                  <span>Thanks for the video.</span>
                </div>
              </div>
              <div className="chat-message chat-message-left">
                <div className="chat-message-text">
                  <span>I am sharing images of project work done so far. <br />Please, have a look at images and let me know if changes required.</span>
                </div>
                <div className="chat-message-meta">
                  <span>4:30 pm<i className="feather icon-check ml-2" /></span>
                </div>
              </div>
              <div className="chat-message chat-message-right">
                <div className="chat-message-text">
                  <span>Could you share photos, please?</span>
                </div>
                <div className="chat-message-meta">
                  <span>4:31 pm<i className="feather icon-check ml-2" /></span>
                </div>
              </div>
              <div className="chat-message chat-message-left">
                <div className="chat-message-text">
                  <ul className="list-inline message-media">
                    <li className="list-inline-item">
                      <img src="assets/images/media_01.png" className="img-fluid" alt="media" />
                    </li>
                    <li className="list-inline-item">
                      <img src="assets/images/media_02.png" className="img-fluid" alt="media" />
                    </li>
                    <li className="list-inline-item">
                      <p className="media-more">+07</p>
                    </li>
                  </ul>
                  <span>Photos of product</span>
                </div>
                <div className="chat-message-meta">
                  <span>4:32 pm<i className="feather icon-check ml-2" /></span>
                </div>
              </div>
              <div className="chat-message chat-message-right">
                <div className="chat-message-text">
                  <span>I request you to schedule demo at 3 pm after 2 days for the better progress. <br />After that we are discussion of final confirmation this project.</span>
                </div>
                <div className="chat-message-meta">
                  <span>4:33 pm<i className="feather icon-check ml-2" /></span>
                </div>
              </div>
              <div className="chat-message chat-message-left">
                <div className="chat-message-text">
                  <div className="message-audio">
                    <audio controls>
                      <source src="assets/images/audio.mp3" type="audio/mpeg" />
                    </audio>
                  </div>
                </div>
                <div className="chat-message-meta">
                  <span>4:38 pm<i className="feather icon-check ml-2" /></span>
                </div>
              </div>
              <div className="chat-message chat-message-right">
                <div className="chat-message-text">
                  <ul className="list-unstyled message-document">
                    <li className="media">
                      <img className="align-self-center img-fluid mr-2" src="assets/images/pdf.svg" alt="pdf" />
                      <div className="media-body">
                        <h5><a href="index.html#">Document.pdf</a></h5>
                        <p>50kb</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="chat-message-meta">
                  <span>4:40 pm<i className="feather icon-check ml-2" /></span>
                </div>
              </div>
              <div className="chat-message chat-message-right">
                <div className="chat-message-text">
                  <span>Please, refer this doc file for documentation.</span>
                </div>
                <div className="chat-message-meta">
                  <span>4:41 pm<i className="feather icon-check ml-2" /></span>
                </div>
              </div>
              <div className="chat-message chat-message-left">
                <div className="chat-message-text">
                  <span>Sure, I will prepare for the same.</span>
                </div>
                <div className="chat-message-meta">
                  <span>4:43 pm<i className="feather icon-check ml-2" /></span>
                </div>
              </div>
              <div className="chat-message chat-message-right">
                <div className="chat-message-text">
                  <span>Great. Thanks</span>
                </div>
                <div className="chat-message-meta">
                  <span>4:45 pm<i className="feather icon-clock ml-2" /></span>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="chat-second" role="tabpanel" aria-labelledby="chat-second-tab">
              <div className="empty-screen">
                <img src="assets/images/empty-logo.png" className="img-fluid" alt="empty-logo" />
                <h4 className="my-3">No Conversation Yet.</h4>
              </div>
            </div>
            <div className="tab-pane fade" id="chat-third" role="tabpanel" aria-labelledby="chat-third-tab">
              <div className="chat-day text-center mb-3">
                <span className="badge badge-secondary-inverse">Today</span>
              </div>
              <div className="chat-message chat-message-right">
                <div className="chat-message-text">
                  <span>Hello! I got 95% in Semester 7</span>
                </div>
                <div className="chat-message-meta">
                  <span>4:18 pm<i className="feather icon-check ml-2" /></span>
                </div>
              </div>
              <div className="chat-message chat-message-right">
                <div className="chat-message-text">
                  <span>Yay !!!</span>
                </div>
                <div className="chat-message-meta">
                  <span>4:20 pm<i className="feather icon-check ml-2" /></span>
                </div>
              </div>
              <div className="chat-message chat-message-left">
                <div className="chat-message-text">
                  <span>Wow! That's great news. Where's the party?</span>
                </div>
                <div className="chat-message-meta">
                  <span>4:22 pm<i className="feather icon-check ml-2" /></span>
                </div>
              </div>
              <div className="chat-message chat-message-right">
                <div className="chat-message-text">
                  <ul className="list-unstyled message-document">
                    <li className="media">
                      <img className="align-self-center img-fluid mr-2" src="assets/images/pdf.svg" alt="pdf" />
                      <div className="media-body">
                        <h5><a href="index.html#">Results.pdf</a></h5>
                        <p>50kb</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="chat-message-meta">
                  <span>4:40 pm<i className="feather icon-check ml-2" /></span>
                </div>
              </div>
              <div className="chat-message chat-message-left">
                <div className="chat-message-text">
                  <span>Thanks I will check and get back.</span>
                </div>
              </div>
              <div className="chat-message chat-message-left">
                <div className="chat-message-text">
                  <span>Wow!! great continuity.</span>
                </div>
                <div className="chat-message-meta">
                  <span>4:30 pm<i className="feather icon-check ml-2" /></span>
                </div>
              </div>
              <div className="chat-message chat-message-right">
                <div className="chat-message-text">
                  <span>Thank you for your nice words.</span>
                </div>
                <div className="chat-message-meta">
                  <span>4:31 pm<i className="feather icon-check ml-2" /></span>
                </div>
              </div>
              <div className="chat-message chat-message-left">
                <div className="chat-message-text">
                  <span>Continue process of improving everyday. <br />I will be there this weekend for further guidance.</span>
                </div>
                <div className="chat-message-meta">
                  <span>4:33 pm<i className="feather icon-check ml-2" /></span>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="chat-fourth" role="tabpanel" aria-labelledby="chat-fourth-tab">
              <div className="empty-screen">
                <img src="assets/images/empty-logo.png" className="img-fluid" alt="empty-logo" />
                <h4 className="my-3">No Conversation Yet.</h4>
              </div>
            </div>
            <div className="tab-pane fade" id="chat-fifth" role="tabpanel" aria-labelledby="chat-fifth-tab">
              <div className="chat-day text-center mb-3">
                <span className="badge badge-secondary-inverse">Today</span>
              </div>
              <div className="chat-message chat-message-left">
                <div className="chat-message-text">
                  <span>Hi</span>
                </div>
                <div className="chat-message-meta">
                  <span>4:18 pm<i className="feather icon-check ml-2" /></span>
                </div>
              </div>
              <div className="chat-message chat-message-right">
                <div className="chat-message-text">
                  <span>Hello</span>
                </div>
                <div className="chat-message-meta">
                  <span>4:20 pm<i className="feather icon-check ml-2" /></span>
                </div>
              </div>
              <div className="chat-message chat-message-left">
                <div className="chat-message-text">
                  <span>How was your day going?</span>
                </div>
                <div className="chat-message-meta">
                  <span>4:22 pm<i className="feather icon-check ml-2" /></span>
                </div>
              </div>
              <div className="chat-message chat-message-right">
                <div className="chat-message-text">
                  <div className="message-video">
                    <video controls width={210}>
                      <source src="assets/images/video.mp4" type="video/mp4" />
                    </video>
                  </div>
                  <span>partytime.mp4</span>
                </div>
                <div className="chat-message-meta">
                  <span>4:25 pm<i className="feather icon-check ml-2" /></span>
                </div>
              </div>
              <div className="chat-message chat-message-left">
                <div className="chat-message-text">
                  <span>Seems you are enjoying too much in Las Vegas.</span>
                </div>
              </div>
              <div className="chat-message chat-message-left">
                <div className="chat-message-text">
                  <span>Be Responsible. <br />Don't drink and drive. Take the taxi for home.</span>
                </div>
                <div className="chat-message-meta">
                  <span>4:30 pm<i className="feather icon-check ml-2" /></span>
                </div>
              </div>
              <div className="chat-message chat-message-right">
                <div className="chat-message-text">
                  <span>I never drink and drive, ma!!!</span>
                </div>
                <div className="chat-message-meta">
                  <span>4:31 pm<i className="feather icon-check ml-2" /></span>
                </div>
              </div>
              <div className="chat-message chat-message-right">
                <div className="chat-message-text">
                  <span>Send me photos of your hotelview as well.</span>
                </div>
                <div className="chat-message-meta">
                  <span>4:31 pm<i className="feather icon-check ml-2" /></span>
                </div>
              </div>
              <div className="chat-message chat-message-left">
                <div className="chat-message-text">
                  <ul className="list-inline message-media">
                    <li className="list-inline-item">
                      <img src="assets/images/media_01.png" className="img-fluid" alt="media" />
                    </li>
                    <li className="list-inline-item">
                      <img src="assets/images/media_02.png" className="img-fluid" alt="media" />
                    </li>
                    <li className="list-inline-item">
                      <p className="media-more">+07</p>
                    </li>
                  </ul>
                  <span>Photos of Nevada Trip</span>
                </div>
                <div className="chat-message-meta">
                  <span>4:32 pm<i className="feather icon-check ml-2" /></span>
                </div>
              </div>
              <div className="chat-message chat-message-right">
                <div className="chat-message-text">
                  <span>Wow. That seems so much fun.</span>
                </div>
                <div className="chat-message-meta">
                  <span>4:33 pm<i className="feather icon-check ml-2" /></span>
                </div>
              </div>
              <div className="chat-message chat-message-right">
                <div className="chat-message-text">
                  <span>Wish, could you be there also.</span>
                </div>
                <div className="chat-message-meta">
                  <span>4:41 pm<i className="feather icon-check ml-2" /></span>
                </div>
              </div>
              <div className="chat-message chat-message-left">
                <div className="chat-message-text">
                  <span>gotta go. See you soon. Take Care</span>
                </div>
                <div className="chat-message-meta">
                  <span>4:43 pm<i className="feather icon-check ml-2" /></span>
                </div>
              </div>
              <div className="chat-message chat-message-right">
                <div className="chat-message-text">
                  <span>You too. Have Fun.</span>
                </div>
                <div className="chat-message-meta">
                  <span>4:45 pm<i className="feather icon-clock ml-2" /></span>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="chat-sixth" role="tabpanel" aria-labelledby="chat-sixth-tab">
              <div className="empty-screen">
                <img src="assets/images/empty-logo.png" className="img-fluid" alt="empty-logo" />
                <h4 className="my-3">No Conversation Yet.</h4>
              </div>
            </div>
            <div className="tab-pane fade" id="chat-seventh" role="tabpanel" aria-labelledby="chat-seventh-tab">
              <div className="chat-day text-center mb-3">
                <span className="badge badge-secondary-inverse">Today</span>
              </div>
              <div className="chat-message chat-message-right">
                <div className="chat-message-text">
                  <span>I love you</span>
                </div>
                <div className="chat-message-meta">
                  <span>4:18 pm<i className="feather icon-check ml-2" /></span>
                </div>
              </div>
              <div className="chat-message chat-message-left">
                <div className="chat-message-text">
                  <span>Lol</span>
                </div>
                <div className="chat-message-meta">
                  <span>4:20 pm<i className="feather icon-check ml-2" /></span>
                </div>
              </div>
              <div className="chat-message chat-message-right">
                <div className="chat-message-text">
                  <span>I need you in my life</span>
                </div>
                <div className="chat-message-meta">
                  <span>4:22 pm<i className="feather icon-check ml-2" /></span>
                </div>
              </div>
              <div className="chat-message chat-message-left">
                <div className="chat-message-text">
                  <span>lol</span>
                </div>
              </div>
              <div className="chat-message chat-message-right">
                <div className="chat-message-text">
                  <span>you are my everything. love you so much</span>
                </div>
                <div className="chat-message-meta">
                  <span>4:30 pm<i className="feather icon-check ml-2" /></span>
                </div>
              </div>
              <div className="chat-message chat-message-left">
                <div className="chat-message-text">
                  <span>LOL</span>
                </div>
                <div className="chat-message-meta">
                  <span>4:31 pm<i className="feather icon-check ml-2" /></span>
                </div>
              </div>
              <div className="chat-message chat-message-right">
                <div className="chat-message-text">
                  <span>iPhone X or iPhone XR</span>
                </div>
                <div className="chat-message-meta">
                  <span>4:33 pm<i className="feather icon-check ml-2" /></span>
                </div>
              </div>
              <div className="chat-message chat-message-left">
                <div className="chat-message-text">
                  <span>iPhone X</span>
                </div>
                <div className="chat-message-meta">
                  <span>4:33 pm<i className="feather icon-check ml-2" /></span>
                </div>
              </div>
              <div className="chat-message chat-message-right">
                <div className="chat-message-text">
                  <span>Lol</span>
                </div>
                <div className="chat-message-meta">
                  <span>4:33 pm<i className="feather icon-check ml-2" /></span>
                </div>
              </div>
              <div className="chat-message chat-message-left">
                <div className="chat-message-text">
                  <span>Are you going to buy me that phone?</span>
                </div>
                <div className="chat-message-meta">
                  <span>4:33 pm<i className="feather icon-check ml-2" /></span>
                </div>
              </div>
              <div className="chat-message chat-message-right">
                <div className="chat-message-text">
                  <span>lol</span>
                </div>
                <div className="chat-message-meta">
                  <span>4:33 pm<i className="feather icon-check ml-2" /></span>
                </div>
              </div>
              <div className="chat-message chat-message-left">
                <div className="chat-message-text">
                  <span>Please, tell me yes</span>
                </div>
                <div className="chat-message-meta">
                  <span>4:33 pm<i className="feather icon-check ml-2" /></span>
                </div>
              </div>
              <div className="chat-message chat-message-right">
                <div className="chat-message-text">
                  <span>LOL</span>
                </div>
                <div className="chat-message-meta">
                  <span>4:33 pm<i className="feather icon-check ml-2" /></span>
                </div>
              </div>
              <div className="chat-message chat-message-left">
                <div className="chat-message-text">
                  <span>Why are so many lol</span>
                </div>
                <div className="chat-message-meta">
                  <span>4:33 pm<i className="feather icon-check ml-2" /></span>
                </div>
              </div>
              <div className="chat-message chat-message-right">
                <div className="chat-message-text">
                  <span>It's thunder from zambia fire.</span>
                </div>
                <div className="chat-message-meta">
                  <span>4:33 pm<i className="feather icon-check ml-2" /></span>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="chat-eighth" role="tabpanel" aria-labelledby="chat-eighth-tab">
              <div className="empty-screen">
                <img src="assets/images/empty-logo.png" className="img-fluid" alt="empty-logo" />
                <h4 className="my-3">No Conversation Yet.</h4>
              </div>
            </div>
            <div className="tab-pane fade" id="chat-ninth" role="tabpanel" aria-labelledby="chat-ninth-tab">
              <div className="chat-day text-center mb-3">
                <span className="badge badge-secondary-inverse">Today</span>
              </div>
              <div className="chat-message chat-message-right">
                <div className="chat-message-text">
                  <span>How you doin???</span>
                </div>
                <div className="chat-message-meta">
                  <span>4:18 pm<i className="feather icon-check ml-2" /></span>
                </div>
              </div>
              <div className="chat-message chat-message-left">
                <div className="chat-message-text">
                  <span>I watched F.R.I.E.N.D.S. compeletely.</span>
                </div>
                <div className="chat-message-meta">
                  <span>4:20 pm<i className="feather icon-check ml-2" /></span>
                </div>
              </div>
              <div className="chat-message chat-message-right">
                <div className="chat-message-text">
                  <span>Let's go party then</span>
                </div>
                <div className="chat-message-meta">
                  <span>4:22 pm<i className="feather icon-check ml-2" /></span>
                </div>
              </div>
              <div className="chat-message chat-message-left">
                <div className="chat-message-text">
                  <span>Duh !!! Next time</span>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="chat-tenth" role="tabpanel" aria-labelledby="chat-tenth-tab">
              <div className="empty-screen">
                <img src="assets/images/empty-logo.png" className="img-fluid" alt="empty-logo" />
                <h4 className="my-3">No Conversation Yet.</h4>
              </div>
            </div>
            <div className="tab-pane fade" id="chat-eleventh" role="tabpanel" aria-labelledby="chat-eleventh-tab">
              <div className="chat-day text-center mb-3">
                <span className="badge badge-secondary-inverse">Today</span>
              </div>
              <div className="chat-message chat-message-right">
                <div className="chat-message-text">
                  <span>Please, pay $100 to megan. I will give it to you when home.</span>
                </div>
                <div className="chat-message-meta">
                  <span>4:18 pm<i className="feather icon-check ml-2" /></span>
                </div>
              </div>
              <div className="chat-message chat-message-left">
                <div className="chat-message-text">
                  <span>Okay given. Now you owe me $110.</span>
                </div>
                <div className="chat-message-meta">
                  <span>4:20 pm<i className="feather icon-check ml-2" /></span>
                </div>
              </div>
              <div className="chat-message chat-message-right">
                <div className="chat-message-text">
                  <span>Why 10$ Extra?</span>
                </div>
                <div className="chat-message-meta">
                  <span>4:22 pm<i className="feather icon-check ml-2" /></span>
                </div>
              </div>
              <div className="chat-message chat-message-left">
                <div className="chat-message-text">
                  <span>Convenience Charge it is.</span>
                </div>
              </div>
              <div className="chat-message chat-message-right">
                <div className="chat-message-text">
                  <span>I am not gonna pay any damn charges.</span>
                </div>
                <div className="chat-message-meta">
                  <span>4:31 pm<i className="feather icon-check ml-2" /></span>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="chat-twelth" role="tabpanel" aria-labelledby="chat-twelth-tab">
              <div className="empty-screen">
                <img src="assets/images/empty-logo.png" className="img-fluid" alt="empty-logo" />
                <h4 className="my-3">No Conversation Yet.</h4>
              </div>
            </div>
            <div className="tab-pane fade" id="chat-thirteenth" role="tabpanel" aria-labelledby="chat-thirteenth-tab">
              <div className="chat-day text-center mb-3">
                <span className="badge badge-secondary-inverse">Today</span>
              </div>
              <div className="chat-message chat-message-right">
                <div className="chat-message-text">
                  <span>Ding dong. who is it?</span>
                </div>
                <div className="chat-message-meta">
                  <span>4:18 pm<i className="feather icon-check ml-2" /></span>
                </div>
              </div>
              <div className="chat-message chat-message-left">
                <div className="chat-message-text">
                  <span>Lorem Ipsum</span>
                </div>
                <div className="chat-message-meta">
                  <span>4:20 pm<i className="feather icon-check ml-2" /></span>
                </div>
              </div>
              <div className="chat-message chat-message-right">
                <div className="chat-message-text">
                  <span>Need some serif.</span>
                </div>
                <div className="chat-message-meta">
                  <span>4:22 pm<i className="feather icon-check ml-2" /></span>
                </div>
              </div>
              <div className="chat-message chat-message-left">
                <div className="chat-message-text">
                  <span>We only have slabs.</span>
                </div>
              </div>
              <div className="chat-message chat-message-right">
                <div className="chat-message-text">
                  <span>Do you have more height or width?</span>
                </div>
                <div className="chat-message-meta">
                  <span>4:31 pm<i className="feather icon-check ml-2" /></span>
                </div>
              </div>
              <div className="chat-message chat-message-left">
                <div className="chat-message-text">
                  <span>We are bold.</span>
                </div>
                <div className="chat-message-meta">
                  <span>4:41 pm<i className="feather icon-check ml-2" /></span>
                </div>
              </div>
              <div className="chat-message chat-message-right">
                <div className="chat-message-text">
                  <span>Fine with it.</span>
                </div>
                <div className="chat-message-meta">
                  <span>4:43 pm<i className="feather icon-check ml-2" /></span>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="chat-fourtinth" role="tabpanel" aria-labelledby="chat-fourtinth-tab">
              <div className="empty-screen">
                <img src="assets/images/empty-logo.png" className="img-fluid" alt="empty-logo" />
                <h4 className="my-3">No Conversation Yet.</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="chat-bottom">
          <div className="chat-messagebar">
            <form>
              <div className="input-group">
                <div className="input-group-prepend">
                  <a href="index.html#" id="button-addonmic"><i className="feather icon-mic" /></a>
                </div>
                <input type="text" className="form-control" placeholder="Type a message..." aria-label="Text" />
                <div className="input-group-append">
                  <a href="index.html#" className="mr-3" id="button-addonlink"><i className="feather icon-paperclip" /></a>
                  <a href="index.html#" id="button-addonsend"><i className="feather icon-send" /></a>
                </div>
              </div>
            </form>
          </div>
        </div>
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
                  <a href="index.html#" id="close-user-info"><i className="feather icon-x" /></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="chat-user-body">
          <div className="userbar">
            <img className="user-pic img-fluid" src="assets/images/girl.svg" alt="user-pic" />
            <h5>Emily Cook</h5>
            <p className="mb-0">New York, USA</p>
          </div>
          <div className="user-detail">
            <p className="user-detail-header">About</p>
            <div className="user-about">
              <h6><i className="feather icon-heart mr-2" />Feeling good today.</h6>
              <h6 className="my-3"><i className="feather icon-mail mr-2" />demo@example.com</h6>
              <h6 className="mb-0"><i className="feather icon-phone-call mr-2" />+1 9876543210</h6>
            </div>
            <p className="user-detail-header">Social Profile</p>
            <div className="user-social">
              <ul className="list-inline mb-0">
                <li className="list-inline-item">
                  <a href="index.html#" className="facebook"><i className="feather icon-facebook" /></a>
                </li>
                <li className="list-inline-item">
                  <a href="index.html#" className="twitter"><i className="feather icon-twitter" /></a>
                </li>
                <li className="list-inline-item">
                  <a href="index.html#" className="instagram"><i className="feather icon-instagram" /></a>
                </li>
              </ul>
            </div>
            <p className="user-detail-header">Media</p>
            <div className="user-media">
              <div className="user-media-slider">
                <div className="user-media-slider-item">
                  <img src="assets/images/media_01.png" className alt="user-media" />
                </div>
                <div className="user-media-slider-item">
                  <img src="assets/images/media_02.png" className alt="user-media" />
                </div>
                <div className="user-media-slider-item">
                  <img src="assets/images/media_03.png" className alt="user-media" />
                </div>
                <div className="user-media-slider-item">
                  <img src="assets/images/media_04.png" className alt="user-media" />
                </div>
                <div className="user-media-slider-item">
                  <img src="assets/images/pdf.svg" className alt="user-media" />
                </div>
                <div className="user-media-slider-item">
                  <img src="assets/images/xls.svg" className alt="user-media" />
                </div>
                <div className="user-media-slider-item">
                  <img src="assets/images/doc.svg" className alt="user-media" />
                </div>
              </div>
            </div>
            <p className="user-detail-header">Settings</p>
            <div className="user-setting">
              <div className="row align-items-center pb-3">
                <div className="col-9"><h6 className="mb-0">Mute Notifications</h6></div>
                <div className="col-3 text-right">
                  <div className="custom-control custom-switch">
                    <input type="checkbox" className="custom-control-input" id="muteNotification" defaultChecked />
                    <label className="custom-control-label" htmlFor="muteNotification" />
                  </div>
                </div>
              </div>
              <div className="row align-items-center pb-3">
                <div className="col-9"><h6 className="mb-0">Block Contact</h6></div>
                <div className="col-3 text-right">
                  <div className="custom-control custom-switch">
                    <input type="checkbox" className="custom-control-input" id="blockContact" />
                    <label className="custom-control-label" htmlFor="blockContact" />
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
}

export default HomePage;