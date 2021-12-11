import Header from "parts/Header";
import PageDetailTitle from "parts/PageDetailTitle";
import React, { Component } from "react";
import ItemDetails from "json/itemDetails.json";

export default class DetailsPage extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  componentDidMount() {
    window.title = "Deatils Page";
    window.scrollTo(0, 0);
  }
  render() {
    const breadcrumb = [
      { pageTitle: "Home", pageHref: "" },
      { pageTitle: "House Detail", pageHref: "" },
    ];
    return (
      <>
        <Header {...this.props}> </Header>
        <PageDetailTitle breadcrumb={breadcrumb} data={ItemDetails} />
      </>
    );
  }
}
