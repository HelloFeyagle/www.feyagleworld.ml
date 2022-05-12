import Link from "next/link";

const Footer = ({ better }) => {
  return (
    <>
      <div className="bg-zinc-200/20 bg-opacity-95 dark:bg-opacity-95 w-full px-6 lg:px-12 py-6">
        {/* COPYRIGHT */}
        <div className="lg:flex justify-between w-full">
          <Link href="/">
            <p className="cursor-pointer flex items-center font-medium text-2xl">
              <span className="bg-zinc-200 text-xs px-2 py-1 mr-2 rounded-lg">v3.0</span>xrqu
              <span style={{ zIndex: 4 }} className="relative text-cIndigo">
                .
              </span>
            </p>
          </Link>
          <div className="lg:flex space-x-6 items-center">
            <div className="text-left mt-2 lg:mt-0 lg:text-right">
                <p>
                xrqu.live &copy; 2020 - {new Date().getFullYear()}, All rights reserved.
                </p>
       
                {/* 
                !!!!!!!!!!!!!!!!!!!!!!!!!!!!
                    DONT TOUCH THIS PART
                !!!!!!!!!!!!!!!!!!!!!!!!!!!!
                */}
                <p>
                 Developed with ❤️ by clqu
                </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
