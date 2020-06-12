import React from "react";
import {connect} from "react-redux";


 class BookDetails extends React.Component{
    render(){
        return(
            <div>Book Details !!!</div>
        );
    }
}

function mapStateToProps(state){
    return {
        Localactivebooks: state.activeBook
       
    };
}


export default connect(mapStateToProps)(BookDetails);