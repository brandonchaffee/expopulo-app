let separator = function (n, sep, decimals) {
  if (typeof (n) !== 'number') {
    n = parseInt(n, 10)
  }
  sep = sep || '.' // Default to period as decimal separator
  decimals = decimals || 2 // Default to 2 decimals

  return n.toLocaleString().split(sep)[0] +
        sep +
        n.toFixed(decimals).split(sep)[1]
}

export default separator
