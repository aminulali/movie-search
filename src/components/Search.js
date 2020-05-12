import React from 'react'

// search bar component - allows user input
function Search({ handleInput, search }) {
    return (
        <section className="searchbox-wrap">
            <input
                type="text"
                placeholder="Type a movie here"
                className="searchbox"
                onChange={handleInput}
                onKeyPress={search}
            />
        </section>
    )
}

export default Search
