import { VIEW_MOVIE } from './bannerTypes';

const initialState = {
    newBanner: 10
}

const bannerReducer = (state = initialState, action) => {
    swtich(action.type) {
        case VIEW_MOVIE: return {
            ... state,
            newbanner: state.newBanner + 1
        }
        default: return state 
    }
}

export default bannerReducer