import React from 'react';
import ReactHowler from 'react-howler';


const Music = () => {

    return (

    // const styles = {
    //     fontFamily: 'sans-serif',
    //     textAlign: 'center'
    // };

    // const buttonStyle = {
    //     width: '100px',
    //     padding: '1rem',
    //     margin: '1rem',
    //     background: '#00aa55',
    //     display: 'inline-block',
    //     color: 'white'
    // };


        // const Button = props => (
        //     <div style={buttonStyle} onClick={props.click}>
        //     {props.text}
        //     </div>
        // )

        // const MusicApp = () => (

            <div>
            <h1>Music Channel</h1>
            <button
                text="Play"
                click={() => {
                    console.log('play');
                }}
            />
            <button
                text="Pause"
                click={() => {
                    console.log('pause');
                }}
            />
            <ReactHowler
                src="https://giantbomb-pdl.akamaized.net/podcast/giantbombcast-091608.mp3"
                onload={() => {
                    console.log('loaded');
                }}
                playing={false}
            />
        </div>
        );
    
    // );
};

export default Music;