import React, { Component } from 'react'

export class PhotoGrid extends Component {
    render() {
        return (

            <div className="flex">

                <div className="w-1/2">
                    <div className="h-0 overflow-hidden bg-no-repeat bg-cover sizer" style={{ backgroundImage: `url(${this.props.mainImage})`, borderRadius:"15px 0 0 15px" }}>

                    </div>
                </div>

                <div className="w-1/2">
                    <div className="flex">
                        <div className="w-1/2">
                            <div className="h-0 overflow-hidden bg-no-repeat bg-cover sizer" style={{ backgroundImage: `url(${this.props.gridImage0})` }}>
                                <span></span>
                            </div>
                            <div className="h-0 overflow-hidden bg-no-repeat bg-cover sizer" style={{ backgroundImage: `url(${this.props.gridImage1})` }}>

                            </div>
                        </div>
                        <div className="w-1/2">
                            <div className="h-0 overflow-hidden bg-no-repeat bg-cover sizer" style={{ backgroundImage: `url(${this.props.gridImage2})`, borderRadius:"0 15px 0 0" }}>

                            </div>
                            <div className="h-0 overflow-hidden bg-no-repeat bg-cover sizer" style={{ backgroundImage: `url(${this.props.gridImage3})`, borderRadius:"0 0 15px 0" }}>

                            </div>
                        </div>
                    </div>
                </div>
                <style jsx>
                    {`
                        .sizer{
                            padding-top:100%;
                        }
                    `}
                </style>
            </div>

        )
    }
}

export default PhotoGrid
