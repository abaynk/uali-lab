import React from "react";

type Props = {};

const SectionCarousel = (props: Props) => {
  return (
    <div className="page_about-midpage-banner__oplXk page_about-midpage-banner--visible__ZXFvV">
      <div className="TestimonialSlider_testimonials__caGyT page_about-testimonials__yw9DG">
        <h2 className="hidden">Testimonials</h2>
        <div className="TestimonialSlider_testimonials__slider__8ckYL">
          <figure
            className="TestimonialSlider_testimonial__Xrc78 TestimonialSlider_testimonial--active__UGwiF"
            style={{
              opacity: 1,
              zIndex: 1,
              transform: "translateX(0vw) translateZ(0px)",
            }}
          >
            <blockquote className="TestimonialSlider_testimonial__quote__Xr_uU">
              “Working with Humaan is an absolute joy. I&apos;d recommend them
              in a heartbeat.”
            </blockquote>
            <figcaption className="TestimonialSlider_testimonial__author__pnq5X">
              <span className="TestimonialSlider_testimonial__author-name__edwCT">
                Josh Maisey
              </span>
              <span className="TestimonialSlider_testimonial__author-position__elLL6">
                Spookfish
              </span>
            </figcaption>
          </figure>
          <div
            className="TestimonialSlider_testimonials__controls-wrapper__5uSZ_"
            style={{ opacity: 1, transform: "translateY(0px)" }}
          >
            <div
              className="TestimonialSlider_testimonials__controls__qYNzx"
              style={{
                transform:
                  "translateX(0%) translateY(0%) rotate(0deg) translateZ(0px)",
              }}
            >
              <button className="TestimonialSlider_testimonials__button__eeZXW TestimonialSlider_testimonials__button--prev__E2E3T">
                <span className="hidden">Previous Testimonial</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="24"
                  fill="none"
                  viewBox="0 0 22 24"
                  className=""
                  style={{ "--width": 22, "--height": 24 } as any}
                >
                  <path
                    fill="currentColor"
                    d="M21.06 13.06a1.5 1.5 0 0 0 0-2.12l-9.545-9.547a1.5 1.5 0 1 0-2.122 2.122L17.88 12l-8.486 8.485a1.5 1.5 0 1 0 2.122 2.122l9.546-9.546ZM0 13.5h20v-3H0v3Z"
                  ></path>
                </svg>
              </button>
              <button className="TestimonialSlider_testimonials__button__eeZXW TestimonialSlider_testimonials__button--next__Pgkaa">
                <span className="hidden">Next Testimonial</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="24"
                  fill="none"
                  viewBox="0 0 22 24"
                  className=""
                  style={{ "--width": 22, "--height": 24 } as any}
                >
                  <path
                    fill="currentColor"
                    d="M21.06 13.06a1.5 1.5 0 0 0 0-2.12l-9.545-9.547a1.5 1.5 0 1 0-2.122 2.122L17.88 12l-8.486 8.485a1.5 1.5 0 1 0 2.122 2.122l9.546-9.546ZM0 13.5h20v-3H0v3Z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionCarousel;
