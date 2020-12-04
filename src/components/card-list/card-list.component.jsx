import React from "react";
import "./crd-list.component.css";

export const CardList = (props) => {
  return (
    <div className="card-list">
      {props.filterValue.map((user) => (
        <div key={user.id}>
          <img className="img-size" alt="" src={user.avatar_url} />
          <p key={user.id}>{user.login}</p>
          <a target="_blank" rel="noopener noreferrer" href={user.html_url}>
            Visit Profile
          </a>
        </div>
      ))}
    </div>
  );
};
