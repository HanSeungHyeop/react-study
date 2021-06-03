import React from 'react';

 export function SmallBox(props:{content: string; isWide?: boolean}) {
    let className="small_box"
    if(props.isWide) {
      className = className + ' wide';
    }
    return (
      <div className={className}>
        <p className="content">{props.content}</p>
      </div>
    )
  }