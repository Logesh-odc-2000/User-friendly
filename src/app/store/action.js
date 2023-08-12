 import actiontype from './actiontype';

function Add(payload){
    console.log(payload)
    return{
        type:actiontype.ADD,
        payload
}
}
 

function Addnest(id,item){
    return{
        type:actiontype.ADDNEST,
        payload:{
            id,item
        }
    }
}

function Delete(parentIndex){
    return{
        type:actiontype.DELETE,
        payload:{
            parentIndex
        }

    }
}

function Deletenest(parentIndex,childIndex){
    return{
        type:actiontype.DELETENEST,
        payload:{
            parentIndex,
            childIndex
        }
    }
}


function Edit(parentIndex, newName) {
    return {
      type: actiontype.EDIT,
      payload: {
        parentIndex,
        newName,
      },
    };
  }

  function Editnest(parentIndex, childIndex, newName) {
    return {
      type: actiontype.EDITNEST,
      payload: {
        parentIndex,
        childIndex,
        newName,
      },
    };
  }


export default {Add,Addnest,Delete,Deletenest,Edit,Editnest}
