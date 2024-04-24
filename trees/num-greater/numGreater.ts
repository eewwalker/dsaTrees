import { TreeNodeNum } from "../common/tree";
import { Stack } from "../common/stack";

/** numGreater(lowerBound): starting from the invoking node and moving
 * through its children, return a count of the number of nodes whose value
 * is greater than lowerBound. */

function numGreater(node: TreeNodeNum, lowerBound: number): number {
  const toVisit = new Stack<TreeNodeNum>([node]);
  let count: number = 0;

  while (!toVisit.isEmpty()) {
    const current = toVisit.pop();


    for (const child of current.children) {
      toVisit.push(child);
    }

    if (current.val > lowerBound) {

      count++;
    }
  }


  return count;
}

export { numGreater };