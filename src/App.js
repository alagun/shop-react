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
          title: "Белое кресло",
          img: "armchair (1).jpg",
          desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam architecto porro modi, unde velit doloremque! Asperiores voluptates rem voluptas repellendus. Vero, adipisci? Maiores modi cumque fuga veritatis dolorum expedita perspiciatis.",
          category: "chair",
          price: "49,99",
        },
        {
          id: 2,
          title: "Кровать люкс",
          img: "bedroom-suite (1).jpg",
          desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam architecto porro modi, unde velit doloremque! Asperiores voluptates rem voluptas repellendus. Vero, adipisci? Maiores modi cumque fuga veritatis dolorum expedita perspiciatis.",
          category: "chair",
          price: "1099,99",
        },
        {
          id: 3,
          title: "Синий диван",
          img: "blue-sofa (1).jpg",
          desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam architecto porro modi, unde velit doloremque! Asperiores voluptates rem voluptas repellendus. Vero, adipisci? Maiores modi cumque fuga veritatis dolorum expedita perspiciatis.",
          category: "chair",
          price: "749,99",
        },
        {
          id: 4,
          title: "Стул модерн",
          img: "chair-and-pillow (1).jpg",
          desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam architecto porro modi, unde velit doloremque! Asperiores voluptates rem voluptas repellendus. Vero, adipisci? Maiores modi cumque fuga veritatis dolorum expedita perspiciatis.",
          category: "chair",
          price: "279,99",
        },
        {
          id: 5,
          title: "Диван модерн",
          img: "chic-modern-sofa_1 (1).jpg",
          desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam architecto porro modi, unde velit doloremque! Asperiores voluptates rem voluptas repellendus. Vero, adipisci? Maiores modi cumque fuga veritatis dolorum expedita perspiciatis.",
          category: "chair",
          price: "849,99",
        },
        {
          id: 6,
          title: "Деревянный стул",
          img: "cozy-chair_1 (1).jpg",
          desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam architecto porro modi, unde velit doloremque! Asperiores voluptates rem voluptas repellendus. Vero, adipisci? Maiores modi cumque fuga veritatis dolorum expedita perspiciatis.",
          category: "chair",
          price: "319,99",
        },
        {
          id: 7,
          title: "Кровать",
          img: "dark-blue-wall (1).jpg",
          desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam architecto porro modi, unde velit doloremque! Asperiores voluptates rem voluptas repellendus. Vero, adipisci? Maiores modi cumque fuga veritatis dolorum expedita perspiciatis.",
          category: "chair",
          price: "1219,99",
        },
        {
          id: 8,
          title: "Стол",
          img: "luxury-table (1).jpg",
          desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam architecto porro modi, unde velit doloremque! Asperiores voluptates rem voluptas repellendus. Vero, adipisci? Maiores modi cumque fuga veritatis dolorum expedita perspiciatis.",
          category: "chair",
          price: "489,99",
        },
        {
          id: 9,
          title: "Тумба из дерева",
          img: "minimal-sideboard-table (1).jpg",
          desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam architecto porro modi, unde velit doloremque! Asperiores voluptates rem voluptas repellendus. Vero, adipisci? Maiores modi cumque fuga veritatis dolorum expedita perspiciatis.",
          category: "chair",
          price: "649,99",
        },
        {
          id: 10,
          title: "Зеркало",
          img: "mirror (1).jpg",
          desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam architecto porro modi, unde velit doloremque! Asperiores voluptates rem voluptas repellendus. Vero, adipisci? Maiores modi cumque fuga veritatis dolorum expedita perspiciatis.",
          category: "chair",
          price: "149,99",
        },
        {
          id: 11,
          title: "Стол модерн",
          img: "modern-table (1).jpg",
          desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam architecto porro modi, unde velit doloremque! Asperiores voluptates rem voluptas repellendus. Vero, adipisci? Maiores modi cumque fuga veritatis dolorum expedita perspiciatis.",
          category: "chair",
          price: "199,99",
        },
        {
          id: 12,
          title: "Старый стул",
          img: "old-chair (1).jpg",
          desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam architecto porro modi, unde velit doloremque! Asperiores voluptates rem voluptas repellendus. Vero, adipisci? Maiores modi cumque fuga veritatis dolorum expedita perspiciatis.",
          category: "chair",
          price: "149,99",
        },
        {
          id: 13,
          title: "Тумба модерн",
          img: "wall-mockup-sideboar-table (1).jpg",
          desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam architecto porro modi, unde velit doloremque! Asperiores voluptates rem voluptas repellendus. Vero, adipisci? Maiores modi cumque fuga veritatis dolorum expedita perspiciatis.",
          category: "chair",
          price: "599,99",
        },
        {
          id: 14,
          title: "Диван белый",
          img: "white-sofa (1).jpg",
          desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam architecto porro modi, unde velit doloremque! Asperiores voluptates rem voluptas repellendus. Vero, adipisci? Maiores modi cumque fuga veritatis dolorum expedita perspiciatis.",
          category: "chair",
          price: "1499,99",
        },
        {
          id: 15,
          title: "Стол-тумба",
          img: "wooden-sideboard-table (1).jpg",
          desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam architecto porro modi, unde velit doloremque! Asperiores voluptates rem voluptas repellendus. Vero, adipisci? Maiores modi cumque fuga veritatis dolorum expedita perspiciatis.",
          category: "chair",
          price: "649,99",
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
