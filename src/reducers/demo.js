import * as Types from '../constants/ActionsTypes';
var initialState = [
  {
    id: 1,
    firstName:"John", 
    lastName:"Doe",
    age: 10,
    job: 'Mobile'
  },
  {
    id: 4,
    firstName:"Alli", 
    lastName:"Trust",
    age: 10,
    job: 'Web'
  },
  {
    id: 2,
    firstName:"Trong", 
    lastName:"Van",
    age: 10,
    job: 'PHP'
  },
  {
    id: 3,
    firstName:"Nghia", 
    lastName:"Mai",
    age: 10,
    job: 'Mobile App'
  },

];

var demo = (state = initialState, action) => {
  switch(action.type){
    case(Types.LIST_DEMO):
    return state;
    default: return state;
  }
};

export default demo;