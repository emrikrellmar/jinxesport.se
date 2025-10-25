import { useEffect, useRef } from "react";

const TWITTER_SCRIPT_ID = "twitter-wjs";
const TWITTER_EMBED_ID = "twitter-feed-jinx";
const TWITTER_PROFILE_URL = "https://twitter.com/jinxesport?ref_src=twsrc%5Etfw";

const TwitterFeed = () => {
  const initializedRef = useRef(false);

  useEffect(() => {
    if (initializedRef.current) {
      return;
    }

    const scriptAlreadyPresent = document.getElementById(TWITTER_SCRIPT_ID);
    if (scriptAlreadyPresent) {
      initializedRef.current = true;
      return;
    }

    const script = document.createElement("script");
    script.id = TWITTER_SCRIPT_ID;
    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;
    script.charset = "utf-8";
    document.body.appendChild(script);

    initializedRef.current = true;
  }, []);

  return (
    <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-carbon/85 p-4 sm:p-6">
      <a
        id={TWITTER_EMBED_ID}
        className="twitter-timeline"
        data-theme="dark"
        data-tweet-limit="3"
        href={TWITTER_PROFILE_URL}
      >
        Tweets by jinxesport
      </a>
    </div>
  );
};

export default TwitterFeed;
