import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import MovieList from "./MovieList";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [
        {
          id: "1",
          title: "Oceans 8",
          category: "Comedy",
          likes: 4,
          dislikes: 1
        },
        {
          id: "2",
          title: "Midnight Sun",
          category: "Comedy",
          likes: 2,
          dislikes: 0
        },
        {
          id: "3",
          title: "Les indestructibles 2",
          category: "Animation",
          likes: 3,
          dislikes: 1
        },
        {
          id: "4",
          title: "Sans un bruit",
          category: "Thriller",
          likes: 6,
          dislikes: 6
        },
        {
          id: "5",
          title: "Creed II",
          category: "Drame",
          likes: 16,
          dislikes: 2
        },
        {
          id: "6",
          title: "Pulp Fiction",
          category: "Thriller",
          likes: 11,
          dislikes: 3
        },
        {
          id: "7",
          title: "Pulp Fiction",
          category: "Thriller",
          likes: 12333,
          dislikes: 32
        },
        {
          id: "8",
          title: "Seven",
          category: "Thriller",
          likes: 2,
          dislikes: 1
        },
        {
          id: "9",
          title: "Inception",
          category: "Thriller",
          likes: 2,
          dislikes: 1
        },
        {
          id: "10",
          title: "Gone Girl",
          category: "Thriller",
          likes: 22,
          dislikes: 12
        }
      ]
    };
  }

  likeMe = id => {
    var index = this.state.movies.findIndex(movie => movie.id === id);
    if (index === -1) {
      // handle error
    } else {
      this.setState({
        movies: [
          ...this.state.movies.slice(0, index),
          Object.assign({}, this.state.movies[index], {
            likes: this.state.movies[index].likes + 1
          }),
          ...this.state.movies.slice(index + 1)
        ]
      });
    }
  };
  dislikeMe = id => {
    var index = this.state.movies.findIndex(movie => movie.id === id);
    if (index === -1) {
      // handle error
    } else {
      this.setState({
        movies: [
          ...this.state.movies.slice(0, index),
          Object.assign({}, this.state.movies[index], {
            dislikes: this.state.movies[index].dislikes + 1
          }),
          ...this.state.movies.slice(index + 1)
        ]
      });
    }
  };

  removeMovie(id) {
    this.setState({
      movies: this.state.movies.filter(movie => movie.id !== id)
    });
  }

  render() {
    let MovieLists = this.state.movies.map(movie => {
      return (
        <div>
          <Col>
            <MovieList
              key={movie.id}
              removeMovie={this.removeMovie.bind(this)}
              movie={movie}
              likeMe={this.likeMe.bind(this)}
              dislikeMe={this.dislikeMe.bind(this)}
            />
          </Col>
        </div>
      );
    });
    return (
      <Container fluid>
        <Row>{MovieLists}</Row>
      </Container>
    );
  }
}

export default Main;
