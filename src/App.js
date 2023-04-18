import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 1,
          title: "Старый стул",
          img: "old-chair (1).jpg",
          desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam architecto porro modi, unde velit doloremque! Asperiores voluptates rem voluptas repellendus. Vero, adipisci? Maiores modi cumque fuga veritatis dolorum expedita perspiciatis.",
          category: "chair",
          price: "49,99",
        },
      ],
    };
  }
  render() {
    return (
      <div className="wrapper">
        <Header />
        <Items items={this.state.items} />
        <Footer />
      </div>
    );
  }
}

export default App;
