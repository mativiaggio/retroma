import "./ItemListContainer.scss";
import { Item } from "./Item";

function ItemListContainer(props) {
  return (
    <div className="container-fluid section1" id="shop">
      <div className="row">
        <div className="col-lg-3 gx-0">
          <Item
            imglocal="icecream-cone.jpg"
            title="Ice Cream Cone"
            price="$2.48"
          />
        </div>
        <div className="col-lg-3 gx-0">
          <Item
            imglocal="icecream-cone.jpg"
            title="Ice Cream Cone"
            price="$2.48"
          />
        </div>
        <div className="col-lg-3 gx-0">
          <Item
            imglocal="icecream-cone.jpg"
            title="Ice Cream Cone"
            price="$2.48"
          />
        </div>
        <div className="col-lg-3 gx-0">
          <Item
            imglocal="icecream-cone.jpg"
            title="Ice Cream Cone"
            price="$2.48"
          />
        </div>
      </div>
    </div>
  );
}

export { ItemListContainer };
