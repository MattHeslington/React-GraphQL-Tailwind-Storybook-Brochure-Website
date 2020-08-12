import React, { Component } from 'react'

export class FilterButton extends Component {
    render() {
        return (
            <button className="flex items-center w-64 h-full border-r border-gray-400 hover:bg-uvWhite">
                <div className="pl-4">
                    <div>
                        <p className="text-xs text-left uppercase">{this.props.heading}</p>
                    </div>
                    <div className="text-xs text-left">
                        <p>{this.props.secondary}</p>
                    </div>
                </div>
            </button>
        )
    }
}

export default FilterButton
