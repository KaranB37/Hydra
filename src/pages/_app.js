import Mobilenavbar from "@/Components/Navbar/MobileNavbar";
import Navbar from "@/Components/Navbar/Navbar";
import "@/styles/globals.css";
import { useState, useEffect } from "react";

export default function App({ Component, pageProps }) {
  const [mobNav, setmobNav] = useState(false);

  useEffect(() => {
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", function () {
        navigator.serviceWorker.register("/service-worker.js").then(
          function (registration) {
            console.log(
              "Service Worker registration successful with scope: ",
              registration.scope
            );
          },
          function (err) {
            console.log("Service Worker registration failed: ", err);
          }
        );
      });
    }
  }, []);

  return (
    <div>
      {" "}
      <Navbar mobNav={mobNav} setmobNav={setmobNav} />
      <Mobilenavbar setmobNav={setmobNav} mobNav={mobNav} />
      <Component mobNav={mobNav} {...pageProps} />
    </div>
  );
}
