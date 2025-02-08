import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "../App.css"

const ArticleSkeleton = () => {
  const location = useLocation();
  const [respData, setRespData] = useState([]);
  const [moreNewsletter, setMoreNewsletter] = useState([]);
  const [subscribeStatus, setSubscribeStatus] = useState("Subscribe");
  const [input, setInput] = useState("");

  // Parse the query string
  const queryParams = new URLSearchParams(location.search);
  const title = queryParams.get("");
  console.log(title);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const resp = await axios(
          `${process.env.REACT_APP_BASE_URL}/getData?title=${encodeURIComponent(
            title
          )}`,
          {
            headers: {
              "X-API-KEY": process.env.REACT_APP_AUTH_KEY,
            },
          }
        );
        // const data = resp;
        setRespData(resp.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchContent();
    onLoad();
    console.log("working")
  }, []);

  function removeObjectByTitle(array, titleToRemove) {
    return array.filter((item) => item.title !== titleToRemove).reverse();
  }

  const onLoad = async () => {
    try {
      const resp = await axios(`${process.env.REACT_APP_BASE_URL}/getAllData`, {
        headers: {
          "X-API-KEY": process.env.REACT_APP_AUTH_KEY,
        },
      });
      // const data = resp;
      const data = resp.data.data;
      console.log(respData.data?.title);
      const updatedData = removeObjectByTitle(data, title);
      console.log(updatedData);
      setMoreNewsletter(updatedData);
    } catch (err) {
      console.log(err);
    }
  };

  function convertTagsToArray(tagsString) {
    if (!tagsString || typeof tagsString !== "string") {
      console.warn("Tags string is either undefined or not a valid string.");
      return []; // Return an empty array if the input is invalid
    }
    return tagsString.split(",").map((tag) => tag.trim());
  }

  async function onSubscribe() {
    // e.preventDefault();
    setSubscribeStatus("Subscribing...")
    try {
      const resp = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/addSub`,
        {
          submail: input,
        },
        {
          headers: {
            "X-API-KEY": process.env.REACT_APP_AUTH_KEY,
          },
        }
      );
      const data = resp.data.status_code;
      if (data === 200) {
        setSubscribeStatus("Subscribed");
      } else {
        alert("not subscribed due to network issue! Try again!");
        setSubscribeStatus("Subscribe");
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative items-center px-4 sm:px-6 lg:px-8 z-0">
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none z-[-1]">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-black"></div>
      </div>
      <h1 className=" mt-4 text-3xl sm:text-4xl font-bold text-center mb-6">
        <span className="relative">
          {/* <span className="absolute inset-0 -z-10 blur-[2px] text-blue-500 opacity-70">{respData.data?.title}</span> */}
          <span className="relative">{respData.data?.title}</span>
        </span>
      </h1>
      <div className="mt-8 flex flex-col items-center flex-wrap justify-center gap-2">
        <div className="flex flex-wrap justify-center gap-2" >
          {convertTagsToArray(respData.data?.tag || "").map((item, index) => (
            <button key={index} className="bg-blue-900/20 text-blue-400 px-3 py-1 rounded-full text-sm border border-blue-500/20 hover:border-blue-500/40 transition-colors">
              {item}
            </button>
          ))}
        </div>
        <div className="mt-2">
          <p className="author">
            Newsletter AI <button className="bg-blue-900/20 text-blue-400 px-3 py-1 rounded-full text-sm border border-blue-500/20 hover:border-blue-500/40 transition-colors">Brief In</button>
          </p>
        </div>
      </div>
      {/* <div className="secDivider"></div> */}
      <section className=" md:w-[68%] flex flex-col prose prose-invert prose-blue max-w-none text-center leading-relaxed">
        {respData.data?.content?.length > 0 ? (
          respData.data?.content.map((section, index) => (
            <div key={index}>
              <h4 className="font-bold text-center mb-2">
                <span className="relative">
                  {/* <span className="absolute inset-0 -z-10 blur-[2px] text-blue-500 opacity-70">• {section.subtitle}</span> */}
                  <span className="relative">• {section.subtitle}</span>
                </span>
              </h4>
              <p className="text-gray-300 text-left mb-4">
                {section.paragraph}
              </p>
            </div>
          ))
        ) : (
          <p>No content available. Please try again.</p>
        )}
      </section>
      <div className="secDivider"></div>
      <section className="flex items-center flex-wrap justify-center">
        <h2 className="font-bold text-center">
          <span className="relative">
            {/* <span className="absolute inset-0 -z-10 blur-[2px] text-blue-500 opacity-70">{respData.data?.title}</span> */}
            <span className="relative">More newsletter : </span>
          </span>
        </h2>
        <div className="ml-2">
          {moreNewsletter.map((item) => (
            <h3>{item.title}</h3>
          ))}
        </div>
      </section>
      <br />
      <br />
      <section className="flex flex-col items-center px-4">
        <form className=" p-6  flex flex-col items-center" action={(e) => e.preventDefault()}>
          <input
            onChange={(e) => setInput(e.target.value)}
            value={input}
            type="text"
            placeholder="Enter your email"
            className="w-[96%] p-3 text-white bg-white/10 border border-white/20 rounded-lg outline-none transition-all focus:border-blue-500 focus:bg-white/20 placeholder-white/50"
            style={
              {
                width: "25%",
                borderRadius: "6px"
              }
            }
          />
          <br />
          <input className="w-[10%] py-3 text-white font-semibold bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg transition-all hover:from-blue-500 hover:to-blue-300 active:scale-95" onClick={onSubscribe} type="button" value={subscribeStatus} />
        </form>
      </section>
      <br />
      <br />
    </div>
  );
};

export default ArticleSkeleton;
