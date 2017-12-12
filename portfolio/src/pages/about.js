import React, { Component } from 'react';
import Logo from './../components/logovp-blu-300dpi.png';

class AboutPage extends Component {
    render() {
        return (

            <div className="container section">
                <div className="row">
                    <h2 className="left-align">About</h2>


                    <div className="col s12">
                        <p className="left-align flow-text">
                            Passionate since the youngest age by computer science, my school curriculum allowed me to broaden my skills in new technologies. Carrier and transported by innovation, my personality offers me a curiosity of learning.
                        </p>
                        <a className="waves-effect red waves-light btn-large" href="https://goo.gl/MdZQru" target="_blank"><i class="material-icons right">file_download</i> Download CV</a>
                    </div>
                </div>

                <hr/>
                <h2 className="left-align">Related Minds</h2>
                <div className="">
                    <div className="col s12 m4">
                        <div className="app-card white z-depth-1 hoverable" id="stevejobs">
                           <span className="white-text bold">STEVE JOBS</span>
                        </div>
                    </div>
                    <div className="col s12 m4">
                        <div className="app-card white z-depth-1 hoverable" id="Kanye">
                            <span className="white-text bold">KANYE WEST</span>
                        </div>
                    </div>
                    <div className="col s12 m4">
                        <div className="app-card white z-depth-1 hoverable" id="Elon">
                            <span className="white-text bold">ELON MUSC</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutPage;
