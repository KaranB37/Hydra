import Homecard from "@/Components/Cards/Homecard";
import Footer from "@/Components/Footer/Footer";
import Form from "@/Components/Form/Form";
import Hero from "@/Components/Hero/Hero";
import How from "@/Components/How/How";
import Intro from "@/Components/Intro/Intro";
import Misc from "@/Components/Swiper/Misc";
import Technologies from "@/Components/Technologies/Technologies";
import Why from "@/Components/Whyhydra/Why";
import React from "react";

import Image from "next/image";
import Homenew from "@/Components/Homenew/Homenew";

const Index = () => {
  return (
    <>
      <div style={{ width: "100%", backgroundColor: "rgba(48, 44, 66, 1);" }}>
        <Hero />
        {/* <Homecard /> */}

        <Misc />
        <Homenew />
        <Intro />
        <Why />
        <Technologies />
        <How />
        <Form />
        <Footer />
      </div>
    </>
  );
};

export default Index;
