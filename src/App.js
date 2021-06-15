import React from "react";
import "./sass/main.scss";
import Card from "./components/card/Card";
import Button from "./components/button/Button";

class Main extends React.Component {
  render() {
    const { season, handleSeason, isSeason } = this.props;
    /*console.log(this.props);
    console.log(isSeason);*/

    const buttons = season.map((el) => (
      <Button key={el} text={el} onClick={handleSeason} id={el} />
    ));

    // first letter have to convert to upper case
    const firstUpper = isSeason.replace(isSeason[0], isSeason[0].toUpperCase());
    return (
      <main>
        <section className="wrapper">
          <Card url={isSeason}>
            <h1 className="card__text">{firstUpper}</h1>
          </Card>
          <div className="btn">{buttons}</div>
        </section>
      </main>
    );
  }
}

class App extends React.Component {
  state = {
    season: ["fall", "winter", "summer", "spring"],
    isSeason: "fall",
  };

  handleSeason = (e) => {
    this.setState({ isSeason: e.target.id });
    //    console.log(e.target.id);
  };

  render() {
    return (
      <div className="App">
        <Main
          season={this.state.season}
          handleSeason={this.handleSeason}
          isSeason={this.state.isSeason}
        />
      </div>
    );
  }
}

export default App;
