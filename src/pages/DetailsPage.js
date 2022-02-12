import Header from "parts/Header";
import PageDetailTitle from "parts/PageDetailTitle";
import React, { Component } from "react";
import ItemDetails from "json/itemDetails.json";
import FeaturedImage from "parts/FeaturedImage";
import DetailDesc from "parts/PageDetailDescription";

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
        <FeaturedImage data={ItemDetails.imageUrls} />
        <section className="container">
          <div className="row">
            <div className="col-5">Booking Form</div>
            <div className="col-7">
              <DetailDesc data={ItemDetails} />
            </div>
          </div>
        </section>
      </>
    );
  }
}
