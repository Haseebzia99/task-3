import { createStore } from 'redux'
import bannerReducer from './BannerNew/bannerReducer'

const store = createStore(bannerReducer)

export default store 