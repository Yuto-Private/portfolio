export const state = () => ({
  status: false
});

export const mutations = {
  update( state, payload ) {
    payload == '/' ? state.status = false : state.status = true;
  }
}