import React, { Component } from 'react';
import { connect } from 'react-redux';
import {getUser} from '../redux/reducer';
import {getPokemon} from '../redux/pokeReducer'


//Again removing contructor and sending it redux and sending it back from props
class Dashboard extends Component {
    componentDidMount(){
        this.props.getPokemon()
    }
   changeAvenger = () =>{
       //axios request or watever to chnage the data  
       //https://cdn.mcuexchange.com/wp-content/uploads/2018/06/thor.jpg
let newAveneger = {
    id:2,
    name: 'Thor',
    image:'https://imgix.bustle.com/uploads/image/2020/6/3/49ba04c2-3c4f-487e-9d2c-2bbd73cf2c2b-thor-endgame.jpg',

    hobbies:['Hammers', 'Lightning', 'Strenghth', 'Super Heath', 'Speaking Groot']
}

 this.props.getUser(newAveneger)
   }
   
    render() {
        console.log(this.props, "Dashboard")
        return (
            <div className='dashboard'>
                <h1>{this.props.reducer.user.name}</h1>
                <p className='hobbies'>Hobbies</p>
                {this.props.reducer.user.hobbies.map((hobby, i) => (
                    <p key={i}>{hobby}</p>
                ))}
                <button onClick={this.changeAvenger} >Change Avenger</button>
            </div>
        )
    }
}
const mapStateToProps = (reduxState) => reduxState;
export default connect(mapStateToProps,{getUser, getPokemon})(Dashboard)
