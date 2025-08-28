
import React, { useEffect, useState } from "react";
import Calendar from "../Components/Calendar";

const Counter = ({ end = 0, duration = 1500, className = "" }) => {
    const [value, setValue] = useState(0);

    useEffect(() => {
        let start = null;
        const from = 0;
        const to = Number(end) || 0;
        const step = (timestamp) => {
            if (!start) start = timestamp;
            const progress = Math.min((timestamp - start) / duration, 1);
            const current = Math.floor(from + (to - from) * progress);
            setValue(current);
            if (progress < 1) {
                window.requestAnimationFrame(step);
            } else {
                setValue(to);
            }
        };
        const raf = window.requestAnimationFrame(step);
        return () => window.cancelAnimationFrame(raf);
    }, [end, duration]);

    return <h1 className={className}>{value}</h1>;
};

const Event = () => {
    return (
        <>
            <div className="container-fluid  py-5 wow fadeIn" data-wow-delay="0.1s">
                <div className="text-center mx-auto wow fadeInUp " data-wow-delay="0.1s" style={{ maxWidth: '500px' }}>
                    <h1 className="event-main-title section-header" title="PYEXPO25">EVENT</h1>
                </div>
            </div>
            <div className="text-center mx-auto pb-4 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '1000px' }}>
                <h1 className="poster-header">Pyexpo'25 Poster</h1>
                <div className="intro-poster" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '12px', overflow: 'hidden' }}>
                    <img className="invite-poster" src="/img/Invite/Pyexpoinvite.webp" alt="Pyexpo'25 Poster" />
                </div>
            </div>
            
            <div className="container-xxl py-5 event-stats">
                <div className="container">
                    <div className="align-items-center">
                        <div className="rounded overflow-hidden">
                            <div className="row g-0">
                                <div className="col-sm-6 " data-wow-delay="0.1s">
                                    <div className="text-center bg-primary py-5 px-4">
                                        <img className="img-fluid mb-4" src="/img/stats/experience.webp" alt="Image PYEXPO" />
                                        <Counter end={10} className="display-6 counter3 text-white" />
                                        <span className="fs-5 fw-semi-bold text-secondary">Special prizes</span>
                                    </div>
                                </div>
                                <div className="col-sm-6 " data-wow-delay="0.3s">
                                    <div className="text-center bg-secondary py-5 px-4">
                                        <img className="img-fluid mb-4" src="/img/stats/award.webp" alt="Image PYEXPO" />
                                        <Counter end={3} className="display-6" />
                                        <span className="fs-5 fw-semi-bold text-primary">Top prizes</span>
                                    </div>
                                </div>
                            </div>
                            <div className="row g-0">
                                <div className="col-sm-6" data-wow-delay="0.5s">
                                    <div className="text-center bg-secondary py-5 px-4">
                                        <img className="img-fluid mb-4" src="/img/stats/animal.webp" alt="Image PYEXPO" />
                                        <Counter end={110} className="display-6 counter1" />
                                        <span className="fs-5 fw-semi-bold text-primary">Teams</span>
                                    </div>
                                </div>
                                <div className="col-sm-6" data-wow-delay="0.7s">
                                    <div className="text-center bg-primary py-5 px-4">
                                        <img className="img-fluid mb-4" src="/img/stats/client.webp" alt="Image PYEXPO" />
                                        <Counter end={690} className="display-6 counter2 text-white" />
                                        <span className="fs-5 fw-semi-bold text-secondary">Participants</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <Calendar /> */}

        </>
    );
};

export default Event;