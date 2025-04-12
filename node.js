export default function Node(x, y) {
  let xCoordinate = x;
  let yCoordinate = y;
  let adjacentNodesList = [];
  let nodeNumber = null;
  nodeNumber = setNodeNumber();

  function setNodeNumber() {
    if (yCoordinate > 0) return xCoordinate + 1 + yCoordinate * 8;
    return xCoordinate + 1;
  }

  function getNodeNumber() {
    return nodeNumber;
  }

  function setAdjacentNodeList(nodeList) {
    adjacentNodesList = [...nodeList];
  }

  function getAdjacentNodeList() {
    return adjacentNodesList;
  }

  function makeNodeToArray() {
    return [xCoordinate, yCoordinate];
  }

  function compareNodes(node) {
    if (xCoordinate === node.xCoordinate && yCoordinate === node.yCoordinate)
      return true;
    return false;
  }

  return {
    xCoordinate,
    yCoordinate,
    getNodeNumber,
    makeNodeToArray,
    setAdjacentNodeList,
    getAdjacentNodeList,
    compareNodes,
  };
}
