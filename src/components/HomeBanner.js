import React from 'react';

function Banner(){
    return(
        
        <section className="page-section clearfix">
            <div className="container">
                <div className="intro">
                    <img className="intro-img img-fluid mb-3 mb-lg-0 rounded" src="assets/img/intro.jpg"
                    alt="..." />
                    <div className="intro-text left-0 text-center bg-faded p-5 rounded">
                        <h2 className="section-heading mb-4">
                            <span className="section-heading-upper">Fresh and delicious Food </span>
                            <span className="section-heading-lower">Worth Eating</span>
                        </h2>
                        <p className="mb-3">
                       Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                       .
                       It passages, and more recently with desktop publishing software like Aldus PageMaker
                        including versions of Lorem Ipsum.</p>
                        <div className="intro-button mx-auto"><a className="btn btn-primary btn-xl" href="#!">Visit Us Today!</a></div>
                    </div>
                </div>
            </div>
        </section>

        );
}
export default Banner;