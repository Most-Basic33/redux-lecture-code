import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';

class Header extends Component {
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         user: {id: 1, name: 'Tony Stark', image: 'https://i1.wp.com/themarvelreport.com/wp-content/uploads/2019/05/Tony-Stark-Iron-Man.jpg?fit=1280%2C720'}
    //     }
    // }

    //Eleminate contructor because now you are getting this item from redux store and passed as props

    render(){
  //console.log(this.props)
        return (
            <div className='main-header'>
                <p>Welcome, {this.props.user.name}</p>
                <nav>
                    <Link className='nav-links' to='/'>Home</Link>
                    <Link className='nav-links' to='/profile'>Profile</Link>
                </nav>
            </div>
        )
    }
}

// WHatever props I'm getting from redux state give to header AWESOME
//const mapStateToProps = (reduxState) => reduxState;
const mapStateToProps = (state, ownProps) => state.reducer;
   
export default connect(mapStateToProps)(Header)