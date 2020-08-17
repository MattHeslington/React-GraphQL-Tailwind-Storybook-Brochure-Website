import React, { Component } from 'react'
import { Link } from 'gatsby'

import Star from 'components/site/Star'

export class CardDynamic extends Component {
    render() {
        return (
            <article className="mt-8 w-80">
                <Link to={this.props.slug}>
                    <div className="relative rounded-lg pb-5/6" style={{ backgroundImage:this.props.imgBg }}>
                        <img className="absolute inset-0 object-cover h-64 h-full transition-opacity duration-500 rounded-lg hover:opacity-90" src={this.props.imgUrl} alt="Alt"></img>
                        {/*<div className="absolute top-0 left-0 mt-32 ml-1">
                            <span className="flex items-center justify-center p-1 bg-gray-300 rounded-full">
                                <svg className="w-3 h-3" viewBox="0 0 24 24"><path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"/></svg>
                            </span>
                        </div>
                        <div className="absolute top-0 right-0 mt-32 mr-1">
                            <span className="flex items-center justify-center p-1 bg-gray-300 rounded-full">
                                <svg className="w-3 h-3" viewBox="0 0 24 24"><path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z"/></svg>
                            </span>
                        </div>
                        <div className="absolute top-0 right-0 mt-2 mr-2">
                            <svg className="w-5 h-5 text-white fill-current" viewBox="0 0 24 24"><path d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z"/></svg>
                        </div>*/}
                    </div>

                    <div className="relative px-3 py-2 mx-auto -mt-12 bg-white rounded-lg shadow-lg w-72">

                        <div className="flex justify-between">{/*ROW ONE*/}

                            <div className="flex items-center">
                                <div>
                                    <svg className="w-4 h-4 fill-current text-uvPink" viewBox="0 0 24 24">
                                        <Star/>
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm"><span>&nbsp;4.7</span><span>&nbsp;(24)</span></p>
                                </div>
                            </div>

                            <div>
                                <span className="px-2 mr-2 text-xs text-white border rounded border-uvBlack bg-uvBlack">LUX</span>
                                <span className="px-2 text-xs text-white border rounded border-uvPink bg-uvPink">OFFER</span>
                            </div>

                        </div>

                        <h2 className="mt-1 text-base font-semibold text-uvBlack">{this.props.name}</h2>

                        <p className="mt-1 text-base leading-tight text-gray-600">{this.props.headline}</p>

                        <div className="flex justify-between mt-2">
                            <div>
                                <p className="text-sm">{this.props.beds} Beds | {this.props.baths} Baths</p>
                            </div>

                            <div>
                                <p className="text-xs"><span className="text-base font-semibold text-uvBlack">${this.props.price}</span> / night</p>
                            </div>
                        </div>
                    </div>
                </Link>
            </article>
        )
    }
}

export default CardDynamic
