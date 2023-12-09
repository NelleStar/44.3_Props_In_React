const App = () => {
  return (
    <div>
        <Person name="RachelG" age={29} hobbies={['Shopping', 'Clothes', 'Hair']} />
        <Person name="PheobeBuffay" age={33} hobbies={['Meditation', 'Singing', 'Painting']} />
        <Person name="MonicaGeller" age={17} hobbies={['Cooking', 'Cleaning', 'Organizing']} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
