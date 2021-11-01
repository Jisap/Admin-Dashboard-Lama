import React from 'react'
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import "./home.css" 
import { userData } from "../../dummyData"
import Charts from '../../components/charts/Charts'
import WidgetLg from '../../components/widgetLg/WidgetLg'
import WidgetSm from '../../components/widgetSm/WidgetSm'

const Home = () => {
    return (
        <div className="home">
            <FeaturedInfo />
            <Charts 
                title="User Analitycs"
                data={ userData }
                dataKey="Active User"
                grid
            />
            <div className="homeWidgets">
                <WidgetSm />
                <WidgetLg />
            </div>
        </div>
    )
}

export default Home
