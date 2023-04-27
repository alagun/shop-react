import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/showFullItem";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      currentItems: [],
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
          category: "bed",
          price: "1099,99",
        },
        {
          id: 3,
          title: "Синий диван",
          img: "blue-sofa (1).jpg",
          desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam architecto porro modi, unde velit doloremque! Asperiores voluptates rem voluptas repellendus. Vero, adipisci? Maiores modi cumque fuga veritatis dolorum expedita perspiciatis.",
          category: "sofa",
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
          category: "sofa",
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
          category: "bed",
          price: "1219,99",
        },
        {
          id: 8,
          title: "Стол",
          img: "luxury-table (1).jpg",
          desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam architecto porro modi, unde velit doloremque! Asperiores voluptates rem voluptas repellendus. Vero, adipisci? Maiores modi cumque fuga veritatis dolorum expedita perspiciatis.",
          category: "table",
          price: "489,99",
        },
        {
          id: 9,
          title: "Тумба из дерева",
          img: "minimal-sideboard-table (1).jpg",
          desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam architecto porro modi, unde velit doloremque! Asperiores voluptates rem voluptas repellendus. Vero, adipisci? Maiores modi cumque fuga veritatis dolorum expedita perspiciatis.",
          category: "table",
          price: "649,99",
        },
        {
          id: 10,
          title: "Зеркало",
          img: "mirror (1).jpg",
          desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam architecto porro modi, unde velit doloremque! Asperiores voluptates rem voluptas repellendus. Vero, adipisci? Maiores modi cumque fuga veritatis dolorum expedita perspiciatis.",
          category: "mirror",
          price: "149,99",
        },
        {
          id: 11,
          title: "Стол модерн",
          img: "modern-table (1).jpg",
          desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam architecto porro modi, unde velit doloremque! Asperiores voluptates rem voluptas repellendus. Vero, adipisci? Maiores modi cumque fuga veritatis dolorum expedita perspiciatis.",
          category: "table",
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
          category: "table",
          price: "599,99",
        },
        {
          id: 14,
          title: "Диван белый",
          img: "white-sofa (1).jpg",
          desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam architecto porro modi, unde velit doloremque! Asperiores voluptates rem voluptas repellendus. Vero, adipisci? Maiores modi cumque fuga veritatis dolorum expedita perspiciatis.",
          category: "sofa",
          price: "1499,99",
        },
        {
          id: 15,
          title: "Стол-тумба",
          img: "wooden-sideboard-table (1).jpg",
          desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam architecto porro modi, unde velit doloremque! Asperiores voluptates rem voluptas repellendus. Vero, adipisci? Maiores modi cumque fuga veritatis dolorum expedita perspiciatis.",
          category: "table",
          price: "649,99",
        },
      ],
      showFullItem: false,
      fullItem: {},
    };
    this.state.currentItems = this.state.items;
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.chooseCategory = this.chooseCategory.bind(this);
    this.onShowItem = this.onShowItem.bind(this);
  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Categories chooseCategory={this.chooseCategory} />
        <Items
          onShowItem={this.onShowItem}
          items={this.state.currentItems}
          onAdd={this.addToOrder}
        />
        {this.state.showFullItem && (
          <ShowFullItem
            onAdd={this.addToOrder}
            onShowItem={this.onShowItem}
            item={this.state.fullItem}
          />
        )}
        <Footer />
      </div>
    );
  }

  onShowItem(item) {
    this.setState({ fullItem: item });
    this.setState({ showFullItem: !this.state.showFullItem });
  }

  chooseCategory(category) {
    if (category === "all") {
      this.setState({ currentItems: this.state.items });
      return;
    }
    this.setState({
      currentItems: this.state.items.filter((el) => el.category === category),
    });
  }

  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter((el) => el.id !== id) });
  }
  addToOrder(item) {
    let isInArray = false;
    this.state.orders.forEach((el) => {
      if (el.id === item.id) isInArray = true;
    });
    if (!isInArray)
      this.setState({ orders: [...this.state.orders, item] }, () => {});
  }
}

export default App;
