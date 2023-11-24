import { useParams } from "react-router-dom";

function Topic() {
  const description = [
    "Amazing tool for Web Dev",
    "Great language to integrate with html",
    "Tag based language",
    "Great for designing",
    "Great for managing states of complex applications",
    "Great for visualisation",
  ];
  const urlId = useParams();

  return <h1>{description[urlId.id]}</h1>;
}

export default Topic;
