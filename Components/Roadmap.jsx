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
  { stage: "FDA Submission & Approval", open: 0.8, close: 1.2, high: 1.5, low: 0.5 },
  { stage: "Ico Initial Launch", open: 2.5, close: 3.0, high: 3.5, low: 2.2 },
  { stage: "GMP Manufacturing", open: 4.5, close: 6.0, high: 7.0, low: 4.0 },
  { stage: "IND Enablement", open: 8.0, close: 10.0, high: 12.0, low: 7.0 },
  { stage: "Phase I Clinical Trials", open: 14.0, close: 18.0, high: 20.0, low: 12.0 },
  { stage: "Ico Exchange Launch", open: 25.0, close: 30.0, high: 35.0, low: 22.0 },
  { stage: "Phase II", open: 40.0, close: 50.0, high: 55.0, low: 36.0 },
  { stage: "Phase III", open: 65.0, close: 80.0, high: 90.0, low: 55.0 },
  { stage: "Manufacturing and Marketing", open: 120.0, close: 150.0, high: 170.0, low: 100.0 },
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
          
          {/* Improved X-Axis for long labels */}
          <XAxis
  dataKey="stage"
  tick={{
    fill: "#fff",
    fontSize: "12px",
    overflow: "visible", // Ensure text isn't clipped
  }}
  angle={-34} // More tilt for better visibility
  textAnchor="end"
  interval={0} // Show all labels
  dx={-10} // Further adjust horizontal position
  dy={20} // Push labels even lower
  height={110} // More height for full visibility
/>

          <YAxis tick={{ fill: "#fff" }} tickFormatter={(value) => `$${value}`} />
          <Tooltip
            contentStyle={{ backgroundColor: "#222", color: "#fff" }}
            formatter={(value, name) => {
              const labelMap = { high: "High", low: "Low", open: "Open", close: "Close" };
              return [`$${value}`, labelMap[name] || name];
            }}
          />
          {/* Lines for high, low, and close values */}
          <Line type="monotone" dataKey="high" stroke="#ffcc00" strokeWidth={2} dot={false} />
          <Line type="monotone" dataKey="low" stroke="#ff4444" strokeWidth={2} dot={false} />
          <Line type="monotone" dataKey="close" stroke="#00bfff" strokeWidth={2} dot={false} />
          {/* Bar for open value */}
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
            Project Milestones, Duration & Cost Estimates
          </h1>
          <div className="table-container" style={{ overflowX: "auto", maxWidth: "100%" }}>
            <table style={{ width: "100%", minWidth: "600px", borderCollapse: "collapse", color: "#fff", border: "1px solid white" }}>
              <thead>
                <tr>
                  <th style={{ border: "1px solid white", padding: "10px" }}>Stage</th>
                  <th style={{ border: "1px solid white", padding: "10px", width: "500px" }}>Objective</th>
                  <th style={{ border: "1px solid white", padding: "10px" }}>Duration</th>
                  <th style={{ border: "1px solid white", padding: "10px" }}>Cost Estimate</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ border: "1px solid white", padding: "10px" }}>FDA Submission & Approval</td>
                  <td style={{ border: "1px solid white", padding: "10px", width: "300px" }}>FDA and OUS(outside of USA) IND submission already achieved</td>
                  <td style={{ border: "1px solid white", padding: "10px" }}>4 years</td>
                  <td style={{ border: "1px solid white", padding: "10px" }}>$5M</td>
                </tr>
                <tr>
                  <td style={{ border: "1px solid white", padding: "10px" }}>Ico Initial Launch Build</td>
                  <td style={{ border: "1px solid white", padding: "10px", width: "300px" }}>Raise Money For GMP Manufacturing & Phase 1 Trial</td>
                  <td style={{ border: "1px solid white", padding: "10px" }}>1 - 2 months</td>
                  <td style={{ border: "1px solid white", padding: "10px" }}>$100 - 200k</td>
                </tr>
                <tr>
                  <td style={{ border: "1px solid white", padding: "10px" }}>GMP Manufacturing</td>
                  <td style={{ border: "1px solid white", padding: "10px", width: "300px" }}>Preparation for manufacture of samples for clinical trial  (21 patiient trial) 200 000 mg (600 Litres)</td>
                  <td style={{ border: "1px solid white", padding: "10px" }}>8 - 10 months</td>
                  <td style={{ border: "1px solid white", padding: "10px" }}>$3.5m - 4.5m</td>
                </tr>
                <tr>
                  <td style={{ border: "1px solid white", padding: "10px" }}>IND Enablement</td>
                  <td style={{ border: "1px solid white", padding: "10px", width: "300px" }}>Process of manufacturing, extended data and results</td>
                  <td style={{ border: "1px solid white", padding: "10px" }}>6 - 12 months</td>
                  <td style={{ border: "1px solid white", padding: "10px" }}>$200 - 400k</td>
                </tr>
                <tr>
                  <td style={{ border: "1px solid white", padding: "10px" }}>Phase I Clinical Trials</td>
                  <td style={{ border: "1px solid white", padding: "10px", width: "300px" }}>Approval of Phase 1 & execution of clinical trial phase 1 - preliminary bio marker endpoint with option for accelerated NDA</td>
                  <td style={{ border: "1px solid white", padding: "10px" }}>12 - 16 months</td>
                  <td style={{ border: "1px solid white", padding: "10px" }}>$6m - 8m</td>
                </tr>
                <tr>
                  <td style={{ border: "1px solid white", padding: "10px" }}>Ico Exchange Launch</td>
                  <td style={{ border: "1px solid white", padding: "10px", width: "300px" }}>Raise Money For Phase II till Market & Phase manufacture</td>
                  <td style={{ border: "1px solid white", padding: "10px" }}>2 - 4 months</td>
                  <td style={{ border: "1px solid white", padding: "10px" }}>$400 - 450k</td>
                </tr>
                <tr>
                  <td style={{ border: "1px solid white", padding: "10px" }}>Phase II</td>
                  <td style={{ border: "1px solid white", padding: "10px", width: "300px" }}>Prove efficacy and safety of the drug on 50 - 100 patients at a minimum</td>
                  <td style={{ border: "1px solid white", padding: "10px" }}>24 - 48 months</td>
                  <td style={{ border: "1px solid white", padding: "10px" }}>20 - 50m</td>
                </tr>
                <tr>
                  <td style={{ border: "1px solid white", padding: "10px" }}>Phase III</td>
                  <td style={{ border: "1px solid white", padding: "10px", width: "300px" }}>Validation of drug superiority, expansion of the label for other applications and combine capability</td>
                  <td style={{ border: "1px solid white", padding: "10px" }}>60- 72 months</td>
                  <td style={{ border: "1px solid white", padding: "10px" }}>$200 - 300m</td>
                </tr>
                <tr>
                  <td style={{ border: "1px solid white", padding: "10px" }}>Manufacturing and Marketing</td>
                  <td style={{ border: "1px solid white", padding: "10px", width: "300px" }}>Scale up production and launch drug on market</td>
                  <td style={{ border: "1px solid white", padding: "10px" }}>6 - 12 months post-approval</td>
                  <td style={{ border: "1px solid white", padding: "10px" }}>GMP cost x 5 + marketing budget (TNBC)</td>
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