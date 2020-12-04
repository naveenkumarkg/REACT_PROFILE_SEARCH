import React from "react";
import "./crd-list.component.css";

export const CardList = (props) => {
  return (
    <div className="card-list">
      {props.filterValue.map((user) => (
        <div>
          <img class="img-size" src={user.avatar_url} />
          <p key={user.id}>{user.login}</p>
          <a target="_blank" href={user.html_url}>
            Visit Profile
          </a>
        </div>
      ))}
    </div>
  );
};
