import React, {Component} from 'react';
import styles from './PersonCard.module.css';

// ------------Functional Component----------------------------------------------//

const PersonCard = props =>{
    return(
        <div className = {styles.container}>
            <h1>{props.firstName}<span>,</span> {props.lastName}</h1>
            <p>Age: {props.age} <span>Hair Color: {props.haircolor}</span></p>
        </div>
    );
}

export default PersonCard;



// ---------------Inline CSS-------------------------------------//
// const btnStyle = {
//     padding: '12px 15px',
//     fontFamily: 'Arial, sans-serif',
//     fontWeight: 'bold',
//     background: 'linear-gradient(30deg, rebeccapurple, magenta)', 
//     color: '#fff',
//     border: 'none'
// };

// --------------------Class Component ----------------------------//

// class PersonCard extends Component{
//     constructor(props){
//         super (props)
//         this.state = {
//             age : this.props.age
//         }
//     }

//     increaseAge = () => {
//         console.log("clicked");
//         this.setState({

//             age: (this.state.age)+1
//         });
//     }
//     render() {
//         const {firstName, lastName, age, haircolor} = this.props;
//         return(
//             <div className = {styles.container}>
//                 <h1>{this.props.firstName}<span>,</span> {this.props.lastName}</h1>
//                 <p>Age: {this.state.age} <span>Hair Color: {this.props.haircolor}</span></p>
//                 <button className ={styles.btn} onClick={this.increaseAge}>Happy Birthday { this.props.lastName } { this.props.firstName}</button>
//             </div>
//         );
//     }
// }

// export default PersonCard;