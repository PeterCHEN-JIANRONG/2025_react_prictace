import classNames from "classnames";

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
        className={
          classNames({
            aaa: item.name == 'apple',
            bbb: item.name == 'banana',
            ccc: item.name == 'cat',
          })
        }
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
