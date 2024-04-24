import { BNodeNum } from "../common/bintree";

/** dfsPreOrder(): Traverse from the invoking node using pre-order DFS.
 * Returns an array of values of visited nodes. */

function preOrder(node: BNodeNum | null): number[] {
  const result: number[] = [];

  if (!node) return result;

  result.push(node.val);

  result.push(...preOrder(node.lnode), ...preOrder(node.rnode));

  return result;
}

/**
 *        6
 *       / \
 *      5  5
 *
 *
 *
 *
 */


/** dfsPostOrder(): Traverse from the invoking node using post-order DFS.
 * Returns an array of values of visited nodes. */

function postOrder(node: BNodeNum | null): number[] {
  const result: number[] = [];

  if (!node) return result;


  result.push(...postOrder(node.lnode), ...postOrder(node.rnode));

  result.push(node.val);

  return result;
}

export { preOrder, postOrder };