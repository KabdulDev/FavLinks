import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name : '',
            URL: ''
        }
        
        /*
            TODO - set initial state for link name and URL 

        */
    }

    handleNameChange = event => {
        this.setState({
            name: event.target.value
            

        })
    }

    handleUrlChange = event => {
        this.setState({
            URL: event.target.value

        })
    }

   

    onFormSubmit = (event) => {
        // to prevent page reload on form submit
        event.preventDefault();
        {/*console.log(this.state.name) */}
        this.props.handleSubmit(this.state)
        
        
        /*
            TODO - Logic for calling props to handle submission and setting state changes
        */

    }

    render() {

        return(
            <form onSubmit = {this.onFormSubmit}> {/*Sets up the code to use onFormSubmit function when using submit button*/}
                {/* TODO - Logic for returning a form element with labels and inputs for link name and URL */}
                <label for="linkname"> Link Name: </label>
                <input
                    type="text"
                    value={this.state.name}
                    onChange={this.handleNameChange}
                />
                <label for="URL"> URL: </label>
                <input
                    type="url"
                    pattern="https?://.+*" 
                    value={this.state.URL}
                    onChange={this.handleUrlChange}
                />
                <button type ='submit' > Add Site </button>
                
                {/*<button typeonClick={this.onFormSubmit}> Add Link Name </button> */}

            </form>
        )
    
    }
}

export default Form;
