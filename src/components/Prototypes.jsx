import useActions from "../hooks/useActions";
import usePrototypes from "../hooks/usePrototypes";

export default function Prototypes() {
  const prototypes = usePrototypes();
  const { addToOrder } = useActions();
  return (
    <main>
      <div className="prototypes">
        {prototypes.map((prototype) => {
          const { id, thumbnail, title, price, release} = prototype;
          const click = () => {
            addToOrder(id);
          };
          return (
            <>
            <div className="prototype" key={id}>
                <p><img src = {thumbnail}/></p>
                <p className="prototype__title">{title}</p>
                <p className="prototype__price">$ {price}</p>
                <p className="prototype__release">{release}</p> 
                <div className="prototype__body">
                  <div className="prototype__title">
                    <div
                      className="btn btn--primary float--right"
                      onClick={click}
                    >장바구니
                     < i className="icon icon--plus" />
                 </div>
               </div>
        </div>
    
        </div>
          
          </>
          );
        })}
      </div>
    </main>
  );
}
