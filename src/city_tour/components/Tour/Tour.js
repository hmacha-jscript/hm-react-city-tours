import React, { Component } from 'react';
import './tour.scss';

export default class Tour extends Component {
    state = {
        showInfo: true
    }

    handleShowInfo = () => {
        this.setState((state) => (
            { showInfo: !state.showInfo }
        )
        )
    }
    render() {
        const { id, img, city, name, info } = this.props.tour;
        const { deleteTour } = this.props;
        return (
            <article className="tour">
                <div className="img-container">
                    <img src={img} alt={city} />
                    <span className="close-btn">
                        <i onClick={() => deleteTour(id)} className="fas fa-window-close" />
                    </span>
                </div>
                <div className="tour-info">
                    <h3>{city}</h3>
                    <h4>{name}</h4>
                    <h5>info{" "} <span><i onClick={this.handleShowInfo} className="fas fa-caret-down" /></span></h5>
                    {this.state.showInfo && <p>{info}</p>}
                </div>
            </article>
        )
    }
}