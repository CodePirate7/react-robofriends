import React, { useEffect, useState } from "react";
import { Robot } from "../interfaces/robot";
import CardList from "../components/CardList";
import "./App.css";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
function App() {
  const [robots, setRobots] = useState<Robot[]>([]);
  const [search, setSearch] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const getRobots = async () => {
    setLoading(true);
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const json = await res.json();
    setRobots(json);
    setLoading(false);
  };
  useEffect(() => {
    getRobots();
  }, []);
  const filteredRobots = robots.filter((robot) =>
    robot.name.toLocaleLowerCase().includes(search)
  );
  return loading ? (
    <h1>Loading</h1>
  ) : (
    <div className="tc">
      <h1 className="f1">RobotFriends</h1>
      <SearchBox change={(e) => setSearch(e.target.value)} />
      <Scroll>
        <CardList robots={filteredRobots} />
      </Scroll>
    </div>
  );
}

export default App;
