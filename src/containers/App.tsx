import React, { useEffect, ChangeEvent } from "react";
import CardList from "../components/CardList";
import "./App.css";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import { useSelector, useDispatch } from "react-redux";
import { RobotsState } from "../robotsReducer";
import { changeSearch, fetchRobots } from "../actions";
function App() {
  const { search, robots, pending } = useSelector<RobotsState, RobotsState>(
    (state) => state
  );
  const dispatch = useDispatch();
  function onSearchChange(event: ChangeEvent<HTMLInputElement>) {
    dispatch(changeSearch(event.target.value));
  }
  function onFetchRobots() {
    dispatch(fetchRobots());
  }
  useEffect(() => {
    onFetchRobots();
    // eslint-disable-next-line
  }, []);
  const filteredRobots = robots.filter((robot) =>
    robot.name.toLocaleLowerCase().includes(search)
  );
  return pending ? (
    <h1>Loading</h1>
  ) : (
    <div className="tc">
      <h1 className="f1">RobotFriends</h1>
      <SearchBox change={onSearchChange} />
      <Scroll>
        <CardList robots={filteredRobots} />
      </Scroll>
    </div>
  );
}

export default App;
