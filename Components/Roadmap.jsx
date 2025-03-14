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
                  <td style={{ border: "1px solid white", padding: "10px" }}>Discovery and Preclinical research</td>
                  <td style={{ border: "1px solid white", padding: "10px", width: "300px" }}>identify potential drug candidates and test safety/efficacy-in labs and animal</td>
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
