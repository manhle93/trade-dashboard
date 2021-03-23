import Candlestick from '../../components/Charts/Candlestick/Candlestick'
import Line from '../../components/Charts/Line/Line'
import Area from '../../components/Charts/Area/Area'
import Treemap from '../../components/Charts/Treemap/Treemap'
import { faCoffee, faChartLine, faChartArea, faMap } from '@fortawesome/free-solid-svg-icons'

const INITIAL_STATE = {
    components: [
        {
            name: 'Đồ thị nến',
            component: <Candlestick/>,
            icon: faCoffee
        },
        {
            name: 'Đồ thị đường',
            component: <Line />,
            icon: faChartLine
        },
        {
            name: 'Đồ thị miền',
            component: <Area />,
            icon: faChartArea
        },
        {
            name: 'Đồ thị vùng',
            component: <Treemap />,
            icon: faMap
        },
    ]
}

const LayoutReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
          return state;
      }
}

export default LayoutReducer