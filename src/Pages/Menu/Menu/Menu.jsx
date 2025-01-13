import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import img from "../../../assets/menu/banner3.jpg";

const Menu = () => {
    return (
        <>
            <Helmet>
                <title>Menu | Bistro Boss</title>
            </Helmet>
            <Cover
                height={"800px"}
                image={img}
                title={"our menu"}
                subTitle={"Would you like to try a dish?"}
                contentMargin="mt-20"
                parallaxDisabled={true}
            />
        </>
    );
};

export default Menu;
