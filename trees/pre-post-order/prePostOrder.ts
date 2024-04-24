import { TreeNodeNum } from "../common/tree";

/** dfsPreOrder(): Traverse from the invoking node using pre-order DFS.
 * Returns an array of values of visited nodes. */

function preOrder(node: TreeNodeNum | null): number[] {
  const arr : number[] = [];
  if (!node) return arr;
  debugger
  arr.push(node!.val)

  for (const child of node.children) {
    arr.push(...preOrder(child));
  }

  return arr;
}


/** dfsPostOrder(): Traverse from the invoking node using post-order DFS.
 * Returns an array of values of visited nodes. */

function postOrder(node: TreeNodeNum | null): number[] {
  const arr : number[] = [];
  if (!node) return arr;

  for (const child of node.children) {
    arr.push(...postOrder(child));
  }

  arr.push(node!.val)

  return arr;
}

export { preOrder, postOrder };
