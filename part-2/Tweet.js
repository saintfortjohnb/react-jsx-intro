function Tweet({ username, name, date, message }) {
  return (
    <div className="tweet">
      <div className="tweet-username">@{username}</div>
      <div className="tweet-name">{name}</div>
      <div className="tweet-date">{date}</div>
      <div className="tweet-message">{message}</div>
    </div>
  );
}