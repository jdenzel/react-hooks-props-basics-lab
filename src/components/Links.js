import React from "react";

function Links(props){
    return (
        <div>
        <h3>Links</h3>
        <a href={props.github} textcontent={props.github}>{props.github}</a>
        <a href={props.linkedin} textcontent={props.linkedin}>{props.linkedin}</a>
        
        </div>
    )
}

export default Links;