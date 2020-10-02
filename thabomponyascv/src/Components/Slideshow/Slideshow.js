import React, { useState, useEffect } from 'react';

import './Slideshow.css';

export default function Slideshow({images=[], interval=3000}){
    const [thumbnails, setThumnails] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [currentSlideStyle, setCurrentSlideStyle] = useState({});
    const [nextSlideStyle, setNextSlideStyle] = useState({});
    const [previousSlideStyle, setPreviousSlideStyle] = useState({});
    useEffect(() => {
        setThumnails(images);
        setCurrentSlideStyle({
            backgroundImage: "url('"+images[currentSlide]+"')",
            backgroundPosition: 'center',
            backgroundSize: '100% 750px',
            backgroundRepeat: 'no-repeat',
        });
        if(currentSlide>0){
            setPreviousSlideStyle({
                backgroundImage: "url('"+images[currentSlide-1]+"')"
            });
        }else{
            setPreviousSlideStyle({
                backgroundImage: "url('"+images[images.length-1]+"')"
            });
        }

        if(currentSlide === images.length-1){
            setNextSlideStyle({
                backgroundImage: "url('"+images[0]+"')"
            });
        }else{
            setNextSlideStyle({
                backgroundImage: "url('"+images[currentSlide+1]+"')"
            });
        } 

        const loop = setInterval(()=>{
            if(currentSlide === images.length-1){
                setCurrentSlide(0);
            }else{
                setCurrentSlide(currentSlide+1);
            }
        }, interval);
        return () => clearInterval(loop);  
    }, [images, currentSlide, interval]);

    function previous(){
        if(currentSlide>0){
            setCurrentSlide(currentSlide-1);
        }else{
            setCurrentSlide(thumbnails.length-1);
        }
    }

    function next(){
        if(currentSlide === thumbnails.length-1){
            setCurrentSlide(0);
        }else{
            setCurrentSlide(currentSlide+1);
        }
    }

    return (
        <section className={"Slideshow"}>
            <div className={"slideHolder"}>
                <section className={"slidePrevious"}>
                    <div style={previousSlideStyle} className={"slideThumnail"}></div>
                </section>
                <section className={"slideCurrent"}>
                    <div style={currentSlideStyle} className={"slideThumnail"}>
                        <div className={"caption"}></div></div>
                    <div className={"caption"}>
                </div>
                </section>
                <section className={"slideNext"}>
                    <div style={nextSlideStyle} className={"slideThumnail"}></div>
                </section>
            </div>
            <div className={"slideshowController"}>
                <span onClick={previous}>Previous</span>
                <span onClick={next}>Next</span>
            </div>
        </section>
    );
};