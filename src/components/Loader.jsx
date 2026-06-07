import { useEffect } from "react";
import ContentLoader from "react-content-loader";

function Loader() {


    
    useEffect(() => {
    // Local Storage dən dark modda olub olmadığının yoxlanılıması
    
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.add("light");
    }
}, []);

return (
    <>
      <div className="lg:h-screen h-[300dvh] flex justify-center items-center dark:bg-gray-900 bg-white">
            <div className="w-70 h-70 lg:w-16 lg:h-16 border-4 border-dashed rounded-full animate-spin dark:border-[#00B4BC] border-violet-600"></div>
      </div>
    </>
  );
}

export default Loader;
