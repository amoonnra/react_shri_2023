import { IMovie } from "@/models";
import { TicketCard } from "./TicketCard/TicketCard";
import { useAppSelector } from "@/store/hooks";
import { Loader } from "@/UI/Loader";

export interface IProps {
  tikets: IMovie[];
  isLoading: boolean;
}

export function TicketCardsList({ tikets, isLoading }: IProps) {
  const genreDict = useAppSelector((state) => state.genres);

  if (isLoading) return <Loader />;
  if (tikets?.length === 0)
    return (
      <div
        style={{
          display: "flex",
          color: "#aaa",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <h2>🥺 Список фильмов пуст</h2>
      </div>
    );
  return (
    <>
      {tikets?.map(({ genre, id, posterUrl, title }) => (
        <TicketCard
          key={id}
          id={id}
          poster={posterUrl}
          title={title}
          genre={genreDict[genre]}
        />
      ))}
    </>
  );
}
