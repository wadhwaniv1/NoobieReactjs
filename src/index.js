import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";

//Babel Compiler
/*ReactDOM.render(
    [
    <h1> Hello World </h1>,
    <p> Hello i am legend </p>
    ],
    document.getElementById('root'));*/

/*const heading = {
    color: '#fa9191',
    textAlign: 'center',
    textTransform: 'capitalize',
    fontWeight: 'bold',
    textShadow: '0px 2px 4px #ffe9c5',
    margin: '70px 0',
    fontfamily: "'Josefin Sans', sans - serif"
}*/
const currDate = new Date();

const cssStyle = {};
const cssStyle1 = {};

const greet = (cDate) => {
    if (cDate.getHours() > 1 && cDate.getHours() <= 11) {
        cssStyle.color = 'green';
        return "Good Morning";
    }
    else if (cDate.getHours() > 11 && cDate.getHours() <= 19) {
        cssStyle.color = 'orange';
        return "Good Afternoon";
    }
    else {
        cssStyle.color = 'blue';
        return "Good Night";
    }
}

let greeting = greet(currDate);

ReactDOM.render(
    <>
        <div>
            <div class="soup">
                <h1>Hello sir, <span style={cssStyle}>{greeting}</span></h1>
            </div>
        </div>
    </>,
    document.getElementById('root'));

//Normal react js
//ReactDOM.render(React.createElement("h1", null, "Hi"), document.getElementById('root'));

//normal javascript
//var h1 = document.createElement("h1");
//h1.innerHTML = "Hi normal js"
//document.getElementById("root").appendChild(h1);

