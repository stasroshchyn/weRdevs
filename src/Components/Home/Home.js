import React, {Component} from 'react';
import Calendar from '../Calendar/Calendar';
import Modal from '../Modal/Modal';
import './Home.scss';

const text = 'We encourage you to book your \n appointment online. \n This will save you time.';

class Home extends Component {
    state = {activeCellData: null};
    
    handleCellClick = (activeCellData) => {
        this.setState({activeCellData});
    };

    handleCloseModal = () => this.setState({activeCellData: null});

    render() {
        const {activeCellData} = this.state;

        return (
            <div className="home">
                <div className="home__calendar-container">
                    <Calendar handleCellClick={this.handleCellClick}/>
                </div>
                <div className="home__title">
                    <h1>Choose the day for the meeting</h1>
                    <h2>
                        {text}
                    </h2>
                </div>
                {activeCellData && (
                    <Modal
                        close={this.handleCloseModal}
                        month={activeCellData.monthText}
                        dayNumeric={activeCellData.dayNumeric}
                        dayText={activeCellData.dayText}
                    />
                )}
            </div>
        )
    }
}

export default Home;
