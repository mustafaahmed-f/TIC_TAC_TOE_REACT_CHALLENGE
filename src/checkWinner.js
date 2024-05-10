function checkDiagonal({ diagonal1, diagonal2 }) {
  if (
    (diagonal1.every((value, index, arr) => value === arr[0]) &&
      !diagonal1.some((val) => val === null)) ||
    (diagonal2.every((value, index, arr) => value === arr[0]) &&
      !diagonal2.some((val) => val === null))
  ) {
    return true;
  } else {
    return false;
  }
}

function checkColumns({ column1, column2, column3 }) {
  if (
    (column1.every((value, index, arr) => value === arr[0]) &&
      !column1.some((val) => val === null)) ||
    (column2.every((value, index, arr) => value === arr[0]) &&
      !column2.some((val) => val === null)) ||
    (column3.every((value, index, arr) => value === arr[0]) &&
      !column3.some((val) => val === null))
  ) {
    return true;
  } else {
    return false;
  }
}

function checkRows({ row1, row2, row3 }) {
  if (
    (row1.every((value, index, arr) => value === arr[0]) &&
      !row1.some((val) => val === null)) ||
    (row2.every((value, index, arr) => value === arr[0]) &&
      !row2.some((val) => val === null)) ||
    (row3.every((value, index, arr) => value === arr[0]) &&
      !row3.some((val) => val === null))
  ) {
    return true;
  } else {
    return false;
  }
}

export function checkWinner({
  row1,
  row2,
  row3,
  column1,
  column2,
  column3,
  diagonal1,
  diagonal2,
}) {
  if (
    checkRows({ row1, row2, row3 }) ||
    checkColumns({ column1, column2, column3 }) ||
    checkDiagonal({ diagonal1, diagonal2 })
  ) {
    return true;
  }
  return false;
}
