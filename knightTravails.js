import Node from "./node.js";

let newAdjacencyList = buildAdjacencyList();
let testStart = Node(0, 0);
let testEnd = Node(4, 2);

console.log("end result:", knightMoves(testStart, testEnd));

function knightMoves(start, end) {
  let prev = solve(start);
  return reconstructPath(start, end, prev);
}

function reconstructPath(start, end, prev) {
  let path = [];

  let at = end;
  while (at !== null) {
    path.push(at.makeNodeToArray());
    at = prev[at.getNodeNumber() - 1];
  }

  let pathReversed = path.reverse();
  if (
    JSON.stringify(pathReversed[0]) == JSON.stringify(start.makeNodeToArray())
  )
    return pathReversed;
  return [];
}

function solve(start) {
  let nodeQueue = [];
  nodeQueue.push(start);

  let visited = [];
  for (let i = 0; i < 64; ++i) visited[i] = false;
  visited[start.getNodeNumber() - 1] = true;

  let prev = [];
  for (let i = 0; i < 64; ++i) prev[i] = null;

  while (nodeQueue.length > 0) {
    let node = nodeQueue.shift();
    let neighbours = findAdjacentNodesInArray(node);

    for (let nextNode of neighbours) {
      if (!visited[nextNode.getNodeNumber() - 1]) {
        nodeQueue.push(nextNode);
        visited[nextNode.getNodeNumber() - 1] = true;
        prev[nextNode.getNodeNumber() - 1] = node;
      }
    }
  }
  return prev;
}

function findAdjacentNodesInArray(node) {
  let foundAdjacentNodes;
  for (let i = 0; i < newAdjacencyList.length; ++i) {
    if (newAdjacencyList[i].compareNodes(node)) {
      foundAdjacentNodes = newAdjacencyList[i].getAdjacentNodeList();
      break;
    }
  }
  return foundAdjacentNodes;
}

function buildAdjacencyList() {
  let adjacencyList = [];

  for (let i = 0; i < 8; ++i) {
    for (let d = 0; d < 8; ++d) {
      let newListNode = Node(d, i);
      newListNode.setAdjacentNodeList(findAllAdjacentNodes(d, i));
      adjacencyList.push(newListNode);
    }
  }
  return adjacencyList;
}

function findAllAdjacentNodes(x, y) {
  let listOfAdjacentNodes = [];

  if (isNodeOnChessboard(x - 1, y + 2)) {
    let newNode = Node(x - 1, y + 2);
    listOfAdjacentNodes.push(newNode);
  }
  if (isNodeOnChessboard(x + 1, y + 2)) {
    let newNode = Node(x + 1, y + 2);
    listOfAdjacentNodes.push(newNode);
  }
  if (isNodeOnChessboard(x + 2, y + 1)) {
    let newNode = Node(x + 2, y + 1);
    listOfAdjacentNodes.push(newNode);
  }
  if (isNodeOnChessboard(x + 2, y - 1)) {
    let newNode = Node(x + 2, y - 1);
    listOfAdjacentNodes.push(newNode);
  }
  if (isNodeOnChessboard(x + 1, y - 2)) {
    let newNode = Node(x + 1, y - 2);
    listOfAdjacentNodes.push(newNode);
  }
  if (isNodeOnChessboard(x - 1, y - 2)) {
    let newNode = Node(x - 1, y - 2);
    listOfAdjacentNodes.push(newNode);
  }
  if (isNodeOnChessboard(x - 2, y - 1)) {
    let newNode = Node(x - 2, y - 1);
    listOfAdjacentNodes.push(newNode);
  }
  if (isNodeOnChessboard(x - 2, y + 1)) {
    let newNode = Node(x + -2, y + 1);
    listOfAdjacentNodes.push(newNode);
  }

  return listOfAdjacentNodes;
}

function isNodeOnChessboard(x, y) {
  if (x < 0 || y < 0 || x > 7 || y > 7) return false;
  return true;
}
