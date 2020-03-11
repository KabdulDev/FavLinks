import React from 'react';
import Table from './Table';
import Form from './Form';

class LinkContainer extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            favLinks: [
                {name:"Github", URL: "https://Github.com"},
                {name:"Google", URL: "https://Google.com"}
            ]
        }
        {/* Changed favLinks to proper multi-item array using https://dev.to/abdulbasit313/an-easy-way-to-create-a-customize-dynamic-table-in-react-js-3igg */}
        /* TODO - Create state object for storing favLinks */
        this.removeCharacter = this.removeCharacter.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

 /* receive delete function from here shout out Cam https://love2dev.com/blog/javascript-remove-from-array/ */
    removeCharacter = index => {
    delete this.favLinks[this.state.index] 
   
        
    }

    /*Function I used to handle the spreder of the array and to add the different values into the separate elements https://stackoverflow.com/questions/50696857/append-array-of-values-to-the-current-array-in-a-state-in-react-js/50696881*/
    handleSubmit = favLink => {
        /*
            TODO - Create logic to setState and add new favLink to favLinks array in state
        */
       this.setState((state) => ({
           favLinks: [
               ...this.state.favLinks.concat([state]),
               favLink
           ]
       }))
    }

    render() {

        return (
            <div className="container">
                <h1>My Favorite Links</h1>
                <p>Add a new url with a name and link to the table.</p>
                <Table linkData={this.state.favLinks}/> {/* used to pass the necessary data to the Table Component*/}
                
                <br/>

                <h3>Add New</h3>
                {/*TODO - Add Form Component */}
                <Form handleSubmit ={this.handleSubmit}/>
            </div>
        );
    }
}

export default LinkContainer;