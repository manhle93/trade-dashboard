import Candlestick from '../../components/Charts/Candlestick/Candlestick'
const INITIAL_STATE = {
    components: [
        {
            name: 'Đồ thị nến',
            code: 'candlestick',
            component: <Candlestick/>
        }
    ]
}

const LayoutReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
          return state;
      }
}

export default LayoutReducer