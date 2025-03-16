const Card = ({ item }) => {


  const say = () => {
    console.log(`my name is ${item.name}`);
    
  }
  return (
    <>
      <li
        style={{
          color: "red",
          fontSize: 24,
        }}
      >
        {item.name}
        <button type="button" onClick={ say }>
          呼叫
        </button>
      </li>
    </>
  );
};

export default Card;
