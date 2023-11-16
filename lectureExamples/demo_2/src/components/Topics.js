function TopicButton(props) {
  return (
    <>
      <button>{props.name}</button>
    </>
  );
}

export default function Topics() {
  return (
    <>
      <TopicButton name={"React"} />
      <TopicButton name={"JS"} />
      <br />
      <TopicButton name={"HTML"} />
      <TopicButton name={"CSS"} />
      <br />
      <TopicButton name={"Redux"} />
      <TopicButton name={"Trees"} />
    </>
  );
}
