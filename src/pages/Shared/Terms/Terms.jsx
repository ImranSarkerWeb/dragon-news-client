import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <Container>
      <h3>Accept our terms & condition.</h3>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque, dolorem
      velit in vel saepe, ad placeat enim ullam culpa laboriosam quae debitis
      consequuntur quam sit pariatur ipsam! Numquam voluptas modi fugiat ea
      magnam? Rerum repellat incidunt id accusamus at, rem magni deleniti quo,
      delectus error consequuntur laborum saepe excepturi quibusdam modi. Porro
      neque magni laborum numquam ab, repellendus cumque doloremque
      exercitationem dolores possimus commodi eius nemo sequi dolorem architecto
      voluptates mollitia, labore voluptatum soluta corporis facere excepturi
      perferendis quis! At laudantium commodi mollitia dicta ducimus soluta
      placeat ipsa labore vitae reiciendis nihil, sint maiores molestiae neque
      delectus ratione accusamus provident?
      <p>
        <Link to="/register">Register</Link>
      </p>
    </Container>
  );
};

export default Terms;
