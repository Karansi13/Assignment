import React from "react";
import { CiCircleCheck } from "react-icons/ci";
import { CiCircleInfo } from "react-icons/ci";
import { GoDash } from "react-icons/go";
import { FaAngleDown } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
import best1 from "../assets/best1.png";
import best2 from "../assets/best2.png";
import "../App.css"


const Home = () => {
  return (
    <div className="mx-[284px] mt-[50px] bg-bg">
      <h1 className="font-Inter font-normal text-5xl">
        Best Website builders in the US
      </h1>
      <div className="h-auto mt-6">
        <div className="h-[2px] w-[1024] bg-line"></div>
        <div className="h-auto my-3 flex items-center justify-between">
          <div className="flex justify-around items-center font-sm text-[14px] text-updt gap-2">
            <CiCircleCheck className="text-cicon text-2xl font-bold" />
            <p>Last Updated</p>
            <GoDash className="text-cicon " />
            <p>February 22, 2020</p>
            <CiCircleInfo className="text-cicon text-2xl" />
            <p>Advertising Disclosure</p>
          </div>

          <div className="flex justify-around items-center font-sm text-relav gap-2 text-[14px]">
            <p>Top Relevant</p>
            <FaAngleDown className="text-cicon text-xl" />
          </div>
        </div>
        <div className="h-[2px] w-[1024] bg-line"></div>

        <div className="text-updt flex mt-4 gap-8 text-[14px]">
          <div className="w-[105px] h-[36px] rounded-[12px] bg-fh flex justify-center items-center ">
            Tools
          </div>
          <div className="w-[105px] h-[36px] rounded-[12px] bg-fh flex justify-center items-center ">
            AWS Builder
          </div>
          <div className="w-[105px] h-[36px] rounded-[12px] bg-fh flex justify-center items-center ">
            Start Build
          </div>
          <div className="w-[105px] h-[36px] rounded-[12px] bg-fh flex justify-center items-center ">
            Build Supplies
          </div>
          <div className="w-[105px] h-[36px] rounded-[12px] bg-fh flex justify-center items-center ">
            Tooling
          </div>
          <div className="w-[105px] h-[36px] rounded-[12px] bg-fh flex justify-center items-center ">
            BlueHosting
          </div>
        </div>

        <nav className="flex text-relv mt-4" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
            <li className="inline-flex items-center">
              <a
                href="#"
                className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
              >
                Home
              </a>
            </li>
            <li>
              <div className="flex items-center">
                <svg
                  className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
                <a
                  href="#"
                  className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
                >
                  Hosting for all
                </a>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <svg
                  className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
                <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">
                  Hosting6
                </span>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <svg
                  className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
                <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">
                  Hosting5
                </span>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <svg
                  className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
                <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">
                  Hosting
                </span>
              </div>
            </li>
          </ol>
        </nav>

        {/* box 1 */}
        <div className="mt-14 flex justify-evenly items-center bg-fh h-[265px] p-6 rounded-custom">
          <div className="w-[967px] h-[218px] flex p-2 ">
            <div className="h-[34px] w-[136px] bg-orange absolute top-[22.8rem] right-[68.7rem]  flex gap-2  rounded-r-lg">
              <img src={best1} alt="" className="mt-1 ml-2" />
              <span className="text-fh flex text-sm items-center">Best Choice</span>
            </div>

            <div className="bg-fh h-[44px] w-[44px] rounded-full flex justify-center items-center relative right-[1.6rem] mt-2 text-xl">
              <span className="text-he">1</span>
            </div>

            <div className="flex w-[160px] h-[218px] flex-col">
              <img
                src="https://s3-alpha-sig.figma.com/img/3250/2fc6/187db358671328189d3da83955a6ffe9?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ax2xncFBKe1xE2EsxdvElceh8oIqKj5N0jH4NJTiBcahukOzPxx4h1z6yHWL5iAGwcZziaBWfUhJnOIkYfeTkuKTAQ3cZ0jcc19S7zOzX3YtV8qd2foEnwflcvKEK8-iqw~VegstF5Nw8QROw9i36ihQaXHBsSdmfGb7V~XdDUKn2fabEOEcm2tN9ETF0zbCn6Tq~PYk9pxyghi5P3ugATGWGP8ljAH8tlJzjgbGXnUBNNTS4sfQDZNsmBvFmdtbDb28LeFrh~MRRFxi7hGf1M9mBH8gyb7qPYFk0pRsrwIdNrDPTsn0IaF8FPwAR8zL3wCBUlfMgzxP1E-gqRbjxQ__"
                alt=""
                className="object-contain mt-12 mr-4"
              />
              <span className="text-he mt-4 text-center">Builder 1</span>
            </div>
            <div className="flex flex-col text-[16px] flex-wrap w-[505px] h-[218px] p-3">
              <span className="text-updt">
                <span className="text-updt font-bold">
                  {" "}
                  WixPro 72-Inch Responsive Website Builder-{" "}
                </span>
                Comprehensive Digital Platform Creation Tool, Streamlined Design
                Interface for Professional Websites and Online Stores
                (Black/Blue)
              </span>
              <span className="text-updt font-bold my-2">Main highlights</span>
              <span className="ml-4">
                [What You Get]: Receive the WixPro website builder suite, access
                to premium design templates, an extensive library of widgets and
                apps, and detailed step-by-step guides.
              </span>
            </div>
            <div className="flex h-[218px] w-[232px] flex-col">
              <div className="w-[135px] h-[118px] bg-sb relative bottom-[32px] left-10 rounded-t-none rounded-b-lg">
                <div className="text-num text-4xl text-center mt-2">9.8</div>
                <div className="text-num text-sm text-center mt-2">
                  Exceptional
                </div>
                <div className="text-gold flex mt-3 justify-center">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </div>
              <div className="mt-5 text-fh w-[232px] h-[48px] relative top-[30px] left-[5px]">
                <button className="bg-blue w-[100%] h-[100%] rounded-[12px]">
                  View
                </button>
              </div>
              <span className="relative text-blue right-[30.9rem] top-[1.2rem] flex items-center gap-2">
                Show more
                <FaAngleDown className="mt-[5px]" />
              </span>
            </div>
          </div>
        </div>
        {/* box 2 */}
        <div className="mt-10 flex justify-evenly items-center bg-fh h-[265px] p-6 rounded-custom">
          <div className="w-[967px] h-[218px] flex p-2 ">
            <div className="h-[34px] w-[136px] bg-orange absolute top-[41.8rem] right-[68.7rem]  flex gap-2  rounded-r-lg">
              <img src={best2} alt="" className="mt-1 ml-2" />
              <span className="text-fh flex items-center">Best Value</span>
            </div>

            <div className="bg-fh h-[44px] w-[44px] rounded-full flex justify-center items-center relative right-[1.6rem] mt-2 text-xl">
              <span className="text-he">2</span>
            </div>

            <div className="flex w-[160px] h-[218px] flex-col">
              <img
                src="https://s3-alpha-sig.figma.com/img/3250/2fc6/187db358671328189d3da83955a6ffe9?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ax2xncFBKe1xE2EsxdvElceh8oIqKj5N0jH4NJTiBcahukOzPxx4h1z6yHWL5iAGwcZziaBWfUhJnOIkYfeTkuKTAQ3cZ0jcc19S7zOzX3YtV8qd2foEnwflcvKEK8-iqw~VegstF5Nw8QROw9i36ihQaXHBsSdmfGb7V~XdDUKn2fabEOEcm2tN9ETF0zbCn6Tq~PYk9pxyghi5P3ugATGWGP8ljAH8tlJzjgbGXnUBNNTS4sfQDZNsmBvFmdtbDb28LeFrh~MRRFxi7hGf1M9mBH8gyb7qPYFk0pRsrwIdNrDPTsn0IaF8FPwAR8zL3wCBUlfMgzxP1E-gqRbjxQ__"
                alt=""
                className="object-contain mt-12 mr-4"
              />
              <span className="text-he mt-4 text-center">Biulder</span>
            </div>
            <div className="flex flex-col text-[16px] flex-wrap w-[505px] h-[218px] p-3">
              <span className="text-updt">
                <span className="text-updt font-bold">
                  {" "}
                  SiteCraft 68-Inch Ultimate Web Design Studio-
                </span>
                Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor
                for Dynamic Websites and E-commerce Platforms (Green/White)
              </span>
              <span className="text-updt font-bold my-2">Main highlights</span>
              <span className="ml-4">
                [What You Get]: Gain access to the SiteCraft design studio,
                featuring a robust selection of design elements, SEO
                optimization tools, and e-commerce integrations.
              </span>
            </div>
            <div className="flex h-[218px] w-[232px] flex-col">
              <div className="w-[135px] h-[118px] bg-sb relative bottom-[32px] left-10 rounded-t-none rounded-b-lg">
                <div className="text-num text-4xl text-center mt-2">9.5</div>
                <div className="text-num text-sm text-center mt-2">
                  Exceptional
                </div>
                <div className="text-gold flex mt-3 justify-center">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </div>
              <div className="mt-5 text-fh w-[232px] h-[48px] relative top-[30px] left-[5px]">
                <button className="bg-blue w-[100%] h-[100%] rounded-[12px]">
                  View
                </button>
              </div>
              <span className="relative text-blue right-[30.9rem] top-[1.2rem] flex items-center gap-2">
                Show more
                <FaAngleDown className="mt-[5px]" />
              </span>
            </div>
          </div>
        </div>
        {/* box 3 */}
        <div className="mt-10 flex justify-evenly items-center bg-fh h-[265px] p-6 rounded-custom">
          <div className="w-[967px] h-[218px] flex p-2 ">
            <div className="bg-fh h-[44px] w-[44px] rounded-full flex justify-center items-center relative right-[1.6rem] mt-2 text-xl">
              <span className="text-he">3</span>
            </div>

            <div className="flex w-[160px] h-[218px] flex-col">
              <img
                src="https://s3-alpha-sig.figma.com/img/3250/2fc6/187db358671328189d3da83955a6ffe9?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ax2xncFBKe1xE2EsxdvElceh8oIqKj5N0jH4NJTiBcahukOzPxx4h1z6yHWL5iAGwcZziaBWfUhJnOIkYfeTkuKTAQ3cZ0jcc19S7zOzX3YtV8qd2foEnwflcvKEK8-iqw~VegstF5Nw8QROw9i36ihQaXHBsSdmfGb7V~XdDUKn2fabEOEcm2tN9ETF0zbCn6Tq~PYk9pxyghi5P3ugATGWGP8ljAH8tlJzjgbGXnUBNNTS4sfQDZNsmBvFmdtbDb28LeFrh~MRRFxi7hGf1M9mBH8gyb7qPYFk0pRsrwIdNrDPTsn0IaF8FPwAR8zL3wCBUlfMgzxP1E-gqRbjxQ__"
                alt=""
                className="object-contain mt-12 mr-4"
              />
              <span className="text-he mt-4 text-center">Builder 1</span>
            </div>
            <div className="flex flex-col text-[16px] flex-wrap w-[505px] h-[218px] p-3">
              <span className="text-updt">
                <span className="text-updt font-bold">
                  {" "}
                  WixPro 72-Inch Responsive Website Builder-{" "}
                </span>
                Comprehensive Digital Platform Creation Tool, Streamlined Design
                Interface for Professional Websites and Online Stores
                (Black/Blue)
              </span>
              <span className="text-updt font-bold my-2">Main highlights</span>
              <span className="ml-4">
                [What You Get]: Receive the WixPro website builder suite, access
                to premium design templates, an extensive library of widgets and
                apps, and detailed step-by-step guides.
              </span>
            </div>
            <div className="flex h-[218px] w-[232px] flex-col">
              <div className="w-[135px] h-[118px] bg-sb relative bottom-[32px] left-10 rounded-t-none rounded-b-lg">
                <div className="text-num text-4xl text-center mt-2">9.3</div>
                <div className="text-num text-sm text-center mt-2">
                  Exceptional
                </div>
                <div className="text-gold flex mt-3 justify-center">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </div>
              <div className="mt-5 text-fh w-[232px] h-[48px] relative top-[30px] left-[5px]">
                <button className="bg-blue w-[100%] h-[100%] rounded-[12px]">
                  View
                </button>
              </div>
              <span className="relative text-blue right-[30.9rem] top-[1.2rem] flex items-center gap-2">
                Show more
                <FaAngleDown className="mt-[5px]" />
              </span>
            </div>
          </div>
        </div>
        {/* box 4 */}
        <div className="mt-10 flex justify-evenly items-center bg-fh h-[436px] p-6 rounded-custom">
          <div className="w-[967px] h-[382px] flex p-2 ">
            <div className="bg-fh h-[44px] w-[44px] rounded-full flex justify-center items-center relative right-[1.6rem] mt-2 text-xl">
              <span className="text-he">4</span>
            </div>

            <div className="flex w-[160px] h-[218px] flex-col">
              <img
                src="https://s3-alpha-sig.figma.com/img/3250/2fc6/187db358671328189d3da83955a6ffe9?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ax2xncFBKe1xE2EsxdvElceh8oIqKj5N0jH4NJTiBcahukOzPxx4h1z6yHWL5iAGwcZziaBWfUhJnOIkYfeTkuKTAQ3cZ0jcc19S7zOzX3YtV8qd2foEnwflcvKEK8-iqw~VegstF5Nw8QROw9i36ihQaXHBsSdmfGb7V~XdDUKn2fabEOEcm2tN9ETF0zbCn6Tq~PYk9pxyghi5P3ugATGWGP8ljAH8tlJzjgbGXnUBNNTS4sfQDZNsmBvFmdtbDb28LeFrh~MRRFxi7hGf1M9mBH8gyb7qPYFk0pRsrwIdNrDPTsn0IaF8FPwAR8zL3wCBUlfMgzxP1E-gqRbjxQ__"
                alt=""
                className="object-contain mt-12 mr-4"
              />
              <span className="text-he mt-4 text-center">CDK</span>
            </div>

            <div className="flex flex-col text-[16px] flex-wrap w-[505px] h-[382px] p-3">
              <span className="text-updt">
                <span className="text-updt font-bold">
                  {" "}
                  CDK Resposive Builder:{" "}
                </span>
                An extensive library of widgets and apps, and detailed
                step-by-step guides (Black/Blue)
              </span>
              <span className="h-[26px] w-[61px] bg-off mt-2 text-off2 text-[13px] text-center">
                26% Off
              </span>
              <span className="text-updt font-bold mb-2">Main highlights</span>
              {/* <span className="ml-4">[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.</span> */}

              <div className="h-[116px] w-[505px] bg-new ml-6">
                <div className="flex mt-2 gap-2">
                  <div className="h-[28px] w-[40px] bg-fh  ml-3 text-center text-blue">
                    9.9
                  </div>
                  <span className="text-updt">building responsive</span>
                </div>
                <div className="flex gap-2 mt-2 ">
                  <div className="h-[28px] w-[40px] bg-fh  ml-3 text-center text-blue">
                    9.9
                  </div>
                  <span className="text-updt ">Cool</span>
                </div>
                <div className="flex gap-2 mt-2">
                  <div className="h-[28px] w-[40px] bg-fh  ml-3 text-center text-blue">
                    9.9
                  </div>
                  <span className=" text-updt">Docs</span>
                </div>
              </div>

              <div className="h-[112px] w-[505px] mt-3">
                <span>Why we love it</span>
                <div className="flex mt-1 gap-2">
                  <div className="h-[28px] w-[40px] bg-fh  ml-3 text-center text-blue flex items-center justify-center">
                  <CiCircleCheck className="text-xl"/>
                  </div>
                  <span className="text-updt">building responsive</span>
                </div>
                <div className="flex gap-2 mt-1">
                  <div className="h-[28px] w-[40px] bg-fh  ml-3 text-center text-blue flex items-center justify-center">
                  <CiCircleCheck className="text-xl"/>
                  </div>
                  <span className="text-updt ">Cool</span>
                </div>
                <div className="flex gap-2 mt-1">
                  <div className="h-[28px] w-[40px] bg-fh  ml-3 text-center text-blue flex items-center justify-center">
                  <CiCircleCheck className="text-xl"/>
                  </div>
                  <span className=" text-updt">Docs</span>
                </div>
              </div>
            </div>
            <div className="flex h-[218px] w-[232px] flex-col">
              <div className="w-[135px] h-[118px] bg-sb relative bottom-[35px] left-10 rounded-t-none rounded-b-lg">
                <div className="text-num text-4xl text-center mt-2">9.1</div>
                <div className="text-num text-sm text-center mt-2">
                  Exceptional
                </div>
                <div className="text-gold flex mt-3 justify-center">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </div>
              <div className="mt-5 text-fh w-[232px] h-[48px]  view">
                <button className="bg-blue w-[100%] h-[100%] rounded-[12px]">
                  View
                </button>
              </div>
              <div className="text-blue flex items-center gap-2 box">
                Show more
                <FaAngleDown className="mt-[5px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
