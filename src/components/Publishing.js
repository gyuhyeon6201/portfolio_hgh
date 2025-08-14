import BookStore from "./BookStore";
import Gallery from "./Gallery";
import Grid from "./Grid";
import ImgCarousel from "./ImgCarousel";

const Publishing = () => {
  return (
    <div className="publishing">
      <h1 className="title">PRACTICAL PUBLISHING</h1>
      <BookStore />
      <Gallery />
      <Grid />
      <ImgCarousel />
    </div>
  );
};

export default Publishing;
