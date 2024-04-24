import { Stack } from "../common/stack";
import { TreeNodeNum } from "../common/tree";

/** sumValues(): add up all values of node and its descendants.
 * Returns sum as an integer. */
function sumValues(node: TreeNodeNum): number {
  const toVisit = new Stack<TreeNodeNum>([node]);
  let sum: number = 0;

  while (!toVisit.isEmpty()) {
    const current = toVisit.pop();
    sum += current.val;

    for (const child of current.children) {
      toVisit.push(child);
    }

  }


  return sum;
}

export { sumValues };
