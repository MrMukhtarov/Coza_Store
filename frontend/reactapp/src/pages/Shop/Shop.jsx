import React, { useEffect, useState } from "react";
import "./Shop.css";
import { BsFilter } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import axios from "axios";
import { NavLink } from "react-router-dom";

const Shop = () => {

  const [cards , setCards] = useState([])

  const [visible, setVisible] = useState(12)

  const [search, setSearch] = useState("")

  const SearcHandler = (e) => {
    setSearch(e.target.value)
   }

   const filteredProducst = cards.filter(card => card.name.toLowerCase().includes(search.toLowerCase()))

    useEffect(() => {
        axios.get('http://localhost:3002/card')
          .then(res => setCards(res.data.cards)) 
          .catch(error => console.log(error))
      } , [])

      const showMoreItems = () => {
        setVisible((prevValue) => prevValue + 4)
      }

  return (
    <section className="shop">
      <div className="container">
        <div className="row">
          <div className="top row mt-5 justify-content-between m-auto">
            <div className="left col-lg-5">
              <a href="/">All Products</a>
              <a href="/">Women</a>
              <a href="/">Men</a>
              <a href="/">Bag</a>
              <a href="/">Shoes</a>
              <a href="/">Watches</a>
            </div>
            <div className="right col-lg-7 text-end">
              <p>
                <a
                  className="btn btn-light btns filter"
                  data-bs-toggle="collapse"
                  href="#multiCollapseExample1"
                  role="button"
                  aria-expanded="false"
                  aria-controls="multiCollapseExample1"
                >
                  <BsFilter />
                  Filter
                </a>
                <button
                  className="btn btn-light btns ms-3"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#multiCollapseExample2"
                  aria-expanded="false"
                  aria-controls="multiCollapseExample2"
                >
                  <AiOutlineSearch />
                  Search
                </button>
              </p>
              <div className="all">
                <div className="">
                  <div
                    className="collapse multi-collapse"
                    id="multiCollapseExample1"
                  >
                    <div className="card card-body text-start">
                      <div className="container">
                        <div className="row">
                          <div className="sort col-lg-3">
                            <h5>Sort By</h5>
                            <ul>
                              <li><a href="/">Default</a></li>
                              <li><a href="/">Popularity</a></li>
                              <li><a href="/">Avarage Rating</a></li>
                              <li><a href="/">Newness</a></li>
                              <li><a href="/">Newness</a></li>
                              <li><a href="/">Price: Low to High</a></li>
                              <li><a href="/">Price: High to Low</a></li>
                            </ul>
                          </div>
                          <div className="sort col-lg-3">
                            <h5>Price</h5>
                            <ul>
                              <li><a href="/">All</a></li>
                              <li><a href="/">$0.00 - $50.00</a></li>
                              <li><a href="/">$50.00 - $100.00</a></li>
                              <li><a href="/">$100.00 - $150.00</a></li>
                              <li><a href="/">$150.00 - $200.00</a></li>
                              <li><a href="/">$200.00+</a></li>
                            </ul>
                          </div>
                          <div className="color col-lg-3">
                            <h5>Color</h5>
                            <ul>
                              <li><a href="/" className="black">Black</a></li>
                              <li><a href="/" className="blue">Blue</a></li>
                              <li><a href="/" className="grey">Grey</a></li>
                              <li><a href="/" className="green">Green</a></li>
                              <li><a href="/" className="red">Red</a></li>
                              <li><a href="/" className="white">White</a></li>
                            </ul>
                          </div>
                          <div className="tags col-lg-3">
                            <h5>Tags</h5>
                            <div className="d-flex flex-wrap">
                            <div className="mb-2 me-2"><a href="/">Fashion</a></div>
                            <div className="mb-2 me-2"><a href="/">Lifestyle</a></div>
                            <div className="mb-2 me-2"><a href="/">Denim</a></div>
                            <div className="mb-2 me-2"><a href="/">Streetstyle</a></div>
                            <div><a href="/">Crafts</a></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div
                    className="collapse multi-collapse"
                    id="multiCollapseExample2"
                  >
                    <div className="card card-body">
                      <div className="text-start">
                        <AiOutlineSearch/>
                        <input onChange={SearcHandler} className="search" type="text" placeholder="search"/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <section id="products">
        <div className="row justify-content-between">
          {filteredProducst && filteredProducst.slice(0, visible).map((cardss) => (
              <div className="bottom row col-lg-3 mb-5">
              <div className="box">
                <div className="bottom-img imgs">
                  <img className='img-fluid' src={cardss.image} alt="" />
                  <NavLink className="navlink" to='/shop'>Add to Cart</NavLink>

                </div>
                <div className="bottom-text">
                  <a href="/">{cardss.name}</a>
                  <span>{cardss.price} AZN</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='navdiv'>
      <NavLink to='/shop' data-replace="LOAD MORE" onClick={showMoreItems}><span>LOAD MORE</span></NavLink>
    </div>
    </section>
        </div>
      </div>
    </section>
  );
};

export default Shop;
