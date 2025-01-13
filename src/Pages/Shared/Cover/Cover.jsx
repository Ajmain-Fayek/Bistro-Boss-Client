import React from "react";

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
}) => {
    return (
        <div className="hero">
            <img
                className={`w-full ${height} object-cover object-center`}
                src={image}
            />
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
    );
};

export default Cover;
