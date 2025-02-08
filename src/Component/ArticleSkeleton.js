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
    <div className="App">
      <div className="titleHead">
        <h1>{respData.data?.title}</h1>
      </div>
      <div className="tags">
        {convertTagsToArray(respData.data?.tag || "").map((item, index) => (
          <button key={index} className="tagsIcon">
            {item}
          </button>
        ))}
      </div>
      <div className="secDivider"></div>
      <div className="titleAuthor">
        <p className="author">
          Newsletter AI <button className="brief">Brief In</button>
        </p>
      </div>
      <section>
        {respData.data?.content?.length > 0 ? (
          respData.data?.content.map((section, index) => (
            <div key={index}>
              <h3 className="subHeads">{section.subtitle}</h3>
              <p className="para" style={{ fontSize: "16px" }}>
                {section.paragraph}
              </p>
            </div>
          ))
        ) : (
          <p>No content available. Please try again.</p>
        )}
      </section>
      <div className="secDivider"></div>
      <section>
        <h2>More newsletter</h2>
        <div className="moreNewsletter">
          {moreNewsletter.map((item) => (
            <h3>{item.title}</h3>
          ))}
        </div>
      </section>
      <br />
      <br />
      <section>
        <form action={(e) => e.preventDefault()}>
          <input
            onChange={(e) => setInput(e.target.value)}
            value={input}
            type="text"
            placeholder="Enter your email"
          />
          <br />
          <input onClick={onSubscribe} type="button" value={subscribeStatus} />
        </form>
      </section>
      <br />
      <br />
    </div>
  );
};

export default ArticleSkeleton;
