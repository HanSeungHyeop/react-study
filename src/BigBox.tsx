import React from 'react';

export function BigBox(props: {children?: JSX.Element[]}) {
    return (
      <div className="big_box">
        {props.children}
      </div>
    )
}
