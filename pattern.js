function pyramid(pattern, rows, isDownwards) {
  let result = "\n";

  if (!isDownwards) {
    for (let i = 0; i < rows; i++) {
      result +=
        " ".repeat(rows - i - 1) +
        pattern.repeat(2 * i + 1) +
        "\n";
    }
  } else {
    for (let i = rows - 1; i >= 0; i--) {
      result +=
        " ".repeat(rows - i - 1) +
        pattern.repeat(2 * i + 1) +
        "\n";
    }
  }

  return result;
}
