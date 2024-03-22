import React from 'react'

const FilterComponent = ({ search, setSearch }) => {

    return (
        <form className="searChFilter"  >
            <input type="text"
                name="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                autoComplete="off"
                placeholder='🔍 Search By Name'
            />
        </form>
    )
}

export default FilterComponent
