import React from 'react';
import { connect } from 'react-redux';
import './Style.css';

const Beauty = (props) => {
    const disp = props.isClicked.isClicked ? 'none' : 'block';
    return (
        <div style={{ display: `${disp}` }}>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width={400} height={300} fill="black"><style dangerouslySetInnerHTML={{ __html: "\n    circle{\n      animation-duration: 5s;\n      animation-timing-function:ease-in-out;\n      animation-iteration-count:infinite;\n    }\n    #one{animation-name: one;}\n    #two{animation-name: two;}\n    #three{animation-name: three;}\n    #four{animation-name: four;}\n    #five{animation-name: five;}\n    #six{animation-name: six;}\n    @keyframes one{\n      0%{transform:translate(0,0)}\n      50%{transform:translate(10px,10px)}\n      0%{transform:translate(0,0)}\n    }\n    @keyframes two{\n      0%{transform:translate(0,0)}\n      50%{transform:translate(-15px,5px)}\n      0%{transform:translate(0,0)}\n    }\n    @keyframes three{\n      0%{transform:translate(0,0)}\n      50%{transform:translate(17px,7px)}\n      0%{transform:translate(0,0)}\n    }\n    @keyframes four{\n      0%{transform:translate(0,0)}\n      50%{transform:translate(5px,-20px)}\n      0%{transform:translate(0,0)}\n    }\n    @keyframes three{\n      0%{transform:translate(0,0)}\n      50%{transform:translate(17px,7px)}\n      0%{transform:translate(0,0)}\n    }\n    @keyframes five{\n      0%{transform:translate(0,0)}\n      50%{transform:translate(0,5px)}\n      0%{transform:translate(0,0)}\n    }\n    @keyframes six{\n      0%{transform:translate(0,0)}\n      50%{transform:translate(20px,-5px)}\n      0%{transform:translate(0,0)}\n    }\n  " }} />
                <defs>
                    <filter id="goo">
                        <feGaussianBlur in="SourceGraphic" stdDeviation={10} result="blur" />
                        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -12" result="goo" />
                        <feComposite in="SourceGraphic" in2="goo" operator="atop" />
                    </filter>
                </defs>
                <g filter="url('#goo')">
                    <circle cx={400} cy={0} r={250} />
                    <circle id="one" cx={110} cy={30} r={80} />
                    <circle id="two" cx={110} cy={120} r={30} />
                    <circle id="three" cx={170} cy={130} r={60} />
                    <circle id="four" cx={225} cy={165} r={50} />
                    <circle id="five" cx={270} cy={200} r={30} />
                    <circle id="six" cx={370} cy={190} r={90} />
                </g>
            </svg>
        </div>
    );
}

const mapStateToProps = (state) => {
    return { isClicked: state.ham };
}

export default connect(mapStateToProps)(Beauty);