import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Avatar from 'react-avatar';

export default function PopupGfg() {
    return (
        <div style={{ margin: '30%' }}>
            <Popup trigger=
                {<button> <Avatar facebookId="100015297108743" round={true} size="50" /> </button>}
                position="bottom center">
                <div>GeeksforGeeks</div>
            </Popup>
        </div>
    )
};

