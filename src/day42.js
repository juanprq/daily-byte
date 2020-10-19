const indexOf = (columns, data) => {
  for (let i = 0; i < columns.length; i++) {
    if (columns[i].includes(data)) {
      return i;
    }
  }

  return null;
}

function buildColumnsPush(node, columns, parent) {
  if (!node) return;

  const { data } = node;
  if (!parent) {
    columns.push([data])
  } else {
    const parentIndex = indexOf(columns, parent.data);

    if (columns[parentIndex + 1]) {
      columns[parentIndex + 1].push(data);
    } else {
      columns.push([data]);
    }
  }

  buildColumnsUnshift(node.left, columns, node);
  buildColumnsPush(node.right, columns, node);
}

function buildColumnsUnshift(node, columns, parent) {
  if (!node) return;

  const { data } = node;
  const parentIndex = indexOf(columns, parent.data);

  if (columns[parentIndex - 1]) {
    columns[parentIndex - 1].push(data);
  } else {
    columns.unshift([data]);
  }

  buildColumnsUnshift(node.left, columns, node);
  buildColumnsPush(node.right, columns, node);
}

const getColumns = (head) => {
  const columns = [];
  buildColumnsPush(head, columns);

  return columns;
}

module.exports = getColumns;
