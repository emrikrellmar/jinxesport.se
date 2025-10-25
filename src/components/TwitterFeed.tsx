import { useEffect, useRef } from "react";

const TWITTER_SCRIPT_ID = "twitter-wjs";
const TWITTER_PROFILE_URL = "https://twitter.com/jinxesport?ref_src=twsrc%5Etfw";

const TwitterFeed = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const hasInitializedRef = useRef(false);

  useEffect(() => {
    const renderTimeline = () => {
      const twttr = (window as typeof window & {
        twttr?: { widgets?: { load: (element?: Element | null) => void } };
      }).twttr;

      if (twttr?.widgets && containerRef.current) {
        twttr.widgets.load(containerRef.current);
      }
    };

    if (hasInitializedRef.current) {
      renderTimeline();
      return;
    }

    const existingScript = document.getElementById(TWITTER_SCRIPT_ID) as HTMLScriptElement | null;

    if (existingScript) {
      existingScript.addEventListener("load", renderTimeline);
      renderTimeline();
      hasInitializedRef.current = true;

      return () => {
        existingScript.removeEventListener("load", renderTimeline);
      };
    }

    const script = document.createElement("script");
    script.id = TWITTER_SCRIPT_ID;
    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;
    script.charset = "utf-8";
    script.addEventListener("load", renderTimeline);
    document.body.appendChild(script);

    hasInitializedRef.current = true;

    return () => {
      script.removeEventListener("load", renderTimeline);
    };
  }, []);

  return (
    <div ref={containerRef} className="overflow-hidden rounded-[2rem] border border-white/10 bg-carbon/85 p-4 sm:p-6">
      <a className="twitter-timeline" data-theme="dark" data-tweet-limit="3" href={TWITTER_PROFILE_URL}>
        Tweets by jinxesport
      </a>
    </div>
  );
};

export default TwitterFeed;
