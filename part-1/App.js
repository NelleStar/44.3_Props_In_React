const App = () => {
  return (
    <div>
        < FirstComponent />

        < NamedComponent name="Janelle"/>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
