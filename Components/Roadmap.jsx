import React from "react";
import {
  ComposedChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Bar,
} from "recharts";

const utrxData = [
  { stage: "IND Submission", open: 2.5, close: 3.0, high: 3.5, low: 2.2 },
  { stage: "IND Approval", open: 5.0, close: 6.0, high: 7.0, low: 4.5 },
  { stage: "Phase 1 Commencement", open: 10.0, close: 12.0, high: 14.0, low: 9.0 },
  { stage: "Phase 1 Completion", open: 20.0, close: 25.0, high: 28.0, low: 18.0 },
  { stage: "Accelerated NDA Application", open: 40.0, close: 50.0, high: 55.0, low: 36.0 },
  { stage: "Sales to Patients", open: 80.0, close: 100.0, high: 110.0, low: 72.0 },
];



const Roadmap = () => {
  return (
    <>
      <section id="roadmap" className="roadmap pt-lg-80 pb-md-100 pt-145 pos-rel pb-200">
        <div className="container">
          <div className="sec-title text-center mb-60">
            <h5 className="sec-title__subtitle">Road map</h5>
            <h2 className="sec-title__title">Paths towards the Clinic and Commercialization Roadmap</h2>
          </div>
          <div className="roadmap__wrap ul_li_between">
            {[
              {
                icon: "assets/img/icon/rm_01.svg",
                title: "Discovery Phase",
                details: ["Discovery Made", "Early-stage research", "Validation to establish", "proof of feasibility"],
                time: "Q1 2021",
              },
              {
                icon: "assets/img/icon/rm_02.svg",
                title: "Proof of Concept",
                details: ["Proof of Concept", "Studies Confirmed", "Pre-IND Filed to the FDA"],
                time: "Q1 2022-2023",
              },
              {
                icon: "assets/img/icon/rm_03.svg",
                title: "Validation Phase",
                details: ["Validation in", "Pan Cancers and", "IND Enablement"],
                time: "Q1 2024",
              },
              {
                icon: "assets/img/icon/rm_04.svg",
                title: "2025 Milestones",
                details: ["FDA Response to Resubmission", "GMP Manufacturing", "IND Enablement", "Blockchain Revolution"],
                time: "Q1-Q4 2025",
              },
              {
                icon: "assets/img/icon/rm_01.svg",
                title: "Breakthrough",
                details: ["Strategic Liquidity Event (Target IPO)", "AI-Powered Insights", "Additional Pipeline Commercialization"],
                time: "Q1 2026-2027",
              },
            ].map((item, index) => (
              <div className="roadmap__item" key={index}>
                <div className="roadmap__head ul_li">
                  <div className="icon">
                    <img src={item.icon} alt="" />
                  </div>
                  <h3>{item.title}</h3>
                </div>
                <ul className="roadmap__info list-unstyled">
                  {item.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
                <span className="number">{item.time}</span>
              </div>
            ))}
            <div className="roadmap__shape" style={{ marginTop: "-281px" }}>
              <img src="assets/img/shape/rm_shape.png" alt="" />
            </div>
            <div className="roadmap__year">
              <h3 className="year year--start" style={{ marginTop: "-300px" }}>2021</h3>
              <h3 className="year year--end" style={{ marginTop: "-300px" }}>2027</h3>
            </div>
          </div>
        </div>
        <div className="roadmap__sec-shape">
          <div className="shape shape--1">
            <img src="assets/img/shape/s_shape1.png" alt="" />
          </div>
          <div className="shape shape--2">
            <img src="assets/img/shape/s_shape2.png" alt="" />
          </div>
        </div>
      </section>

      {/* UTRX Token Growth Chart Section */}
      <section id="utrx-chart" className="chart-section pt-100 pb-100 text-center">
        <div className="container">
          <h1 className="chart-title" style={{ marginBottom: "20px" }}>
            UTRx Token Value Growth By Stage Of Development
          </h1>
          <div style={{ width: "100%", height: 400 }}>
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={utrxData} margin={{ top: 20, right: 30, left: 20, bottom: 10 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                <XAxis dataKey="stage" tick={{ fill: "#fff" }} />
                <YAxis tick={{ fill: "#fff" }} tickFormatter={(value) => `$${value}`} />
                <Tooltip
                contentStyle={{ backgroundColor: "#222", color: "#fff" }}
                formatter={(value, name) => {
                const labelMap = { high: "High", low: "Low", open: "Open" };
                 return [`$${value}`, labelMap[name] || name];
                  }}
                />
                <Line type="monotone" dataKey="high" stroke="white" strokeWidth={2} dot={false} />
                <Line type="monotone" dataKey="low" stroke="white" strokeWidth={2} dot={false} />
                <Bar dataKey="open" fill="#28a745" barSize={20} />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>



        {/* Milestone Table Section */}
      <section id="milestone-table" className="table-section pt-100 pb-100 text-center">
        <div className="container">
          <h1 className="table-title" style={{ marginBottom: "20px", color: "#fff" }}>
            Project Milestones & Cost Estimates
          </h1>
          <div className="table-container" style={{ overflowX: "auto", maxWidth: "100%" }}>
            <table style={{ width: "100%", minWidth: "600px", borderCollapse: "collapse", color: "#fff", border: "1px solid white" }}>
              <thead>
                <tr>
                  <th style={{ border: "1px solid white", padding: "10px" }}>Stage</th>
                  <th style={{ border: "1px solid white", padding: "10px", width: "300px" }}>Objective</th>
                  <th style={{ border: "1px solid white", padding: "10px" }}>Duration</th>
                  <th style={{ border: "1px solid white", padding: "10px" }}>Cost Estimate</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ border: "1px solid white", padding: "10px" }}>Discovery Phase</td>
                  <td style={{ border: "1px solid white", padding: "10px", width: "300px" }}>Early-stage research and validation</td>
                  <td style={{ border: "1px solid white", padding: "10px" }}>Q1 2021</td>
                  <td style={{ border: "1px solid white", padding: "10px" }}>$5M</td>
                </tr>
                <tr>
                  <td style={{ border: "1px solid white", padding: "10px" }}>Proof of Concept</td>
                  <td style={{ border: "1px solid white", padding: "10px", width: "300px" }}>Pre-IND studies and regulatory filing</td>
                  <td style={{ border: "1px solid white", padding: "10px" }}>Q1 2022-2023</td>
                  <td style={{ border: "1px solid white", padding: "10px" }}>$10M</td>
                </tr>
                <tr>
                  <td style={{ border: "1px solid white", padding: "10px" }}>Validation Phase</td>
                  <td style={{ border: "1px solid white", padding: "10px", width: "300px" }}>IND Enablement & clinical validation</td>
                  <td style={{ border: "1px solid white", padding: "10px" }}>Q1 2024</td>
                  <td style={{ border: "1px solid white", padding: "10px" }}>$20M</td>
                </tr>
                <tr>
                  <td style={{ border: "1px solid white", padding: "10px" }}>2025 Milestones</td>
                  <td style={{ border: "1px solid white", padding: "10px", width: "300px" }}>FDA Response & GMP Manufacturing</td>
                  <td style={{ border: "1px solid white", padding: "10px" }}>Q1-Q4 2025</td>
                  <td style={{ border: "1px solid white", padding: "10px" }}>$50M</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default Roadmap;