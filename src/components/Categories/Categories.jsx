import React from "react";
import { Link } from "react-router-dom";
import "./Categories.scss";

const Categories = () => {
  return (
    <div className="categories">
      <div className="col">
        <div className="row">
          <img
            src="https://images.pexels.com/photos/4978626/pexels-photo-4978626.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="img"
          />
          <button>
            <Link className="link" to="/products/1">
              Sale
            </Link>
          </button>
        </div>
        <div className="row"><div className="row">
          <img
            src="https://images.pexels.com/photos/1887975/pexels-photo-1887975.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="img"
          />
          <button>
            <Link className="link" to="/products/1">
              Women
            </Link>
          </button>
        </div></div>
      </div>
      <div className="col">
        <div className="row"><div className="row">
          <img
            src="https://images.pexels.com/photos/5020369/pexels-photo-5020369.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="img"
          />
          <button>
            <Link className="link" to="/products/1">
              Kids
            </Link>
          </button>
        </div></div>
      </div>
      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row"><div className="row">
          <img
            src="https://images.pexels.com/photos/6441794/pexels-photo-6441794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="img"
          />
          <button>
            <Link className="link" to="/products/1">
              Shoes
            </Link>
          </button>
        </div></div>
          </div>
          <div className="col">
            <div className="row"><div className="row">
          <img
            src="https://images.pexels.com/photos/5524447/pexels-photo-5524447.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="img"
          />
          <button>
            <Link className="link" to="/products/1">
              Boys
            </Link>
          </button>
        </div></div>
          </div>
        </div>
        <div className="row"><div className="row">
          <img
            src="https://images.pexels.com/photos/2566931/pexels-photo-2566931.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="img"
          />
          <button>
            <Link className="link" to="/products/1">
              Hats
            </Link>
          </button>
        </div></div>
      </div>
    </div>
  );
};

export default Categories;
