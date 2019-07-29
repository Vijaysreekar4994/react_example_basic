import React, { Component } from "react";
import {
  Col,
  Card,
  CardHeader,
  CardBody,
  CardSubtitle,
  Button
} from "reactstrap";

class MovieList extends Component {
  render() {
    let { id, title, category, likes, dislikes } = this.props.movie;
    return (
      <div>
        <Col>
          <Card>
            <CardHeader>
              <strong>{title}</strong>
            </CardHeader>
            <CardBody>
              <CardSubtitle>{category}</CardSubtitle>
              <Button onClick={() => this.props.likeMe(id)}>
                {" "}
                ðŸ‘ : {likes}
              </Button>{" "}
              &nbsp;
              <Button onClick={() => this.props.dislikeMe(id)}>
                {" "}
                ðŸ‘Ž : {dislikes}
              </Button>
              <br />
			  <br />
              <Button color="danger" onClick={() => this.props.removeMovie(id)}>
                Delete
              </Button>
            </CardBody>
          </Card>
        </Col>
      </div>
    );
  }
}

export default MovieList;
