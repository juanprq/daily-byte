const merge = (listA, listB) => {
  const [headA, ...restA] = listA;
  const [headB, ...restB] = listB;
  if (!headB) return listA;
  if (!headA) return listB;

  if (headA < headB) return [headA, ...merge(restA, listB)];
  return [headB, ...merge(listA, restB)];
};

module.exports = merge;
