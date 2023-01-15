import Card from "../Card/Card";
import "./FeaturedProducts.scss";
import useFetch from "../../hooks/useFetch";

const FeaturedProducts = ({ type }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type}products</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis
          perspiciatis sint nemo ipsa velit eius, minima suscipit reiciendis
          error quaerat natus, obcaecati aut quae. Error voluptatem perferendis
          non repudiandae doloremque.
        </p>
      </div>
      <div className="bottom">
        {error ? "some thing went wwrong!":(loading
          ? "loading.."
          : data?.map((item) => <Card item={item} key={item.id} />))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
