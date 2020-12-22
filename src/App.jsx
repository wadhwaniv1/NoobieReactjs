import React from 'react'

function App() {
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

    return (
        <>
            <div>
                <div class="soup">
                    <h1>Hello sir, <span style={cssStyle}>{greeting}</span></h1>
                </div>
            </div>
        </>
    );
}

export default App;