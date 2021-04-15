import { initGlobalState} from 'qiankun';
import store from './store'

export default initGlobalState(store.getState())