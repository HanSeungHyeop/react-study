import React from 'react';


let className="small_box"
interface Props {
  content: string
  isWide?: boolean
}

 export function SmallBox(props: Props) {
    const {content, isWide} = props;
       
    if(props.isWide) {
      className = className + ' wide';
    }
    return (
      
      <div className={className}>
        <p className="content">{props.content} {props.isWide}</p>
      </div>
    )
  }