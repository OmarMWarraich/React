import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyA43-0-H4y4CqmXJZO0hwqUPX8c4Y3yu6M';

// Create a new Component. This component should produce some Html.

const App = () => {
    return <div>
        <SearchBar />
    </div>;
}

// Take this component's generated HTML and put it on the page (in the DOM).

ReactDOM.render(<App />, document.querySelector('.container'));