import Reactotron from 'reactotron-react-js'
import { reactotronRedux } from 'reactotron-redux'
import sagaPlugin from 'reactotron-redux-saga'

const reactotron = Reactotron

reactotron.configure({
  host: 'localhost',
})
  .use(reactotronRedux())
  .use(sagaPlugin())
  .connect()

  export default reactotron
