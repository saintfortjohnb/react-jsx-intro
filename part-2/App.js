function App() {
  return (
    <div>
      <Tweet
        username="john_doe"
        name="John Doe"
        date="2023-08-09"
        message="This is my first tweet!"
      />
      <Tweet
        username="jane_smith"
        name="Jane Smith"
        date="2023-08-08"
        message="Hello, Twitter!"
      />
      <Tweet
        username="random_user"
        name="Random User"
        date="2023-08-07"
        message="Checking out this cool app!"
      />
    </div>
  );
}