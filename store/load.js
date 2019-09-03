export const state = () => ({
  loadFlag: false,
  done: false
});

export const getters = {
  done: state => state.done
}

export const mutations = {
  loadFlag( state ) {
    state.loadFlag = !state.loadFlag;
  },
  done( state ) {
    state.done = !state.done;
  }
}