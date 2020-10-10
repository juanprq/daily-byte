const BinaryTree = require('./binaryTree');

const isEqual = (binaryTreeA, binaryTreeB) => {
  const { head: headA } = binaryTreeA;
  const { head: headB } = binaryTreeB;

  if (!headA && headB) return false;
  if (headA && !headB) return false;
  if (!headA && !headB) return true;
  if (headA.data === headB.data) {
    return true
      && isEqual(new BinaryTree(headA.left), new BinaryTree(headB.left))
      && isEqual(new BinaryTree(headA.right), new BinaryTree(headB.right));
  }

  return false;
};

module.exports = isEqual;
