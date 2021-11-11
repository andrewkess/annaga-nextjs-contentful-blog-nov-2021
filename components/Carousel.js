import React, { Component } from 'react';
import { CarouselData } from './CarouselData';
import { FaAngleDoubleRight } from 'react-icons/fa';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';


import Swipe from 'react-easy-swipe';

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
    }, 4000);
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
        <div
          className="w-screen h-screen flex overflow-hidden relative"
          style={{
            height:
              '100vh' /* Fallback for browsers that do not support Custom Properties */,
            height: 'calc(var(--vh, 1vh) * 100)',
          }}
        >

<div className="h-min-full absolute inset-y-0 left-0 cursor-pointer outline-none focus:outline-none" onClick={this.prevSlide} >
            <BsChevronCompactLeft className="mx-1 sm:mx-6 text-6xl text-white relative inset-y-1/2" />
          </div>


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
                        ? 'block w-screen h-full object-cover'
                        : 'hidden'
                    }
                  />

                  <a
                    href="/"
                    onMouseEnter={() => {
                      this.setState({ paused: true });
                    }}
                    onMouseLeave={() => {
                      this.setState({ paused: false });
                    }}
                  >
                    <div
                      className={
                        index === this.state.currentSlide
                          ? 'absolute group z-10 py-6 text-white inset-x-0 bottom-0 bg-gradient-to-b from-transparent to-black hover:bg-black hover:bg-opacity-20'
                          : 'hidden'
                      }
                    >
                      <div
                        className="text-7xl font-medium sm:text-8xl lg:text-9xl pl-6 sm:pl-8 md:pl-12 leading-none drop-shadow-lg"
                        style={{
                          fontFamily: "'Bebas Neue', cursive",
                        }}
                      >
                        {slide.title}
                        <FaAngleDoubleRight
                          onClick={this.prevSlide}
                          className="hidden sm:inline text-4xl font-medium sm:text-5xl md:text-6xl lg:text-7xl ml-4 sm:ml-6 md:ml-6 leading-none text-white text-opacity-25 group-hover:text-white"
                        />
                      </div>

                      <div className="text-xl font-medium sm:text-2xl md:text-2xl px-6 sm:px-8 md:px-12 pb-4 pr-18">
                        {slide.blurb}
                      </div>
                    </div>
                  </a>
                </>
              );
            })}
          </Swipe>

          <div className="h-min-full absolute inset-y-0 right-0 cursor-pointer" onClick={this.nextSlide}>
            <BsChevronCompactRight className="mx-1 sm:mx-6 text-6xl text-white relative inset-y-1/2" />
          </div>
        </div>
      </div>
    );
  }
}

export default Carousel;
