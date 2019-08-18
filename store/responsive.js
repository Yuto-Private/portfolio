const tabletThreshold = 960;
const mobileThreshold = 768;

const isDeviceType = w => {

  if( w < tabletThreshold && w > mobileThreshold ){
    return 'tablet';
  } else if ( w < mobileThreshold ) {
    return 'mobile';
  }
  return 'desktop';

}

const getWindowSize = () => {
  let w = window.innerWidth
  let h = window.innerHeight
  return {
    w: w,
    h: h
  }
}

const defaultState = {
  size: getWindowSize(),
  type: isDeviceType(window.innerWidth)
}

const state = () => ({
   isDevice: defaultState
})

const getters = {
  isDevice: state => state.isDevice 
}

const mutations = {
  update(state) {
    state.isDevice.size = getWindowSize();
    state.isDevice.type = isDeviceType(state.isDevice.size.w);
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations
}