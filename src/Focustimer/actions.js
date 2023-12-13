import state from "./state.js"

export function toggleRunning () {
  state.isRunning = !state.isRunning

  if (state.isRunning === true) {
    document.documentElement.classList.add('running')
  } else {
    document.documentElement.classList.remove('running')
  }

  //  OU
  // state.isRunning = document.documentElement.classList.toggle('running')
}

export function set () {
  console.log('set function')
}

export function reset () {
  state.isRunning = false
  state.isRunning = document.documentElement.classList.remove('running')
}

export function toggleMusic () {
  // state.isMute = !state.isMute

  // if (state.isMute === false) {
  //   document.documentElement.classList.add('music-on')
  // } else {
  //   document.documentElement.classList.remove('music-on')

  // OU

  state.isMute = document.documentElement.classList.toggle('music-on')
  // o toggle tem uma resposta booleana, true ou false, por isso pode ser usado assim
  }
