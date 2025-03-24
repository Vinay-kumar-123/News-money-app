import React, { Component } from "react";
import Newsitem from "../components/Newsitem";
import PropTypes from "prop-types";

export default class News extends Component {
  static defaultProps = {
    country: "us",
    pageSize: 6,
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    };
  }

  async fetchNews(page) {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6884b00a076b4b6dbf0537ac2ba9188c&page=${page}&pageSize=${this.props.pageSize}`;
    
    this.setState({ loading: true });
    let response = await fetch(url);
    let data = await response.json();
    
    this.setState({
      articles: data.articles,
      totalResults: data.totalResults,
      page,
      loading: false,
    });
  }

  componentDidMount() {
    this.fetchNews(1);
  }

  handlePrev = () => {
    if (this.state.page > 1) {
      this.fetchNews(this.state.page - 1);
    }
  };

  handleNext = () => {
    if (this.state.page < Math.ceil(this.state.totalResults / this.props.pageSize)) {
      this.fetchNews(this.state.page + 1);
    }
  };

  render() {
    return (
      <div className="container my-3">
        <h2 className="text-center">Top Headlines</h2>
        {this.state.loading && <h4 className="text-center">Loading...</h4>}
        <div className="row">
          {this.state.articles.map((element) => (
            <div className="col-md-4" key={element.url}>
              <Newsitem
                title={element.title}
                description={element.description}
                imageUrl={element.urlToImage}
                newsUrl={element.url}
              />
            </div>
          ))}
        </div>
        <div className="d-flex justify-content-between my-3">
          <button disabled={this.state.page <= 1} className="btn btn-dark" onClick={this.handlePrev}>
            &larr; Previous
          </button>
          <button disabled={this.state.page >= Math.ceil(this.state.totalResults / this.props.pageSize)}
            className="btn btn-dark" onClick={this.handleNext}>
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}
