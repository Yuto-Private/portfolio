export default ({store,route}) => {
  store.commit('dockMenu/update', route.path);
} 
