import React from 'react';
import ReactDOM from 'react-dom';

import Car from "./Car.js"

import './style.css';

// const domcontainer = document.querySelector('#root');

// const myElement = React.createElement('div', null,
//     [React.createElement('p', null, 'hello world'),
//     React.createElement('p', null, 'hello world')])

// ReactDOM.render(myElement, domcontainer)



// class MainApp extends React.Component {
//     render() {
//         return (
//             <div className="content">
//                 <h1>Hello World</h1>
//             </div>
//         );
//     }
// }

// ReactDOM.render(<MainApp />, document.getElementById("root"));




// const myelement = <h1>I Love JSX!</h1>;

// ReactDOM.render(myelement, document.getElementById('root'));

// const myelement = React.createElement('h1', {}, 'I do not use JSX!');

// ReactDOM.render(myelement, document.getElementById('root'));


// const myelement = (
//     <ul>
//         <li>Apples</li>
//         <li>Bananas</li>
//         <li>Cherries</li>
//     </ul>
// );

// const x = 50;
// let text = "Goodbye";
// if (x < 10) {
//     text = "Hello";
// }

// const myelement = <h1 className="colorred">{text}</h1>;

// ReactDOM.render(myelement, document.getElementById('root'));
// ReactDOM.render(myelement2, document.getElementById('root'));


// const x = 5;
// let text = 'Goodby';
// if (x < 10) {
//     text = 'Hello'
// };
// const myelement = <h1 className="colorred">{(x) > 6 ? "Hello" : "Goodby"}</h1>

// ReactDOM.render(myelement, document.getElementById('root'))



// class Car extends React.Component {
//     render() {
//         return <h2 className="colorred font"> Hello,,  I am a car</h2>
//     }

// function Car() {
//     return <h2 className="center">Hi, I am a function component</h2>
// };

// class Car extends React.Component {
//     constructor() {
//         super();
//         this.state = { color: "red" }
//     }
//     render() {
//         return <h1 className="center">I am a {this.state.color} color car</h1>
//     }
// }



// class Car extends React.Component {

//     render() {
//         return <h1 className="center">I am a {this.props.color} color car</h1>
//     }
// }


// ReactDOM.render(<Car color="red" />, document.getElementById('root'))



class Garrege extends React.Component {
    render() {
        const carinfo = { name: "Toyta", model: "Corolla" };
        return <div>
            <h1>Who is in My Garrege</h1>
            <Car brand={carinfo} />
        </div>

    }
}

// ReactDOM.render(<Garrege />, document.getElementById('root'))

class Car2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            brand: "Ford",
            model: "Mostard",
            color: "Red",
            since: "2011"
        };
    }
    chageColor = () => {
        this.setState({ color: "pink", since: "2023 or   2025" })
    }
    render() {
        return (
            <div className="center font">
                <h1>I have {this.state.brand}</h1>
                <p>
                    It is {this.state.color}
                    {this.state.model}
                    from {this.state.since}.
                </p>
                <button type="button" onClick={this.chageColor}>change</button>
            </div>
        )
    }
}


ReactDOM.render(<Car2 />, document.getElementById("root"))


class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = { favoratColor: "red" }
    }
    // static getDerivedStateFromProps(props, state) {
    //     return { favoratColor: props.favo };
    // }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ favoratColor: "Greeeeeeeeeeen" })
        }, 3000)
    }
    render() {
        return (
            <h1 className="fontwhite center">My favorat color is {this.state.favoratColor} </h1>
        )
    }
}

ReactDOM.render(<Header /*favo="Green" */></Header>, document.getElementById("hd"));



function Clock(props) {
  return (
      <div className="center fontwhite">
      <h1>Hello, world!</h1>
      <h2 className="font30 c-pink">It is {props.date.toLocaleTimeString()}.</h2>
    </div>
  );
}

function tick() {
  ReactDOM.render(
    <Clock date={new Date()} />,
    document.getElementById('root1')
  );
}

setInterval(tick, 1000);
