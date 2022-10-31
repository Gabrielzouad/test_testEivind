const doesMath = (x, y, opperation) => {
  let returnStatement;
  switch (opperation){
    case "pluss":
      returnStatement = x + y;
      break;
    case "minus":
      returnStatement = x - y;
      break;
    case "gange":
      returnStatement = x * y;
      break;
    case "dele":
      returnStatement = x / y;
      break;
    case "prosent":
      returnStatement = x / y * 100;
      break;
  }
  return returnStatement;
}

export default doesMath;