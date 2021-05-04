import React, { Fragment } from "react";
import { Header, Form } from "../../molecules";
import { TodoList } from "../../organisms";

const HomePage = () => {
  return (
    <Fragment>
        <Header />
        <Form />
        <hr />
        <TodoList />
        <hr />
    </Fragment>
  );
};

export default HomePage;
