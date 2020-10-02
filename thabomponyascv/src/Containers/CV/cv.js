import React from 'react';

import Slideshow from '../../Components/Slideshow/Slideshow';
import "./cv.css";
import cv1 from '../../Assets/cv1.png';
import cv2 from '../../Assets/cv2.png';
import cv3 from '../../Assets/cv3.png';
import cv4 from '../../Assets/cv4.png';
import cv5 from '../../Assets/cv5.png';
import cv6 from '../../Assets/cv6.png';
import theCv from "../../Assets/ThabosCV.pdf";

const cv = () => {
    return (
        <div className={"CV"}>
            <div className={"Head"}>
                <h1 >CV</h1>
                <a href={theCv}>Download</a>
            </div>
            <div className={"Slideshow"}>
                <Slideshow
                    interval={30000}
                    images={[
                        cv1,cv2,cv3,cv4,cv5,cv6
                    ]}/>
            </div>
        </div>
    );
}

export default cv;