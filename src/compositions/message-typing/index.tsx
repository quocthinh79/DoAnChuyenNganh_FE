export function MessageTyping() {
    return (
        <div>
            <div className="chat-bubble you chat-wait">
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
    );
}
export default MessageTyping;
