import React, { Component } from 'react';
import './tourlist.scss';
import Tour from '../Tour';
import { tourData } from '../../data/tourData';

export default class TourList extends Component {

    state = {
        tours: tourData
    }

    deleteTour = (id) => {
        const tours = this.state.tours.filter(tour => tour.id !== id);
        this.setState(state => ({ tours }))
    }

    render() {
        return (
            <section className="tourlist">
                {
                    this.state.tours.map(tour => (
                        <Tour key={tour.id} tour={tour} deleteTour={this.deleteTour} />
                    ))
                }
            </section>
        )
    }
}