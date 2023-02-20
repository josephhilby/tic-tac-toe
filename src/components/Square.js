const style = {
  background: "lightblue",
  border: "2px solid darkblue",
  fontSize: "30px",
  fontWeight: "800",
  cursor: "pointer",
  outline: "none",
};


export default function Square({ value, onSquareClick }) {
  return (
    <button style={style} className='square' onClick={onSquareClick}>
      {value}
    </button>
  );
}