const getScramble = () => {
  const len = 20
  let ans = ""
  let s = -1;
  let x = ["U", "U'", "U2", "D", "D'", "D2"]
  let y = ["R", "R'", "R2", "L", "L'", "L2"]
  let z = ["F", "F'", "F2", "B", "B'", "B2"]

  let move = ""

  let k = Math.floor(Math.random() * 18)
  if (k < 6) {
    move = x[k]
    s = 0
  } else if (k < 12) {
    move = y[k - 6]
    s = 1
  } else {
    move = z[k - 12]
    s = 2
  }

  for (let i = 0; i < len; i++) {
    let k = Math.floor(Math.random() * 12)
    if (s === 0) {
      if (k < 6) {
        move = y[k]
        s = 1
      } else {
        move = z[k - 6]
        s = 2
      }
    } else if (s === 1) {
      if (k < 6) {
        move = x[k]
        s = 0
      } else {
        move = z[k - 6]
        s = 2
      }
    } else {
      if (k < 6) {
        move = x[k]
        s = 0
      } else {
        move = y[k - 6]
        s = 1
      }
    }
    ans += move
    if (i < len - 1) ans += " "
  }
  return ans
}

export default getScramble