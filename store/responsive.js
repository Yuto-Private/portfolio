const breakPoint = 960;

const isDeviceType = w => {
  return w < breakPoint ? false : true;
}

const getWindowSize = () => {
  let w = window.innerWidth
  let h = window.innerHeight
  return { w: w, h: h }
}

const defaultState = {
  size: getWindowSize(),
  isPC: isDeviceType(window.innerWidth)
}

const state = () => ({
   isDevice: defaultState
})

const getters = {
  isPC: state => state.isDevice.isPC 
}

const mutations = {
  update(state) {
    state.isDevice.size = getWindowSize();
    state.isDevice.isPC = isDeviceType(state.isDevice.size.w);
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations
}