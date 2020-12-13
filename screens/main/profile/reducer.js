export const mediaData = [
    {
      title: 'Photos',
      active: true
    },
    {
      title: 'Video',
      active: false
    },
    {
      title: 'Files',
      active: false
    },
  ]
  

export const MediaReducer = (state, action) => {
    switch (action.type){
        case 'SELECT':
            return state.map(media => {
                if (media.title === action.payload) {
                    return {
                        ...media,
                        active: true
                    }
                }else{
                    return {
                        ...media,
                        active: false
                    }
                }
            })
        default:
            return state
    }
}