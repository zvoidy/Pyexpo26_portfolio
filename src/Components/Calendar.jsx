
const Calendar = () => {
    return (
      <div className="container-fluid my-5">
        <div className="row">
          {/* <!-- First Calendar Column --> */}
          <div className="col-md-6 col-12">
            <div className="calendar-container">
              <h2>February 2025</h2>
              <div className="calendar" id="calendar-feb">
                {/* Weekday headers and day cells will be populated here */}
              </div>
            </div>
            <div className="calendar-legend">
              <h3>Legend:</h3>
              <div>
                <span
                  className="legend-box"
                  style={{ background: "#fff", border: "1px dotted black" }}
                ></span>{" "}
                Click dates to view details
              </div>
            </div>
          </div>
          {/* <!-- Second Calendar Column --> */}
          <div className="col-md-6 col-12">
            <div className="calendar-container">
              <h2>March 2025</h2>
              <div className="calendar" id="calendar-mar">
                {/* Weekday headers and day cells will be populated here */}
              </div>
            </div>
            <div className="calendar-legend">
              <h3>Legend:</h3>
              <div>
                <span
                  className="legend-box"
                  style={{ background: "#fff", border: "1px dotted black" }}
                ></span>{" "}
                Click dates to view details
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Calendar;