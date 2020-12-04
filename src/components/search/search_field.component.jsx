import React from 'react';

export const Searchfield =(props)=>{
    return (
      <input
        className="search_field"
        placeholder={props.placeholder}
        type="search"
        onChange={props.handleChange}
      />
    );

}