import React from 'react';

interface Props {
  title: string
}

export function TitleBox(props: Props) {
    return (
      <div className="title_box">
        <p className="content">{props.title}</p>
      </div>
    )
  }