import React from "react";
import { connect } from "react-redux";


class BookDetails extends React.Component {
    render() {

        if(!this.props.Localactivebooks)
        {

            return <div>Select a book to get started</div>
        }


        return (
            <div>
                <h3> Details for :</h3>
                <div>Title : {this.props.Localactivebooks.title}</div>
                <div>Pages : {this.props.Localactivebooks.pages}</div>

            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        Localactivebooks: state.activeBook

    };
}


export default connect(mapStateToProps)(BookDetails);