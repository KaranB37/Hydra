import Mobilenavbar from "@/Components/Navbar/MobileNavbar";
import Navbar from "@/Components/Navbar/Navbar";
import "@/styles/globals.css";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [mobNav, setmobNav] = useState(false);

  return (
    <div>
      {" "}
      <Navbar mobNav={mobNav} setmobNav={setmobNav} />
      <Mobilenavbar setmobNav={setmobNav} mobNav={mobNav} />
      <Component mobNav={mobNav} {...pageProps} />
    </div>
  );
}
