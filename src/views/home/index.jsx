import { memo, useEffect, useState } from "react";

import baseRequest from "@/services";

export default memo(function Home() {
  const [highScore, setHighScore] = useState({});
  useEffect(() => {
    baseRequest.get({ url: "home/highscore" }).then((res) => {
      console.log("请求到的数据：", res);
      setHighScore(res);
    });
  }, []);
  return (
    <div>
      name:{highScore.name}
      <ul>
        {highScore.list?.map((i) => (
          <li key={i.id}>{i.name}</li>
        ))}
      </ul>
    </div>
  );
});
