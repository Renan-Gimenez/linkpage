import React from 'react';

export default function SocialButton(props) {
    return (

        // <h1>{props.name}</h1>


        <div className="socialmedia-div">
            <a href={props.link} target="_blank">
                <p className="socialmedia-name">{props.name}</p>

                <div className="socialmedia-icon">
                    {props.logo}
                </div>
            </a>
        </div>
    );
}