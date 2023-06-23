import { ILaptopPagination, apiGetMultipleLaptop } from '@core';
import { useQuery } from '@tanstack/react-query';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Button, Modal } from 'antd';
import { MessageFilled, CloseOutlined } from '@ant-design/icons';
import './ChatFrame.scss';
import { isVisible } from '@testing-library/user-event/dist/utils';
import { format } from 'date-fns';

export function ChatFrame() {
    const buttonStyle = {
        width: 50,
        height: 50,
    };
    const currentDate = new Date();
    const formattedDate = format(currentDate, 'EEEE, h:mm aa');
    const [showChatScreen, setShowChatScreen] = useState(false);
    const toggleChatScreen = () => {
        console.log('Dmm');
        setShowChatScreen(!showChatScreen);
    };
    return (
        <div>
            <div className="fixed-button">
                {showChatScreen ? (
                    <div className="chat-screen">
                        <div className="chat-header">
                            <div className="chat-header-title">Let’s chat? - We're online</div>
                            <div className="chat-header-option show">
                                <span className="dropdown custom-dropdown">
                                    <a
                                        className="dropdown-toggle"
                                        href="#"
                                        role="button"
                                        id="dropdownMenuLink1"
                                        data-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="feather feather-more-horizontal"
                                        >
                                            <circle cx={12} cy={12} r={1} />
                                            <circle cx={19} cy={12} r={1} />
                                            <circle cx={5} cy={12} r={1} />
                                        </svg>
                                    </a>
                                    <div
                                        className="dropdown-menu dropdown-menu-right"
                                        aria-labelledby="dropdownMenuLink1"
                                        style={{ willChange: 'transform' }}
                                    >
                                        <a className="dropdown-item">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={16}
                                                height={16}
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="#bc32ef"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="feather feather-file-text"
                                            >
                                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                                                <polyline points="14 2 14 8 20 8" />
                                                <line x1={16} y1={13} x2={8} y2={13} />
                                                <line x1={16} y1={17} x2={8} y2={17} />
                                                <polyline points="10 9 9 9 8 9" />
                                            </svg>
                                            Send Transcriptions
                                        </a>
                                        <a className="dropdown-item end-chat">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={16}
                                                height={16}
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="#bc32ef"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="feather feather-power"
                                            >
                                                <path d="M18.36 6.64a9 9 0 1 1-12.73 0" />
                                                <line x1={12} y1={2} x2={12} y2={12} />
                                            </svg>
                                            End Chat
                                        </a>
                                    </div>
                                </span>
                            </div>
                        </div>
                        <div className="chat-mail hide">
                            <div className="row">
                                <div className="col-md-12 text-center mb-2">
                                    <p>
                                        Hi 👋! Please fill out the form below to start chatting with the next available
                                        agent.
                                    </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Name" />
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <input type="email" className="form-control" placeholder="Email" />
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <select className="form-control  select2_el">
                                        <option>Report Abuse</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                                <div className="col-md-12">
                                    <button className="btn btn-primary btn-rounded btn-block">Start Chat</button>
                                </div>
                                <div className="col-md-12">
                                    <div className="powered-by">Powered by css3transition</div>
                                </div>
                            </div>
                        </div>
                        <div className="chat-body show">
                            <div className="chat-start">{formattedDate}</div>
                            <div className="chat-bubble you">Welcome to our site, How can I help you.</div>
                            <div className="chat-bubble you chat-wait hide">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    style={{
                                        margin: 'auto',
                                        display: 'block',
                                        shapeRendering: 'auto',
                                        width: '43px',
                                        height: '20px',
                                    }}
                                    viewBox="0 0 100 100"
                                    preserveAspectRatio="xMidYMid"
                                >
                                    <circle cx={0} cy="44.1678" r={15} fill="#ffffff">
                                        <animate
                                            attributeName="cy"
                                            calcMode="spline"
                                            keySplines="0 0.5 0.5 1;0.5 0 1 0.5;0.5 0.5 0.5 0.5"
                                            repeatCount="indefinite"
                                            values="57.5;42.5;57.5;57.5"
                                            keyTimes="0;0.3;0.6;1"
                                            dur="1s"
                                            begin="-0.6s"
                                        />
                                    </circle>{' '}
                                    <circle cx={45} cy="43.0965" r={15} fill="#ffffff">
                                        <animate
                                            attributeName="cy"
                                            calcMode="spline"
                                            keySplines="0 0.5 0.5 1;0.5 0 1 0.5;0.5 0.5 0.5 0.5"
                                            repeatCount="indefinite"
                                            values="57.5;42.5;57.5;57.5"
                                            keyTimes="0;0.3;0.6;1"
                                            dur="1s"
                                            begin="-0.39999999999999997s"
                                        />
                                    </circle>{' '}
                                    <circle cx={90} cy="52.0442" r={15} fill="#ffffff">
                                        <animate
                                            attributeName="cy"
                                            calcMode="spline"
                                            keySplines="0 0.5 0.5 1;0.5 0 1 0.5;0.5 0.5 0.5 0.5"
                                            repeatCount="indefinite"
                                            values="57.5;42.5;57.5;57.5"
                                            keyTimes="0;0.3;0.6;1"
                                            dur="1s"
                                            begin="-0.19999999999999998s"
                                        />
                                    </circle>
                                </svg>
                            </div>
                        </div>
                        <div className="chat-input show">
                            <input type="text" placeholder="Type a message..." />
                            <div className="input-action-icon">
                                <a>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="feather feather-paperclip"
                                    >
                                        <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" />
                                    </svg>
                                </a>
                                <a id="send-message">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="feather feather-send"
                                    >
                                        <line x1={22} y1={2} x2={11} y2={13} />
                                        <polygon points="22 2 15 22 11 13 2 9 22 2" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                ) : (
                    <></>
                )}

                <Button
                    type="primary"
                    onClick={toggleChatScreen}
                    shape="circle"
                    style={buttonStyle}
                    icon={!showChatScreen ? <MessageFilled /> : <CloseOutlined />}
                ></Button>
            </div>
        </div>
    );
}

export default ChatFrame;
