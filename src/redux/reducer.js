 //State Object
//If Comonents need all the same info, but a few next extra
//but them all in one
 const initialState = {
   
    user:  { id: 1, name: 'Tony Stark', image: 'https://i1.wp.com/themarvelreport.com/wp-content/uploads/2019/05/Tony-Stark-Iron-Man.jpg?fit=1280%2C720', hobbies: ['Being Rich, Having a Super Suit, Shawarma'] }
    }
 
//Action Type
const GET_USER = 'GET_USER'


 //Action Creators
 export function getUser(userObj){
    return{
        type: GET_USER,
        payload:userObj
    }
 } 
 
 export default function reducer(state= initialState, action){
        const {type, payload} = action;
        //switch statement passed action types
        switch(type){
            case GET_USER:
                return {...state, user: payload}
       default:
           return  state;
        
 }
}