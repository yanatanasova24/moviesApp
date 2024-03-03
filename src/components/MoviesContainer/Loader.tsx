import React from 'react';
import {ThreeDots} from "react-loader-spinner";

const Loader = () => {
    return (
        <div style={{backgroundColor: '#rgba(255, 255, 255, .6)',
            backdropFilter: "blur(7px) brightness(50%)",
            height: "100vh",
            width:"100vw",
            position: "fixed",
            display:"flex",
            justifyContent: "center",
            alignItems: "center",
            top: 0,
            left: 0 } }>
            <ThreeDots
                visible={true}
                height="80"
                width="80"
                color="#8b6cca"
                radius="9"
                ariaLabel="three-dots-loading"
            />
        </div>

    );
};

export default Loader;