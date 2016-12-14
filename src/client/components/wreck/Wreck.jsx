import _ from 'lodash';
import React from 'react';

export default class Wreck extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            angle: 0,
            faceIndex: 1,
            leftWallIndex: 1,
            rightWallIndex: 1,
            done: false,
        };
    }

    componentDidMount() {
        setInterval(() => {
            let angle = this.state.angle === 0 || this.state.angle === 60 ? -60 : 60;

            this.setState({
                angle: this.state.leftWallIndex > 9 && this.state.rightWallIndex > 9 ? 0 : angle,
                //done when all walls are destroyed
                done: this.state.leftWallIndex > 9 && this.state.rightWallIndex > 9,
                faceIndex: this.state.faceIndex === 1 ? 2 : 1,
                leftWallIndex: this.state.angle > 0 ? this.state.leftWallIndex + 1 : this.state.leftWallIndex,
                rightWallIndex: this.state.angle < 0 ? this.state.rightWallIndex + 1 : this.state.rightWallIndex,
            });
        }, 1000);
    }
    render() {
        const S = {
            main: {
                display: 'flex',
                textAlign: 'center',
                justifyContent: 'space-around',
            },
            background: {
                position: 'absolute',
                top: '0px',
                left: '0px',
                width: '100vw',
                height: '100vh',
                zIndex: -1,
                filter: 'blur(3px)',
                backgroundImage: 'url(images/wreck/wall.jpg)',
            },
            luis: {
                height: '730px',
                transform: `rotate(${this.state.angle}deg)`,
                transformOrigin: 'top center',
                transition: `transform 1s ease-in`
            },
            wall: {
                height: '100vh',
                width: '200px',
                border: 'none !important',
            },
            neon: {
                textShadow: `0 0 10px #fff,
                    0 0 20px #fff,
                    0 0 30px #fff,
                    0 0 40px #ff00de,
                    0 0 70px #ff00de,
                    0 0 80px #ff00de,
                    0 0 100pqdx #ff00de,
                    0 0 150px #ff00de`,
            },
            text: {
                fontFamily: 'Bangers',
                fontSize: '70px',
                position: 'absolute', 
                bottom: '0px', 
            },
        };
        return (
            <div
                style={S.main}
                >
                <div
                    style={S.background}
                    >
                </div>
                {
                    _.range(1, 10).map(n => (
                        <img
                            key={n}
                            style={{
                                ...S.wall,
                        ...{
                            backgroundImage: `url(images/wreck/wall${n}L.png)`,
                            display: n === this.state.leftWallIndex || (n === 9 && this.state.leftWallIndex > 9) ? 'block' : 'none',
                        },
                            } }
                        />
                    ) )
                }
                <img
                    style={S.luis}
                    src={`images/wreck/body${this.state.done ? 'Naked' : this.state.faceIndex}.png`}
                    />
                {
                    _.range(1, 10).map(n => (
                        <img
                            key={n}
                            style={{
                                ...S.wall,
                        ...{
                            backgroundImage: `url(images/wreck/wall${n}R.png)`,
                            display: n === this.state.rightWallIndex || (n === 9 && this.state.rightWallIndex > 9) ? 'block' : 'none',
                        }         
                            } }
                        />
                    ) )
                }
                { this.state.done && 
                    <p style={{ ...S.text, ...S.neon }} > 
                        El Cheval is now unleashed, embrace its power Luis !!!  
                    </p>
                }
            </div>
        );
}
}