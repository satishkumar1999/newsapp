import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinnerr from './Spinnerr';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';



export class News extends Component {

  static defaultProps = {
    country: 'us',
    pageSize: 5,
    category: 'general'
  };

  static propTypes = {

    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string


  }
  capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);

  }
  constructor(props) {
    super(props);
    console.log("i am constr")
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0

    }

    document.title = `${this.capitalize(this.props.category)} - NewsSatish`;

  }


  async updateNews() {


    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fa5b86a9d77d4cf0977d7f60513d5423&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    console.log("i am data ", data)
    let parseData = await data.json()

    console.log("i am parse", parseData)
    this.setState({
      articles: parseData.articles,
      totalResults: parseData.totalResults,
      loading: false

    })
  }


  async componentDidMount() {

    this.updateNews();

  }

  handelPriviousClick = async () => {

    this.setState({ page: this.state.page - 1 })
    this.updateNews()

  }

  handelNextClick = async () => {

    console.log("next")


    this.setState({ page: this.state.page + 1 })
    this.updateNews();
  }

  fetchMoreData = async () => {

    this.setState({ page: this.state.page + 1 })
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fa5b86a9d77d4cf0977d7f60513d5423&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    console.log("i am data ", data)
    let parseData = await data.json()

    console.log("i am parse", parseData)
    this.setState({
      articles: this.state.articles.concat(parseData.articles),
      totalResults: parseData.totalResults,
      loading: false

    })

  }


  render() {
    return (

      <>
        <h2 className="text-center py-3">News<span style={{ color: 'pink', animation: 'blink-animation 1s infinite' }}>S</span>atish - Top {this.capitalize(this.props.category)} Headlines</h2>
        {/* { this.state.loading && <Spinnerr/>} */}

        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length != this.state.totalResults}
          loader={<Spinnerr />}
        >


          <div className="container">

            <div className="row">
              {/* {!this.state.loading && this.state.articles.map((element)=>{ */}



              {this.state.articles.map((element) => {
                return <div className="col-md-4" key={element.url}>
                  <NewsItem title={element.title ? element.title.slice(0, 44) : " "} description={element.description ? element.description.slice(0, 88) : " "} imgUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                </div>

              })}

            </div>
          </div>

        </InfiniteScroll>

      </>


    )
  }
}

export default News