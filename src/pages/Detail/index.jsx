import { RiArrowLeftLine } from "react-icons/ri";
import { Link, useParams } from "react-router-dom";
import Banner from "./Banner";
import { useEffect, useState } from "react";
import api from "../../utils";
import Error from "../../components/Error";
import Loader from "../../components/Loader";
import Content from "./Content";
import ActorList from "./ActorList";
import VideoList from "./VideoList";
import AddButton from "../../components/AddButton";

const Detail = () => {
  // url deki parametreye eriş

  const { id } = useParams();

  // statler oluştur

  const [error, setError] = useState(null);
  const [movie, setMovie] = useState(null);

  console.log(id);

  useEffect(() => {
    const params = {
      append_to_response: "videos,credits",
      language: "tr",
    };
    api
      .get(`/movie/${id}`, params)
      .then((res) => {
        setMovie(res.data);
      })
      .catch((err) => setError(err.message));
  }, []);
  console.log(movie);
  return (
    <>
      {error ? (
        <Error />
      ) : !movie ? (
        <Loader />
      ) : (
        <div>
          {/*  top */}
          <div className="flex justify-between mb-5">
            <Link
              to={-1}
              className="flex gap-2 items-center py-2 px-4 bg-gray-600
        rounded hover:bg-gray-500 transition"
            >
              <RiArrowLeftLine className="text-xl " />

              <span>Geri</span>
            </Link>

            <AddButton movie={movie} />
          </div>

          {/*  banner */}

          <Banner movie={movie} />

          {/*  content */}

          <Content movie={movie} />

          {/*  actor list */}
          <ActorList id={id} />

          {/*  vide list */}

          <VideoList id={id} />
        </div>
      )}
    </>
  );
};

export default Detail;
