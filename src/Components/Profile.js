import React, {Component} from 'react';
import { connect } from 'react-redux';

//Remember move the state Items, unless you have input handling
class Profile extends Component {
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         user: {id: 1, name: 'Tony Stark', image: 'https://i1.wp.com/themarvelreport.com/wp-content/uploads/2019/05/Tony-Stark-Iron-Man.jpg?fit=1280%2C720'}
    //     }
    // }

    render(){
        return (
            <div className='profile'>
                <img 
                    className='profile-image' 
                    src={this.props.user.image} 
                    alt={this.props.user.name}/>
                <p>{this.props.user.name}</p>
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => state.reducer;
 

export default connect(mapStateToProps)(Profile)