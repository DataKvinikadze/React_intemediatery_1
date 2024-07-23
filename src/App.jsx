import React, { useEffect, useState } from "react";

const App = () => {
  const [feed, setFeed] = useState(50);
  const [play, setPlay] = useState(50);
  const [clean, setClean] = useState(50);

  const [status, setStatus] = useState("Neutral");

  const feedPet = () => {
    setFeed((prev) => Math.min(prev - 20, 100));
    setPlay((prev) => prev + 10);
    setClean((prev) => Math.min(prev + 10, 100));
  };
  const playWithPet = () => {
    setFeed((prev) => Math.min(prev + 10, 100));
    setPlay((prev) => prev + 10);
    setClean((prev) => Math.min(prev + 5, 100));
  };
  const cleanPet = () => {
    setFeed((prev) => Math.min(prev + 10, 100));
    setPlay((prev) => prev + 10);
    setClean((prev) => Math.max(prev - 20, 0));
  };

  const statusFunc = () => {
    if (feed == 100) {
      setStatus("Hungry");
    } else if (clean == 100) {
      setStatus("Dirty");
    } else {
      setStatus("Neutral");
    }
  };

  useEffect(() => {
    statusFunc();
  }, [feed, clean]);

  return (
    <>
      <div>
        <p>
          status: <span>{status}</span>
        </p>
      </div>
      <div>
        <p>
          Happiness: <span>{play}</span>
        </p>
      </div>
      <div>
        <p>
          Dirty: <span>{clean}</span>
        </p>
      </div>
      <div>
        <p>
          feed: <span>{feed}</span>
        </p>
      </div>

      <div>
        <button
          disabled={status == "Dirty" || feed == 0 ? true : false}
          onClick={() => {
            feedPet();
          }}
        >
          feed Pet
        </button>
        <button
          disabled={status == "Hungry" || clean == 0 ? true : false}
          onClick={() => {
            cleanPet();
          }}
        >
          Clean Pet
        </button>
        <button
          disabled={clean == 100 || feed == 100 ? true : false}
          onClick={() => {
            playWithPet();
          }}
        >
          Play with Pet
        </button>
      </div>
    </>
  );
};

export default App;
