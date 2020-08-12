import React from "react"
import LayoutHome from "components/layouts/LayoutHome"
import Filters from "components/site/Filters"
import Card from "components/lists/Card"

export default function Home() {
    return (
        <LayoutHome>
            <Filters/>

            <div className="flex mt-4 space-x-4">
                <Card url="villa-sample-2.jpg" name="Villa Akuvara" price="600"/>
                <Card url="villa-sample.jpg" name="Villa Hacienda" price="500"/>
                <Card url="villa-sample-4.jpg" name="The Gatehouse" price="700"/>
                <Card url="villa-sample-3.jpg" name="Villa Roman" price="999"/>
            </div>

            <div className="flex mt-4 space-x-4">
                <Card url="villa-sample-5.jpg" name="Villa Cendana" price="200"/>
                <Card url="villa-sample-6.jpg" name="Villa Amelia" price="399"/>
                <Card url="villa-sample-7.jpg" name="Villa Sunset" price="199"/>
                <Card url="villa-sample-8.jpg" name="Villa Cuci" price="600"/>
            </div>

            <div className="flex mt-4 space-x-4">
                <Card url="villa-sample-9.jpg" name="The Farmyard" price="1200"/>
                <Card url="villa-sample-10.jpg" name="Villa Vinyard" price="1400"/>
                <Card url="villa-sample-11.jpg" name="Villa Waterfall" price="900"/>
                <Card url="villa-sample-12.jpg" name="Villa Spanish Castle" price="1150"/>
            </div>
            
        </LayoutHome>
    )
}
