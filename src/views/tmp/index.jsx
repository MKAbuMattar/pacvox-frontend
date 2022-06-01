import React, { Fragment } from 'react'
import '../../assets/style/tmp.css'

const Home = () => {
  return (
    <Fragment>
      <div className="body">
        <div className="app-container">
          <div className="app-left">
            <div className="app-left-header">
              <div className="app-logo">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <defs />
                  <path
                    className="path-1"
                    fill="#3eb798"
                    d="M448 193.108h-32v80c0 44.176-35.824 80-80 80H192v32c0 35.344 28.656 64 64 64h96l69.76 58.08c6.784 5.648 16.88 4.736 22.528-2.048A16.035 16.035 0 00448 494.868v-45.76c35.344 0 64-28.656 64-64v-128c0-35.344-28.656-64-64-64z"
                    opacity=".4"
                  />
                  <path
                    className="path-2"
                    fill="#3eb798"
                    d="M320 1.108H64c-35.344 0-64 28.656-64 64v192c0 35.344 28.656 64 64 64v61.28c0 8.832 7.168 16 16 16a16 16 0 0010.4-3.84l85.6-73.44h144c35.344 0 64-28.656 64-64v-192c0-35.344-28.656-64-64-64zm-201.44 182.56a22.555 22.555 0 01-4.8 4 35.515 35.515 0 01-5.44 3.04 42.555 42.555 0 01-6.08 1.76 28.204 28.204 0 01-6.24.64c-17.68 0-32-14.32-32-32-.336-17.664 13.712-32.272 31.376-32.608 2.304-.048 4.608.16 6.864.608a42.555 42.555 0 016.08 1.76c1.936.8 3.76 1.808 5.44 3.04a27.78 27.78 0 014.8 3.84 32.028 32.028 0 019.44 23.36 31.935 31.935 0 01-9.44 22.56zm96 0a31.935 31.935 0 01-22.56 9.44c-2.08.24-4.16.24-6.24 0a42.555 42.555 0 01-6.08-1.76 35.515 35.515 0 01-5.44-3.04 29.053 29.053 0 01-4.96-4 32.006 32.006 0 01-9.28-23.2 27.13 27.13 0 010-6.24 42.555 42.555 0 011.76-6.08c.8-1.936 1.808-3.76 3.04-5.44a37.305 37.305 0 013.84-4.96 37.305 37.305 0 014.96-3.84 25.881 25.881 0 015.44-3.04 42.017 42.017 0 016.72-2.4c17.328-3.456 34.176 7.808 37.632 25.136.448 2.256.656 4.56.608 6.864 0 8.448-3.328 16.56-9.28 22.56h-.16zm96 0a22.555 22.555 0 01-4.8 4 35.515 35.515 0 01-5.44 3.04 42.555 42.555 0 01-6.08 1.76 28.204 28.204 0 01-6.24.64c-17.68 0-32-14.32-32-32-.336-17.664 13.712-32.272 31.376-32.608 2.304-.048 4.608.16 6.864.608a42.555 42.555 0 016.08 1.76c1.936.8 3.76 1.808 5.44 3.04a27.78 27.78 0 014.8 3.84 32.028 32.028 0 019.44 23.36 31.935 31.935 0 01-9.44 22.56z"
                  />
                </svg>
              </div>
              <h1>QuickChat</h1>
            </div>
            <div className="app-profile-box">
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80"
                alt="profile"
              />
              <div className="app-profile-box-name">
                Pam Beesly Halpert
                <button className="app-setting">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="feather feather-settings"
                    viewBox="0 0 24 24"
                  >
                    <defs />
                    <circle cx="12" cy="12" r="3" />
                    <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="chat-list-wrapper">
              <div className="chat-list-header">
                Active Conversations <span className="c-number">4</span>
              </div>
              <ul className="chat-list active">
                <li className="chat-list-item active">
                  <img
                    src="https://images.unsplash.com/photo-1587080266227-677cc2a4e76e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
                    alt="chat"
                  />
                  <span className="chat-list-name">Dwight Schrute</span>
                </li>
                <li className="chat-list-item">
                  <img
                    src="https://images.unsplash.com/photo-1566465559199-50c6d9c81631?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
                    alt="chat"
                  />
                  <span className="chat-list-name">Andy Bernard</span>
                </li>
                <li className="chat-list-item">
                  <img
                    src="https://images.unsplash.com/photo-1562788869-4ed32648eb72?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2552&q=80"
                    alt="chat"
                  />
                  <span className="chat-list-name">Michael Scott</span>
                </li>
                <li className="chat-list-item">
                  <img
                    src="https://images.unsplash.com/photo-1604004555489-723a93d6ce74?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=934&q=80"
                    alt="chat"
                  />
                  <span className="chat-list-name">Holy Flax</span>
                </li>
                <li className="chat-list-item">
                  <img
                    src="https://images.unsplash.com/photo-1583864697784-a0efc8379f70?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                    alt="chat"
                  />
                  <span className="chat-list-name">Jim Halpert</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="app-main">
            <div className="chat-wrapper">
              <div className="message-wrapper reverse">
                <img
                  className="message-pp"
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
                  alt="profile-pic"
                />
                <div className="message-box-wrapper">
                  <div className="message-box">
                    Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                    amet, consectetur
                  </div>
                  <span>9h ago</span>
                </div>
              </div>
              <div className="message-wrapper reverse">
                <img
                  className="message-pp"
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
                  alt="profile-pic"
                />
                <div className="message-box-wrapper">
                  <div className="message-box">
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </div>
                  <span>9h ago</span>
                </div>
              </div>
              <div className="message-wrapper">
                <img
                  className="message-pp"
                  src="https://images.unsplash.com/photo-1587080266227-677cc2a4e76e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=934&amp;q=80"
                  alt="profile-pic"
                />
                <div className="message-box-wrapper">
                  <div className="message-box">
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                    odit aut fugit, sed quia consequuntur magni dolores eos qui
                    ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                    qui dolorem ipsum quia dolor sit amet, consectetur
                  </div>
                  <span>9h ago</span>
                </div>
              </div>
              <div className="message-wrapper">
                <img
                  className="message-pp"
                  src="https://images.unsplash.com/photo-1587080266227-677cc2a4e76e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=934&amp;q=80"
                  alt="profile-pic"
                />
                <div className="message-box-wrapper">
                  <div className="message-box">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </div>
                  <span>9h ago</span>
                </div>
              </div>
              <div className="message-wrapper reverse">
                <img
                  className="message-pp"
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
                  alt="profile-pic"
                />
                <div className="message-box-wrapper">
                  <div className="message-box">Lorem ipsum dolor sit amet</div>
                  <span>9h ago</span>
                </div>
              </div>
              <div className="message-wrapper reverse">
                <img
                  className="message-pp"
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
                  alt="profile-pic"
                />
                <div className="message-box-wrapper">
                  <div className="message-box">Lorem ipsum dolor</div>
                  <span>9h ago</span>
                </div>
              </div>
              <div className="message-wrapper">
                <img
                  className="message-pp"
                  src="https://images.unsplash.com/photo-1587080266227-677cc2a4e76e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=934&amp;q=80"
                  alt="profile-pic"
                />
                <div className="message-box-wrapper">
                  <div className="message-box">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </div>
                  <span>9h ago</span>
                </div>
              </div>
              <div className="message-wrapper">
                <img
                  className="message-pp"
                  src="https://images.unsplash.com/photo-1587080266227-677cc2a4e76e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=934&amp;q=80"
                  alt="profile-pic"
                />
                <div className="message-box-wrapper">
                  <div className="message-box">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </div>
                  <span>9h ago</span>
                </div>
              </div>
              <div className="message-wrapper">
                <img
                  className="message-pp"
                  src="https://images.unsplash.com/photo-1587080266227-677cc2a4e76e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=934&amp;q=80"
                  alt="profile-pic"
                />
                <div className="message-box-wrapper">
                  <div className="message-box">Lorem ipsum dolor sit amet</div>
                  <span>9h ago</span>
                </div>
              </div>
              <div className="message-wrapper reverse">
                <img
                  className="message-pp"
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
                  alt="profile-pic"
                />
                <div className="message-box-wrapper">
                  <div className="message-box">
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </div>
                  <span>9h ago</span>
                </div>
              </div>
            </div>
            <div className="chat-input-wrapper">
              <div className="input-wrapper">
                <input
                  type="text"
                  className="chat-input"
                  placeholder="Enter your message here"
                />
                <button className="emoji-btn">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="feather feather-smile"
                    viewBox="0 0 24 24"
                  >
                    <defs />
                    <circle cx="12" cy="12" r="10" />
                    <path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01" />
                  </svg>
                </button>
              </div>
              <button className="chat-send-btn">Send</button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Home
