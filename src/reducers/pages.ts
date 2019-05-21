const pages = (state = {page_num: 0}, action: any) => {
  switch(action.type){
    case 'ADD_PAGES':
      console.log('debug:page_num', state.page_num);
      return { ...state, page_num: ++state.page_num }
    default:
      return state;
  }
}
export default pages;