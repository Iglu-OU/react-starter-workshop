import React from 'react';
import './search.css';

interface ISearchProps {
    onSearch: (value: string) => void;
}

const Search = (props: ISearchProps) => {
    const [value, setValue] = React.useState('');

    const onChange = (event) =>  {
        const newValue = event.target.value;

        setValue(newValue);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        props.onSearch(value.toLowerCase())
    }

    return (
        <form className="search" onSubmit={onSubmit}>
            <button className="search__button" type="submit">
                <i className="fa fa-search" />
            </button>
            <input
                className="search__input"
                onChange={onChange}
                value={value}
                type="search"
                placeholder="Search"
            />
        </form>
    );
}

export default Search;
