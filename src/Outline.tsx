import React from 'react';

export function Outline(props: {children?: JSX.Element[]}) {
    return (
        <div className="App">
            <header className="App-header">
                {props.children}
            </header>
        </div>
    )
  }