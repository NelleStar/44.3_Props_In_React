const App = () => {
  return (
    <div>
        <Tweet username="user1" name="user1" date="12:12pm" message="message1"/>
        <Tweet username="user2" name="user2" date="12:22pm" message="message2"/>
        <Tweet username="user3" name="user3" date="12:32pm" message="message3"/>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
