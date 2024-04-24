import { TreeNodeNum } from "../common/tree";
import { Stack } from "../common/stack";

/** Get maximum depth from node.
 *
 * Maximum depth: length of longest path from node to a leaf.
 **/

function maxDepth(node: TreeNodeNum | null): number {
  if (node?.children.length === 0) return 0;
  // const toVisit = new Stack<TreeNodeNum>([node!]);

  let childrenMaxDepths = [];

  for (let child of node!.children) {
    childrenMaxDepths.push(1 + maxDepth(child));
  }

  return 1 + Math.max(...childrenMaxDepths);

  // for (const child of node?.children) {
  //   if (child?.children.length === 0) return maxDepth(node)

  // }

  // return Math.max(1 + maxDepth(node?.children))

  // return 42;
}

export { maxDepth };

/**
 * node : A
 * children: B and C
 * B -> maxDepth(B)
 *          node: B
 *            children: D and E
 * D -> maxDepth(D)
 *           node: D
 *              return 0
 *                childrenMaxDepth [0,0,]
 * E -> maxDepth(E)
 *            node: E
 *              children: F
 *
 *
 *
 */
