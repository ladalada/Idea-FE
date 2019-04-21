import './filter.css';
import React, { Component }  from 'react';

class Filter extends Component {
    render() {
        return (
            <div className="filter">
                <button className="search_button"/>
                <input className="search" type="text" placeholder="Keyword" maxLength="15"/>
                <div className="date_sort"> Sort by date </div>
                <button className="data_sort_button"/>
                <div className="priority">
                    <button className="lamp"/>
                    <button className="lamp"/>
                    <button className="lamp"/>
                </div>
                <div className="filter_tags">
                    <div className="tags_title"> Tags: </div>
                    <div className="border"> awesome </div>
                    <div className="border"> idea </div>
                    <div className="border"> should </div>
                    <div className="border"> write </div>
                    <div className="border"> down </div>
                </div>
            </div>
        )
    }
};

export default Filter;