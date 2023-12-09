// Define a Tweet component which takes as props the username, the name, the date, and the message.

const Tweet = (props) => {
    const tweetStyle = {
        backgroundColor: getRandomColor(), // Function to get random color
        padding: "10px",
        margin: "10px 0",
        borderRadius: "5px",
    };

    return (
        <ul style={tweetStyle}>
            <li>Username: {props.username}</li>
            <li>Name: {props.name}</li>
            <li>Date: {props.date}</li>
            <li>Message: {props.message}</li>
        </ul>
    )
};

function getRandomColor() {
  const colors = ["#ffcccb", "#a0e7e5", "#b19cd9", "#ffddb3", "#caffbf"];
  return colors[Math.floor(Math.random() * colors.length)];
}