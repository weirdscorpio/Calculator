export default {
  addToResult: (state, x) => {
    if (state.rslt.signval === 0) {
      var n = state.rslt.res
      n = n + x
      state.rslt.res = n
    } else {
      state.rslt.res = x
      state.rslt.signval = 0
    }
  },
  erase: (state) => {
    state.rslt.res = '0'
  },
  prefixSign: (state) => {
    var n = state.rslt.res
    n = parseInt(n)
    n = -1 * n
    state.rslt.res = n.toString()
  },
  percentage: (state) => {
    var n = state.rslt.res
    n = n / 100
    state.rslt.res = n
  },
  addSign: (state, x) => {
    state.rslt.sign = x
    state.rslt.signval = 1
    state.rslt.prev = state.rslt.res
  },
  calculate: (state) => {
    var x = parseInt(state.rslt.prev)
    var y = parseInt(state.rslt.res)
    switch (state.rslt.sign) {
      case '/' :
        state.rslt.res = (x / y).toString()
        break
      case 'X' :
        state.rslt.res = (x * y).toString()
        break
      case '-' :
        state.rslt.res = (x - y).toString()
        break
      case '+' :
        state.rslt.res = (x + y).toString()
        break
    }
  }
}
