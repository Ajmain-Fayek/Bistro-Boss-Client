import React from "react";
import { Parallax } from "react-parallax";

const Cover = ({
    image,
    height = "h-[700px]",
    subTitle = "pass prop for subTitle - subtitle = {'Subtitle'}",
    title = "pass prop for Title - title = {'Title'}",
    titleFontSize = "4xl",
    subTitleFont = "Cinzel",
    subTitleFontSize = "base",
    contentMargin = "",
    contentPadding = "py-36",
    parallaxDisabled = false,
}) => {
    return (
        <>
            <Parallax
                bgImage={image}
                disabled={parallaxDisabled}
                bgImageStyle={{
                    height,
                    backgroundSize: "cover",
                    objectFit: "cover",
                    objectPosition: "center",
                    width: "100%",
                }}
                strength={500}
            >
                <div className={`hero h-[${height}]`}>
                    <div
                        className={`hero-content ${contentMargin} w-full bg-overlay text-white ${contentPadding} text-center`}
                    >
                        <div className="max-w-md">
                            <h1
                                className={`mb-5 uppercase text-${titleFontSize} font-Cinzel font-bold`}
                            >
                                {title}
                            </h1>
                            <p
                                className={`font-semibold text-${subTitleFontSize} font-${subTitleFont}`}
                            >
                                {subTitle}
                            </p>
                        </div>
                    </div>
                </div>
            </Parallax>
        </>
    );
};

export default Cover;
