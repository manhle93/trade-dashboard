import Candlestick from '../../components/Charts/Candlestick/Candlestick'
import Line from '../../components/Charts/Line/Line'
import Area from '../../components/Charts/Area/Area'
import Treemap from '../../components/Charts/Treemap/Treemap'
import Table1 from '../../components/Tables/Table1/Table1'
import Table2 from '../../components/Tables/Table2/Table2'

import { faChartLine, faChartArea, faMap, faTable, faCannabis } from '@fortawesome/free-solid-svg-icons'

const INITIAL_STATE = {
    components: [
        {
            name: 'Đồ thị nến',
            component: <Candlestick/>,
            icon: faCannabis
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
        {
            name: 'Bảng biểu 1',
            component: <Table1 />,
            icon: faTable
        },
        {
            name: 'Bảng biểu 2',
            component: <Table2 />,
            icon: faTable
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