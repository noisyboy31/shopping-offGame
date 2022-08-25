import React from "react";
import { Row, Container } from "react-bootstrap";
import storeData from "../data/items.json";
import { StoreItem } from "./StoreItem";
import SearchBar from "./Search";

interface Props {}

interface State {}

class Purchase extends React.Component<Props, State> {
  state = {
    searchQuery: "",
  };

  onSearchClick = (query: string) => {
    this.setState({ searchQuery: query });
  };

  render() {
    const { searchQuery } = this.state;
    return (
      <>
        <SearchBar value={searchQuery} onChange={this.onSearchClick} />
        <Container className="bg-light">
          <Row md={2} xs={1} lg={4} className="justify-content-md-center g-3">
            {storeData
              .filter((item) =>
                item.name.toLowerCase().startsWith(searchQuery.toLowerCase())
              )
              .map((data) => (
                <StoreItem key={data.id} {...data} />
              ))}
          </Row>
        </Container>
      </>
    );
  }
}

export default Purchase;
