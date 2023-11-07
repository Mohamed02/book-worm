import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {
  const DUMMY_PRODUCTS= [{
    itemId:"p1",
    title: "My First Book",
    price: 6,
    description: "the first book i ever wrote"
  },
  {
    itemId:"p2",
    title: "My Second Book",
    price: 6,
    description: "the second book i ever wrote"
  }
]

  const itemsMarkup=DUMMY_PRODUCTS.map((item)=>{
    return <ProductItem key={item.itemId}
                itemId={item.itemId}
                title={item.title}
                price={item.price}
                description={item.description}
              />
  });

  
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {itemsMarkup}
      </ul>
    </section>
  );
};

export default Products;
