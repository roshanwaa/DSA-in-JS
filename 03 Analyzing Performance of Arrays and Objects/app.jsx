import React from 'react';

function withUser(Component) {
  const user = { name: 'John', age: 30 };

  return function (props) {
    return <Component user={user} {...props} />;
  };
}

function App() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

function HeaderComponent(props) {
  return (
    <header>
      <h1>Hello, {props.user.name}!</h1>
    </header>
  );
}

const Header = withUser(HeaderComponent);

function Main() {
  return (
    <main>
      <Content />
    </main>
  );
}

function ContentComponent(props) {
  return (
    <div>
      <p>
        {props.user.name} is {props.user.age} years old.
      </p>
    </div>
  );
}

const Content = withUser(ContentComponent);

function Footer() {
  return (
    <footer>
      <p>Copyright © 2023</p>
    </footer>
  );
}

export default App;
