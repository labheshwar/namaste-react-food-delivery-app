import Card from "./Card";
import data from '../restaurantData.json';

const Body = () => {
  return (
    <main>
      {data.map((item) => {
        return <Card key={item.data.uuid} {...item.data} />;
      })}
    </main>
  );
};

export default Body;