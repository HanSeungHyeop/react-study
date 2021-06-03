import React from 'react';

export function TitleBox(props: {title:string}) {
    return (
      <div className="title_box">
        <p className="content">{props.title}</p>
      </div>
    )
  }