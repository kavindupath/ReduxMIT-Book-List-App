import React from "react";
import {connect} from "react-redux";
import {selectBook} from "../actions/index";
import {bindActionCreators} from "redux";

class BookList extends React.Component{

    renderList()
    {
        return this.props.Localbooks.map((book)=> {
            return(
            <li key={book.title}
                onClick ={()=> this.props.LocalselectBook(book)}
                className="list-group-item">
                {book.title}
            </li>
            );
        });
    }


    render(){
        return(
            <ul className="list-group col-sm-4">
               
                {this.renderList()}
            </ul>
        )
    }
}


function mapStateToProps(state){
    return {
        Localbooks: state.books
       
    };
}

//anything retunrs from this function will end 
//up as props  on the booklist container
function mapDispatchToProps(dispatch){
    //whenever selectBook is called the result should 
    //be passed to all our reducers
  return bindActionCreators({LocalselectBook: selectBook},dispatch);
}

//Promote booklist from a compoent to a container- it needs
//to know about the new dispatch method, selectBook
export default connect (mapStateToProps, mapDispatchToProps)(BookList);