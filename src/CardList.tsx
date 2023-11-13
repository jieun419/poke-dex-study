import Card from "./Card";
import { openModal } from "./store/modalSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store/store";
import CardModal from "./CardModal";

  interface CardListProps {
    data: { results: { name: string; url: string }[] };
  }

  function CardList({ data }: CardListProps): JSX.Element {
    const {isOpen} = useSelector((store: RootState)=> store.modal);
    const dispatch = useDispatch();
    return (
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>
        {data.results.map((poke: { name: string, url: string }, index: number) => (
          <Card
            poketId={index}
            key={index}
            name={poke.name}
            url={poke.url}
            onClick = {() => dispatch(openModal()) }
          />
        ))}
        {isOpen && <CardModal />}
      </div>
    );
  }

export default CardList;