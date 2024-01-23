"use client";

import { useState } from "react";

import classNames from "classnames";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "../styles/index.scss";

const DATA = [
  {
    id: "1",
    name: "Title of Image 1",
    shortDescription:
      "That a reader will be distracted by the readable content.",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    image: "/assets/images/img1.jpg",
  },
  {
    id: "2",
    name: "Title of Image 2",
    shortDescription:
      "That a reader will be distracted by the readable content.",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    image: "/assets/images/img2.jpg",
  },
  {
    id: "3",
    name: "Title of Image 3",
    shortDescription:
      "That a reader will be distracted by the readable content.",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    image: "/assets/images/img3.jpg",
  },
  {
    id: "4",
    name: "Title of Image 4",
    shortDescription:
      "That a reader will be distracted by the readable content.",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    image: "/assets/images/img4.jpg",
  },
  {
    id: "5",
    name: "Title of Image 5",
    shortDescription:
      "That a reader will be distracted by the readable content.",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    image: "/assets/images/img5.jpg",
  },
  {
    id: "6",
    name: "Title of Image 6",
    shortDescription:
      "That a reader will be distracted by the readable content.",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    image: "/assets/images/img6.jpg",
  },
  {
    id: "7",
    name: "Title of Image 7",
    shortDescription:
      "That a reader will be distracted by the readable content.",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    image: "/assets/images/img7.jpg",
  },
  {
    id: "8",
    name: "Title of Image 8",
    shortDescription:
      "That a reader will be distracted by the readable content.",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    image: "/assets/images/img8.jpg",
  },
  {
    id: "9",
    name: "Title of Image 9",
    shortDescription:
      "That a reader will be distracted by the readable content.",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    image: "/assets/images/img9.jpg",
  },
  {
    id: "10",
    name: "Title of Image 10",
    shortDescription:
      "That a reader will be distracted by the readable content.",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    image: "/assets/images/img10.jpg",
  },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const onSelect = (index: number) => () => {
    setCurrentSlide(index);
  };

  return (
    <main className="overflow-hidden">
      <div className="h-screen w-screen py-16 px-36 mb-20">
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          spaceBetween={50}
          slidesPerView={1}
          loop
          className="my-swiper w-full h-full"
        >
          {DATA.map((slide, slideIndex) => (
            <SwiperSlide key={slide.id} className="my-swiper-slide">
              <div className="relative aspect-video max-w-full">
                <img
                  src={slide.image}
                  alt={slide.name}
                  className="absolute inset-0 w-full h-full object-cover max-w-full"
                />
              </div>
              <div className="absolute right-14 top-1/2 z-1 max-w-[700px] -translate-y-1/2 rounded-2xl p-5 bg-white/5 backdrop-blur-sm">
                <h3 className="text-center text-white mb-5 font-medium text-4xl">
                  {slide.name}
                </h3>
                <p className="text-center text-white">{slide.description}</p>
              </div>
              <div className="absolute top-[25%] left-0">
                <svg
                  width="900"
                  height="600"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M -10 1 C 40 10, 175 10, 295 250 S 750 250, 780 800"
                    stroke="white"
                    fill="transparent"
                  />
                </svg>
              </div>

              <div className="swiper-button-prev cursor-pointer absolute z-1 top-[30%] left-[6%] -rotate-[6deg] w-[192px] h-[108px] rounded-xl overflow-hidden border-solid border-white hover:border-[lightpink] border-[2px] hover:border-[3px]">
                <div className="relative aspect-video">
                  <img
                    src={
                      DATA[(slideIndex === 0 ? DATA.length : slideIndex) - 1]
                        .image
                    }
                    alt={
                      DATA[(slideIndex === 0 ? DATA.length : slideIndex) - 1]
                        .name
                    }
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
              </div>

              <div className="absolute z-1 top-[51%] left-[13%] rotate-[3deg] w-[192px] h-[108px] rounded-xl overflow-hidden border-solid border-white hover:border-[lightpink] border-[2px] hover:border-[3px]">
                <div className="relative aspect-video">
                  <img
                    src={DATA[slideIndex].image}
                    alt={DATA[slideIndex].name}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
              </div>

              <div className="swiper-button-next cursor-pointer absolute z-1 top-[67%] left-[26%] -rotate-[3deg] w-[192px] h-[108px] rounded-xl overflow-hidden border-solid border-white hover:border-[lightpink] border-[2px] hover:border-[3px]">
                <div className="relative aspect-video">
                  <img
                    src={
                      DATA[slideIndex === DATA.length - 1 ? 0 : slideIndex + 1]
                        .image
                    }
                    alt={
                      DATA[slideIndex === DATA.length - 1 ? 0 : slideIndex + 1]
                        .name
                    }
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="flex gap-4 py-16 px-36 mb-20">
        {DATA.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            className={classNames(
              slideIndex !== currentSlide
                ? "w-[60px] cursor-pointer"
                : "w-[640px]",
              "relative h-[360px] rounded-[30px] overflow-hidden transition-width duration-300"
            )}
            onClick={
              slideIndex !== currentSlide ? onSelect(slideIndex) : () => {}
            }
          >
            <img
              src={slide.image}
              alt={slide.name}
              className="absolute object-cover inset-0 h-full w-full"
            />
            <div
              className={classNames(
                slideIndex !== currentSlide
                  ? "p-3 justify-center"
                  : "py-3 px-4 gap-3",
                "absolute inset-0 flex items-end"
              )}
            >
              <div className="flex items-center justify-center gap-3">
                <span className="flex shrink-0 items-center justify-center w-[37px] h-[37px]  rounded-full text-base bg-white/[0.3] backdrop-blur-[1px] text-white font-medium">
                  {slideIndex + 1}
                </span>
                <span
                  className={classNames(
                    slideIndex !== currentSlide && "hidden",
                    "flex-1 text-white whitespace-nowrap"
                  )}
                >
                  {slide.shortDescription}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
