import React, { Component } from "react";
import { CarouselData } from "./CarouselData";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Swipe from "react-easy-swipe";

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSlide: 0,
      paused: false,
    };
  }

  componentDidMount() {
    setInterval(() => {
      if (this.state.paused === false) {
        let newSlide =
          this.state.currentSlide === CarouselData.length - 1
            ? 0
            : this.state.currentSlide + 1;
        this.setState({ currentSlide: newSlide });
      }
    }, 3000);
  }

  nextSlide = () => {
    let newSlide =
      this.state.currentSlide === CarouselData.length - 1
        ? 0
        : this.state.currentSlide + 1;
    this.setState({ currentSlide: newSlide });
  };

  prevSlide = () => {
    let newSlide =
      this.state.currentSlide === 0
        ? CarouselData.length - 1
        : this.state.currentSlide - 1;
    this.setState({ currentSlide: newSlide });
  };

  setCurrentSlide = (index) => {
    this.setState({ currentSlide: index });
  };

  render() {
    return (
      <div className="m-0">
        <div className="bg-red-900 w-screen h-screen flex overflow-hidden relative">
          <AiOutlineLeft
            onClick={this.prevSlide}
            className="m-2 absolute left-0 text-3xl inset-y-1/2 text-white cursor-pointer"
          />

          <Swipe onSwipeLeft={this.nextSlide} onSwipeRight={this.prevSlide}>
            {CarouselData.map((slide, index) => {
              return (
                  <>
                <img
                  src={slide.image}
                  alt="This is a carousel slide"
                  key={index}
                  className={
                    index === this.state.currentSlide
                      ? "block w-screen h-full object-cover"
                      : "hidden"
                  }
                  onMouseEnter={() => {
                    this.setState({ paused: true });
                  }}
                  onMouseLeave={() => {
                    this.setState({ paused: false });
                  }}
                />


    {/* 
    right: 15%;
    bottom: 20px;
    left: 15%;
    text-align: center;
    display: block!important; */}


                <div
                
                className={
                    index === this.state.currentSlide
                      ? "absolute z-10 py-6 text-white inset-x-0 bottom-0"
                      : "hidden"
                  }
                >
          <h5 className="text-7xl sm:text-8xl md:text-9xl px-8 leading-none" style={{fontFamily: "'Bebas Neue', cursive"}}>{slide.title}</h5>
          <div className="text-1xl sm:text-2xl md:text-3xl px-8 leading-none">{slide.blurb}</div>
        </div>
        </>
              );
            })}
          </Swipe>


          <AiOutlineRight
            onClick={this.nextSlide}
            className="absolute m-2 right-0 text-3xl inset-y-1/2 text-white cursor-pointer"
          />
        </div>
      </div>
    );
  }
}

export default Carousel;