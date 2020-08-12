import React, { Component } from 'react'
import Star from 'components/site/Star'

export class EnquiryForm extends Component {
    render() {
        return (
            <div className="p-2 mt-4 mb-12 border rounded-lg shadow-lg">{/*was w-80*/}

                <div className="flex justify-between">
                    <div className="">
                        <p className="text-xl font-bold">&#36;370<span className="text-sm font-thin">&nbsp;per night</span></p>
                    </div>
                    <div className="flex items-center">
                        <div id="svg">
                            <svg className="w-6 h-6 fill-current text-uvPink">
                                <Star/>
                            </svg>
                        </div>
                        <div>
                            <p className="text-xl font-bold">4.7<span className="text-sm font-thin">&#40;4&#41;</span></p>
                        </div>
                    </div>
                </div>

                <div className="w-full p-2 mx-auto mt-4 border border-gray-400 rounded-lg">

                    <div className="flex justify-between">
                        <div className="text-left">
                            <p className="text-xs leading-tight uppercase">check-in</p>
                            <p>12/11/2020</p>
                        </div>
                        <div className="text-right">
                            <p className="text-xs leading-tight uppercase">checkout</p>
                            <p>17/11/2020</p>
                        </div>
                    </div>

                    <div className="flex justify-between mt-4">
                        <div className="stext-left">
                            <p className="text-xs leading-tight uppercase">guests</p>
                            <p>4 guests</p>
                        </div>
                        <div className="text-right">
                            <p className="text-xs leading-tight uppercase">nights</p>
                            <p>5 nights</p>
                        </div>
                    </div>
                    
                </div>

                <div>
                    <button className="w-full py-3 mt-2 text-sm text-white rounded-lg bg-uvPink">Reserve</button>
                    <p className="mt-2 text-xs text-center">Pay nothing now</p>
                </div>

                <div className="w-full px-2 py-4 mx-auto mt-2 border border-gray-400 rounded-lg">
                    <div className="flex justify-between">
                        <div className="text-left">
                            <p className="text-xs leading-tight uppercase">&#36;370&nbsp;x&nbsp;5 nights</p>
                        </div>
                        <div className="text-right">
                            <p className="text-xs leading-tight uppercase">&#36;2,295</p>
                        </div>
                    </div>
                    <div className="flex justify-between mt-2">
                        <div className="text-left">
                            <p className="text-xs leading-tight uppercase">Service fee</p>
                        </div>
                        <div className="text-right">
                            <p className="text-xs leading-tight uppercase">&#36;344</p>
                        </div>
                    </div>
                </div>

                <div className="mt-4">
                    <div className="flex justify-between">
                        <div className="text-left">
                            <p className="">Total</p>
                        </div>
                        <div className="text-right">
                            <p className="text-xl font-bold">&#36;2,639</p>
                        </div>
                    </div>
                </div>

        </div>
        )
    }
}

export default EnquiryForm
