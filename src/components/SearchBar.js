import React from 'react';

class SearchBar extends React.Component{
    state = { text: ''}
    
    handleChange = (e) => {
        this.setState({
            text: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.onFormSubmit(this.state.text);

        this.setState({text: ''})
    }
    
    render(){
        return(
            <div className="search-bar ui segment">
                <form onSubmit={this.handleSubmit} className="ui form">
                    <div className="field">
                        <label>Video Search </label>
                        <input 
                            placeholder="Search..."
                            type="text" 
                            value={this.state.text}
                            onChange={this.handleChange}
                        />
                        <button className="ui basic button primary">Search Videos</button>
                    </div>
                        
                </form>
            </div>
        )
    }
}

export default SearchBar