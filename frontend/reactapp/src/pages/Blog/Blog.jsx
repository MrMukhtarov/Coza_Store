import React, { useEffect } from "react";
import "./Blog.css";
import Pagination from '@mui/material/Pagination';

const Blog = () => {

    useEffect(() => {
        document.title = 'Blog';
      });

  return (
    <section className="blog">
      <div className="container">
        <div className="row">
          <div className="heading col-lg-9">
            <span className="subheading">
              A Website <span className="subblog">Blog</span>
            </span>
            <h1 className="mb-3 name">
              C<span className="oz">OZ</span>A
            </h1>
            <div className="heading-bottom">
              <h2>This is a Shopping WebSite</h2>
            </div>
          </div>
          <div className="blog-content d-flex justify-content-between col-12">
            <div className="left col-lg-7"></div>
            <div className="right col-lg-4">
              <i className="fa fa-user"></i>
              <span> Admin</span>
              <i className="fa fa-calendar ms-3"></i>
              <span> Jan 30 2022</span>
              <i className="fa fa-comment ms-3"></i>
              <span> 3 Comments</span>
              <h2>Writing A Novel with A Heart</h2>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language ocean.
              </p>
              <p>
                <a href="/blog">Learn More -</a>
              </p>
            </div>
          </div>
          <div className="blog-content d-flex justify-content-between">
            <div className="right col-lg-5">
              <i className="fa fa-user"></i>
              <span> Admin</span>
              <i className="fa fa-calendar ms-3"></i>
              <span> Jan 30 2022</span>
              <i className="fa fa-comment ms-3"></i>
              <span> 3 Comments</span>
              <h2>Life looks happier</h2>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language ocean.
              </p>
              <p>
                <a href="/blog">Learn More -</a>
              </p>
            </div>
            <div className="left1 col-lg-7"></div>
          </div>
          <div className="blog-content d-flex justify-content-between">
            <div className="left3 col-lg-7"></div>
            <div className="right col-lg-4">
              <i className="fa fa-user"></i>
              <span> Admin</span>
              <i className="fa fa-calendar ms-3"></i>
              <span> Jan 30 2022</span>
              <i className="fa fa-comment ms-3"></i>
              <span> 3 Comments</span>
              <h2>Hawai TUNNEL TREE</h2>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language ocean.
              </p>
              <p>
                <a href="/blog">Learn More -</a>
              </p>
            </div>
          </div>
          <div className="blog-content d-flex justify-content-between">
            <div className="right col-lg-5">
              <i className="fa fa-user"></i>
              <span> Admin</span>
              <i className="fa fa-calendar ms-3"></i>
              <span> Jan 30 2022</span>
              <i className="fa fa-comment ms-3"></i>
              <span> 3 Comments</span>
              <h2>Writing A Novel with A Heart</h2>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language ocean.
              </p>
              <p>
                <a href="/blog">Learn More -</a>
              </p>
            </div>
            <div className="left4 col-lg-7"></div>
          </div>
        </div>
      </div>
      <div className="pagination">
      <Pagination count={8} />
      </div>
      <div className="bottompage text-center">
          <h2>Newsletter - Stay tune and get the latest update</h2>
          <p>Far far away, behind the word mountains</p>
          <div className="form form-group d-flex align-items-center col-lg-3">
            <input type="text" className='form-control' placeholder='Enter email adress'/>
            <button className='btn btn-dark'>SUBSCRIBE</button>
          </div>
        </div>
    </section>
  );
};

export default Blog;
