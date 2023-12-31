import React, { Fragment } from 'react'
import MetaData from '../layout/metaData';

const Dashboard = () => {
  return (
    <Fragment>
    {/* <MetaData title={"Dashbord"}/> */}
    <div id="main-content">
      <div className="container-fluid">
        <div className="block-header">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <h2>MyDashboard</h2>
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="index.html">
                    <i className="fa fa-dashboard" />
                  </a>
                </li>
                <li className="breadcrumb-item">Dashboard</li>
                {/* <li class="breadcrumb-item active">Analytical</li> */}
              </ul>
            </div>
          </div>
        </div>
        <div className="row clearfix row-deck">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="card number-chart">
              <div className="body">
                <span className="text-uppercase">ALL PROPERTIES</span>
                <h4 className="mb-0 mt-2">600</h4>
                <small className="text-muted">Analytics for last week</small>
              </div>
              <div
                className="sparkline"
                data-type="line"
                data-spot-radius={0}
                data-offset={90}
                data-width="100%"
                data-height="50px"
                data-line-width={1}
                data-line-color="#39afa6"
                data-fill-color="#73cec7"
              >
                4,1,5,2,7,3,4
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="card number-chart">
              <div className="body">
                <span className="text-uppercase">PROPERTIES FOR SALE</span>
                <h4 className="mb-0 mt-2">450</h4>
                <small className="text-muted">Analytics for last week</small>
              </div>
              <div
                className="sparkline"
                data-type="line"
                data-spot-radius={0}
                data-offset={90}
                data-width="100%"
                data-height="50px"
                data-line-width={1}
                data-line-color="#ffa901"
                data-fill-color="#efc26b"
              >
                1,4,2,3,6,2
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="card number-chart">
              <div className="body">
                <span className="text-uppercase">PROPERTIES SOLD OUT</span>
                <h4 className="mb-0 mt-2">150</h4>
                <small className="text-muted">Analytics for last week</small>
              </div>
              <div
                className="sparkline"
                data-type="line"
                data-spot-radius={0}
                data-offset={90}
                data-width="100%"
                data-height="50px"
                data-line-width={1}
                data-line-color="#38c172"
                data-fill-color="#84d4a6"
              >
                1,4,2,3,1,5
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="card number-chart">
              <div className="body">
                <span className="text-uppercase">Sold Amounts</span>
                <h4 className="mb-0 mt-2">10K</h4>
                <small className="text-muted">Analytics for last week</small>
              </div>
              <div
                className="sparkline"
                data-type="line"
                data-spot-radius={0}
                data-offset={90}
                data-width="100%"
                data-height="50px"
                data-line-width={1}
                data-line-color="#226fd8"
                data-fill-color="#7ea7de"
              >
                1,3,5,1,4,2
              </div>
            </div>
          </div>
        </div>
        <div className="row clearfix row-deck">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="card number-chart">
              <div className="body">
                <span className="text-uppercase">Lead Analytics</span>
                <h4 className="mb-0 mt-2">600</h4>
                <small className="text-muted">
                  Analytics for Weekly and Monthly Leads Data
                </small>
              </div>
              <div
                className="sparkline"
                data-type="line"
                data-spot-radius={0}
                data-offset={90}
                data-width="100%"
                data-height="50px"
                data-line-width={1}
                data-line-color="#39afa6"
                data-fill-color="#73cef7"
              >
                4,1,5,2,7,3,4
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="card number-chart">
              <div className="body">
                <span className="text-uppercase">Advance payments</span>
                <h4 className="mb-0 mt-2">450</h4>
                <small className="text-muted">
                  Analytics for Paid Advance and Pending Registration
                </small>
              </div>
              <div
                className="sparkline"
                data-type="line"
                data-spot-radius={0}
                data-offset={90}
                data-width="100%"
                data-height="50px"
                data-line-width={1}
                data-line-color="#A52A2A"
                data-fill-color="#A52A2A"
              >
                1,4,2,3,6,2
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="card number-chart">
              <div className="body">
                <span className="text-uppercase">Registration</span>
                <h4 className="mb-0 mt-2">150</h4>
                <small className="text-muted">
                  Analytics for Monthly Registration Data
                </small>
              </div>
              <div
                className="sparkline"
                data-type="line"
                data-spot-radius={0}
                data-offset={90}
                data-width="100%"
                data-height="50px"
                data-line-width={1}
                data-line-color="#FFC0CB"
                data-fill-color="#FFC0CB"
              >
                1,4,2,3,1,5
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="card number-chart">
              <div className="body">
                <span className="text-uppercase">Conversions</span>
                <h4 className="mb-0 mt-2">10K</h4>
                <small className="text-muted">
                  LeadConversion to Customer from which marketing source
                </small>
              </div>
              <div
                className="sparkline"
                data-type="line"
                data-spot-radius={0}
                data-offset={90}
                data-width="100%"
                data-height="50px"
                data-line-width={1}
                data-line-color="#C0C0C0"
                data-fill-color="#C0C0C0"
              >
                1,3,5,1,4,2
              </div>
            </div>
          </div>
        </div>
        {/* <div class="row clearfix row-deck">
          <div class="col-xl-3 col-lg-4 col-md-6">
              <div class="row clearfix">
                  <div class="col-lg-12 col-md-12">
                      <div class="card top_widget">
                          <div id="top_counter3" class="carousel slide" data-ride="carousel" data-interval="2300">
                              <div class="carousel-inner">
                                  <div class="carousel-item active">
                                      <div class="body">
                                          <div class="icon"><i class="fa fa-eye"></i></div>
                                          <div class="content">
                                              <div class="text mb-2 text-uppercase">Expense</div>
                                              <h4 class="number mb-0">32k <span class="font-12 text-muted"><i class="fa fa-level-up"></i> 13%</span></h4>
                                              <small class="text-muted">Analytics for last week</small>
                                          </div>
                                      </div>
                                  </div>
                                  <div class="carousel-item">
                                      <div class="body">
                                          <div class="icon"><i class="fa fa-eye"></i></div>
                                          <div class="content">
                                              <div class="text mb-2 text-uppercase">Income</div>
                                              <h4 class="number mb-0">351k <span class="font-12 text-muted"><i class="fa fa-level-up"></i> 8.2%</span></h4>
                                              <small class="text-muted">Analytics for last week</small>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="col-lg-12 col-md-12">
                      <div class="card top_widget">
                          <div id="top_counter1" class="carousel slide" data-ride="carousel" data-interval="2500">
                              <div class="carousel-inner">
                                  <div class="carousel-item active">
                                      <div class="body">
                                          <div class="icon"><i class="fa fa-user"></i></div>
                                          <div class="content">
                                              <div class="text mb-2 text-uppercase">Total Agent</div>
                                              <h4 class="number mb-0">3,251 <span class="font-12 text-muted"><i class="fa fa-level-up"></i> 13%</span></h4>
                                          </div>
                                      </div>
                                  </div>
                                  <div class="carousel-item">
                                      <div class="body">
                                          <div class="icon"><i class="fa fa-user"></i></div>
                                          <div class="content">
                                              <div class="text mb-2 text-uppercase">CORPORATE AGENTS</div>
                                              <h4 class="number mb-0">351 <span class="font-12 text-muted"><i class="fa fa-level-up"></i> 8.2%</span></h4>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="col-lg-12 col-md-12">
                      <div class="card top_widget">
                          <div id="top_counter4" class="carousel slide" data-ride="carousel" data-interval="2300">
                              <div class="carousel-inner">
                                  <div class="carousel-item active">
                                      <div class="body">
                                          <div class="icon"><i class="fa fa-thumbs-o-up"></i></div>
                                          <div class="content">
                                              <div class="text mb-2 text-uppercase">Our Center</div>
                                              <h4 class="number mb-0">780</h4>
                                          </div>
                                      </div>
                                  </div>
                                  <div class="carousel-item">
                                      <div class="body">
                                          <div class="icon"><i class="fa fa-smile-o"></i></div>
                                          <div class="content">
                                              <div class="text mb-2 text-uppercase">Smiley Faces</div>
                                              <h4 class="number mb-0">2,351</h4>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div class="col-xl-3 col-lg-4 col-md-6">
              <div class="card">
                  <div class="header">
                      <h2>Properties Analytics</h2>
                      <ul class="header-dropdown">
                          <li class="dropdown">
                              <a href="javascript:void(0);" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"></a>
                              <ul class="dropdown-menu dropdown-menu-right">
                                  <li><a href="javascript:void(0);">Action</a></li>
                                  <li><a href="javascript:void(0);">Another Action</a></li>
                                  <li><a href="javascript:void(0);">Something else</a></li>
                              </ul>
                          </li>
                      </ul>
                  </div>
                  <div class="body">
                      <div id="Properties-Analytics" style="height: 17rem"></div>
                  </div>
              </div>
          </div>
          <div class="col-xl-6 col-lg-4 col-md-12">
              <div class="card">
                  <div class="header">
                      <h2>Properties Stats</h2>
                      <ul class="header-dropdown">
                          <li><a class="tab_btn" href="javascript:void(0);" title="Weekly">W</a></li>
                          <li><a class="tab_btn" href="javascript:void(0);" title="Monthly">M</a></li>
                          <li><a class="tab_btn active" href="javascript:void(0);" title="Yearly">Y</a></li>
                          <li class="dropdown">
                              <a href="javascript:void(0);" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"></a>
                              <ul class="dropdown-menu dropdown-menu-right">
                                  <li><a href="javascript:void(0);">Action</a></li>
                                  <li><a href="javascript:void(0);">Another Action</a></li>
                                  <li><a href="javascript:void(0);">Something else</a></li>
                              </ul>
                          </li>
                      </ul>
                  </div>
                  <div class="body">
                      <div id="chart-bar-rotated" style="height: 17rem"></div>
                  </div>
              </div>
          </div>
      </div> */}
        <div className="row clearfix row-deck">
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="card">
              <div className="header">
                <h2>Sold Ratio</h2>
              </div>
              {/* <div class="body">
                      <div id="Gender-Ratio" style="height: 14rem"></div>
                      <rect class=" c3-event-rect c3-event-rect-0" x="0.625" y="0" width="172.75" height="197"></rect>
                  </div> */}
              <div className="body">
                <div
                  id="Gender-Ratio"
                  style={{ height: "14rem", maxHeight: 224, position: "relative" }}
                  className="c3"
                >
                  <svg width="172.75" height={224} style={{ overflow: "hidden" }}>
                    <defs>
                      <clipPath id="c3-1687342507787-clip">
                        <rect width="172.75" height={197} />
                      </clipPath>
                      <clipPath id="c3-1687342507787-clip-xaxis">
                        <rect x={-31} y={-20} width="234.75" height={43} />
                      </clipPath>
                      <clipPath id="c3-1687342507787-clip-yaxis">
                        <rect x={-29} y={-4} width={20} height={221} />
                      </clipPath>
                      <clipPath id="c3-1687342507787-clip-grid">
                        <rect width="172.75" height={197} />
                      </clipPath>
                      <clipPath id="c3-1687342507787-clip-subchart">
                        <rect width="172.75" />
                      </clipPath>
                    </defs>
                    <g transform="translate(0.5,4.5)">
                      <text
                        className="c3-text c3-empty"
                        textAnchor="middle"
                        dominantBaseline="middle"
                        x="86.375"
                        y="98.5"
                        style={{ opacity: 0 }}
                      />
                      <rect
                        className="c3-zoom-rect"
                        width="172.75"
                        height={197}
                        style={{ opacity: 0 }}
                      />
                      <g
                        clipPath="url(https://wrraptheme.com/templates/iconic/dist/realestate/index.html#c3-1687342507787-clip)"
                        className="c3-regions"
                        style={{ visibility: "hidden" }}
                      />
                      <g
                        clipPath="url(https://wrraptheme.com/templates/iconic/dist/realestate/index.html#c3-1687342507787-clip-grid)"
                        className="c3-grid"
                        style={{ visibility: "hidden" }}
                      >
                        <g className="c3-xgrid-focus">
                          <line
                            className="c3-xgrid-focus"
                            x1={-10}
                            x2={-10}
                            y1={0}
                            y2={197}
                            style={{ visibility: "hidden" }}
                          />
                        </g>
                      </g>
                      <g
                        clipPath="url(https://wrraptheme.com/templates/iconic/dist/realestate/index.html#c3-1687342507787-clip)"
                        className="c3-chart"
                      >
                        <g
                          className="c3-event-rects c3-event-rects-single"
                          style={{ fillOpacity: 0 }}
                        >
                          <rect
                            className=" c3-event-rect c3-event-rect-0"
                            x="0.625"
                            y={0}
                            width="172.75"
                            height={197}
                          />
                        </g>
                        <g className="c3-chart-bars">
                          <g
                            className="c3-chart-bar c3-target c3-target-data1"
                            style={{ pointerEvents: "none" }}
                          >
                            <g
                              className=" c3-shapes c3-shapes-data1 c3-bars c3-bars-data1"
                              style={{ cursor: "pointer" }}
                            />
                          </g>
                          <g
                            className="c3-chart-bar c3-target c3-target-data2"
                            style={{ pointerEvents: "none" }}
                          >
                            <g
                              className=" c3-shapes c3-shapes-data2 c3-bars c3-bars-data2"
                              style={{ cursor: "pointer" }}
                            />
                          </g>
                        </g>
                        <g className="c3-chart-lines">
                          <g
                            className="c3-chart-line c3-target c3-target-data1"
                            style={{ opacity: 1, pointerEvents: "none" }}
                          >
                            <g className=" c3-shapes c3-shapes-data1 c3-lines c3-lines-data1" />
                            <g className=" c3-shapes c3-shapes-data1 c3-areas c3-areas-data1" />
                            <g className=" c3-selected-circles c3-selected-circles-data1" />
                            <g
                              className=" c3-shapes c3-shapes-data1 c3-circles c3-circles-data1"
                              style={{ cursor: "pointer" }}
                            />
                          </g>
                          <g
                            className="c3-chart-line c3-target c3-target-data2"
                            style={{ opacity: 1, pointerEvents: "none" }}
                          >
                            <g className=" c3-shapes c3-shapes-data2 c3-lines c3-lines-data2" />
                            <g className=" c3-shapes c3-shapes-data2 c3-areas c3-areas-data2" />
                            <g className=" c3-selected-circles c3-selected-circles-data2" />
                            <g
                              className=" c3-shapes c3-shapes-data2 c3-circles c3-circles-data2"
                              style={{ cursor: "pointer" }}
                            />
                          </g>
                        </g>
                        <g
                          className="c3-chart-arcs"
                          transform="translate(86.375,93.5)"
                        >
                          <text
                            className="c3-chart-arcs-title"
                            style={{ textAnchor: "middle", opacity: 1 }}
                          />
                          <g className="c3-chart-arc c3-target c3-target-data1">
                            <g className=" c3-shapes c3-shapes-data1 c3-arcs c3-arcs-data1">
                              <path
                                className=" c3-shape c3-shape c3-arc c3-arc-data1"
                                transform=""
                                style={{
                                  fill: "rgb(121, 84, 173)",
                                  cursor: "pointer"
                                }}
                                d="M5.024496195626749e-15,-82.05624999999999A82.05624999999999,82.05624999999999 0 1,1 -81.40921195973611,10.28437514666089L-48.84552717584167,6.170625087996534A49.23374999999999,49.23374999999999 0 1,0 3.0146977173760497e-15,-49.23374999999999Z"
                              />
                            </g>
                            <text
                              dy=".35em"
                              className=""
                              transform="translate(45.31878070570661,39.95387965338114)"
                              style={{
                                opacity: 1,
                                textAnchor: "middle",
                                pointerEvents: "none"
                              }}
                            >
                              73.0%
                            </text>
                          </g>
                          <g className="c3-chart-arc c3-target c3-target-data2">
                            <g className=" c3-shapes c3-shapes-data2 c3-arcs c3-arcs-data2">
                              <path
                                className=" c3-shape c3-shape c3-arc c3-arc-data2"
                                transform=""
                                style={{
                                  fill: "rgb(231, 104, 134)",
                                  cursor: "pointer"
                                }}
                                d="M-81.40921195973611,10.28437514666089A82.05624999999999,82.05624999999999 0 0,1 5.780710186463815e-14,-82.05624999999999L3.468426111878288e-14,-49.23374999999999A49.23374999999999,49.23374999999999 0 0,0 -48.84552717584167,6.170625087996534Z"
                              />
                            </g>
                            <text
                              dy=".35em"
                              className=""
                              transform="translate(-45.31878070570657,-39.95387965338117)"
                              style={{
                                opacity: 1,
                                textAnchor: "middle",
                                pointerEvents: "none"
                              }}
                            >
                              27.0%
                            </text>
                          </g>
                        </g>
                        <g className="c3-chart-texts">
                          <g
                            className="c3-chart-text c3-target c3-target-data1"
                            style={{ opacity: 1, pointerEvents: "none" }}
                          >
                            <g className=" c3-texts c3-texts-data1" />
                          </g>
                          <g
                            className="c3-chart-text c3-target c3-target-data2"
                            style={{ opacity: 1, pointerEvents: "none" }}
                          >
                            <g className=" c3-texts c3-texts-data2" />
                          </g>
                        </g>
                      </g>
                      <g
                        clipPath="url(https://wrraptheme.com/templates/iconic/dist/realestate/index.html#c3-1687342507787-clip-grid)"
                        className="c3-grid c3-grid-lines"
                      >
                        <g className="c3-xgrid-lines" />
                        <g className="c3-ygrid-lines" />
                      </g>
                      <g
                        className="c3-axis c3-axis-x"
                        clipPath="url(https://wrraptheme.com/templates/iconic/dist/realestate/index.html#c3-1687342507787-clip-xaxis)"
                        transform="translate(0,197)"
                        style={{ visibility: "visible", opacity: 0 }}
                      >
                        <text
                          className="c3-axis-x-label"
                          transform=""
                          style={{ textAnchor: "end" }}
                          x="172.75"
                          dx="-0.5em"
                          dy="-0.5em"
                        />
                        <g
                          className="tick"
                          transform="translate(87, 0)"
                          style={{ opacity: 1 }}
                        >
                          <line x1={0} x2={0} y2={6} />
                          <text
                            x={0}
                            y={9}
                            transform=""
                            style={{ textAnchor: "middle", display: "block" }}
                          >
                            <tspan x={0} dy=".71em" dx={0}>
                              0
                            </tspan>
                          </text>
                        </g>
                        <path className="domain" d="M0,6V0H172.75V6" />
                      </g>
                      <g
                        className="c3-axis c3-axis-y"
                        clipPath="url(https://wrraptheme.com/templates/iconic/dist/realestate/index.html#c3-1687342507787-clip-yaxis)"
                        transform="translate(0,0)"
                        style={{ visibility: "visible", opacity: 0 }}
                      >
                        <text
                          className="c3-axis-y-label"
                          transform="rotate(-90)"
                          style={{ textAnchor: "end" }}
                          x={0}
                          dx="-0.5em"
                          dy="1.2em"
                        />
                        <g
                          className="tick"
                          transform="translate(0,188)"
                          style={{ opacity: 1 }}
                        >
                          <line x2={-6} />
                          <text x={-9} y={0} style={{ textAnchor: "end" }}>
                            <tspan x={-9} dy={3}>
                              25
                            </tspan>
                          </text>
                        </g>
                        <g
                          className="tick"
                          transform="translate(0,171)"
                          style={{ opacity: 1 }}
                        >
                          <line x2={-6} />
                          <text x={-9} y={0} style={{ textAnchor: "end" }}>
                            <tspan x={-9} dy={3}>
                              30
                            </tspan>
                          </text>
                        </g>
                        <g
                          className="tick"
                          transform="translate(0,153)"
                          style={{ opacity: 1 }}
                        >
                          <line x2={-6} />
                          <text x={-9} y={0} style={{ textAnchor: "end" }}>
                            <tspan x={-9} dy={3}>
                              35
                            </tspan>
                          </text>
                        </g>
                        <g
                          className="tick"
                          transform="translate(0,135)"
                          style={{ opacity: 1 }}
                        >
                          <line x2={-6} />
                          <text x={-9} y={0} style={{ textAnchor: "end" }}>
                            <tspan x={-9} dy={3}>
                              40
                            </tspan>
                          </text>
                        </g>
                        <g
                          className="tick"
                          transform="translate(0,117)"
                          style={{ opacity: 1 }}
                        >
                          <line x2={-6} />
                          <text x={-9} y={0} style={{ textAnchor: "end" }}>
                            <tspan x={-9} dy={3}>
                              45
                            </tspan>
                          </text>
                        </g>
                        <g
                          className="tick"
                          transform="translate(0,99)"
                          style={{ opacity: 1 }}
                        >
                          <line x2={-6} />
                          <text x={-9} y={0} style={{ textAnchor: "end" }}>
                            <tspan x={-9} dy={3}>
                              50
                            </tspan>
                          </text>
                        </g>
                        <g
                          className="tick"
                          transform="translate(0,82)"
                          style={{ opacity: 1 }}
                        >
                          <line x2={-6} />
                          <text x={-9} y={0} style={{ textAnchor: "end" }}>
                            <tspan x={-9} dy={3}>
                              55
                            </tspan>
                          </text>
                        </g>
                        <g
                          className="tick"
                          transform="translate(0,64)"
                          style={{ opacity: 1 }}
                        >
                          <line x2={-6} />
                          <text x={-9} y={0} style={{ textAnchor: "end" }}>
                            <tspan x={-9} dy={3}>
                              60
                            </tspan>
                          </text>
                        </g>
                        <g
                          className="tick"
                          transform="translate(0,46)"
                          style={{ opacity: 1 }}
                        >
                          <line x2={-6} />
                          <text x={-9} y={0} style={{ textAnchor: "end" }}>
                            <tspan x={-9} dy={3}>
                              65
                            </tspan>
                          </text>
                        </g>
                        <g
                          className="tick"
                          transform="translate(0,28)"
                          style={{ opacity: 1 }}
                        >
                          <line x2={-6} />
                          <text x={-9} y={0} style={{ textAnchor: "end" }}>
                            <tspan x={-9} dy={3}>
                              70
                            </tspan>
                          </text>
                        </g>
                        <g
                          className="tick"
                          transform="translate(0,11)"
                          style={{ opacity: 1 }}
                        >
                          <line x2={-6} />
                          <text x={-9} y={0} style={{ textAnchor: "end" }}>
                            <tspan x={-9} dy={3}>
                              75
                            </tspan>
                          </text>
                        </g>
                        <path className="domain" d="M-6,1H0V197H-6" />
                      </g>
                      <g
                        className="c3-axis c3-axis-y2"
                        transform="translate(172.75,0)"
                        style={{ visibility: "hidden", opacity: 0 }}
                      >
                        <text
                          className="c3-axis-y2-label"
                          transform="rotate(-90)"
                          style={{ textAnchor: "end" }}
                          x={0}
                          dx="-0.5em"
                          dy="-0.5em"
                        />
                        <g
                          className="tick"
                          transform="translate(0,197)"
                          style={{ opacity: 1 }}
                        >
                          <line x2={6} y2={0} />
                          <text x={9} y={0} style={{ textAnchor: "start" }}>
                            <tspan x={9} dy={3}>
                              0
                            </tspan>
                          </text>
                        </g>
                        <g
                          className="tick"
                          transform="translate(0,178)"
                          style={{ opacity: 1 }}
                        >
                          <line x2={6} y2={0} />
                          <text x={9} y={0} style={{ textAnchor: "start" }}>
                            <tspan x={9} dy={3}>
                              0.1
                            </tspan>
                          </text>
                        </g>
                        <g
                          className="tick"
                          transform="translate(0,158)"
                          style={{ opacity: 1 }}
                        >
                          <line x2={6} y2={0} />
                          <text x={9} y={0} style={{ textAnchor: "start" }}>
                            <tspan x={9} dy={3}>
                              0.2
                            </tspan>
                          </text>
                        </g>
                        <g
                          className="tick"
                          transform="translate(0,139)"
                          style={{ opacity: 1 }}
                        >
                          <line x2={6} y2={0} />
                          <text x={9} y={0} style={{ textAnchor: "start" }}>
                            <tspan x={9} dy={3}>
                              0.3
                            </tspan>
                          </text>
                        </g>
                        <g
                          className="tick"
                          transform="translate(0,119)"
                          style={{ opacity: 1 }}
                        >
                          <line x2={6} y2={0} />
                          <text x={9} y={0} style={{ textAnchor: "start" }}>
                            <tspan x={9} dy={3}>
                              0.4
                            </tspan>
                          </text>
                        </g>
                        <g
                          className="tick"
                          transform="translate(0,99)"
                          style={{ opacity: 1 }}
                        >
                          <line x2={6} y2={0} />
                          <text x={9} y={0} style={{ textAnchor: "start" }}>
                            <tspan x={9} dy={3}>
                              0.5
                            </tspan>
                          </text>
                        </g>
                        <g
                          className="tick"
                          transform="translate(0,80)"
                          style={{ opacity: 1 }}
                        >
                          <line x2={6} y2={0} />
                          <text x={9} y={0} style={{ textAnchor: "start" }}>
                            <tspan x={9} dy={3}>
                              0.6
                            </tspan>
                          </text>
                        </g>
                        <g
                          className="tick"
                          transform="translate(0,60)"
                          style={{ opacity: 1 }}
                        >
                          <line x2={6} y2={0} />
                          <text x={9} y={0} style={{ textAnchor: "start" }}>
                            <tspan x={9} dy={3}>
                              0.7
                            </tspan>
                          </text>
                        </g>
                        <g
                          className="tick"
                          transform="translate(0,41)"
                          style={{ opacity: 1 }}
                        >
                          <line x2={6} y2={0} />
                          <text x={9} y={0} style={{ textAnchor: "start" }}>
                            <tspan x={9} dy={3}>
                              0.8
                            </tspan>
                          </text>
                        </g>
                        <g
                          className="tick"
                          transform="translate(0,21)"
                          style={{ opacity: 1 }}
                        >
                          <line x2={6} y2={0} />
                          <text x={9} y={0} style={{ textAnchor: "start" }}>
                            <tspan x={9} dy={3}>
                              0.9
                            </tspan>
                          </text>
                        </g>
                        <g
                          className="tick"
                          transform="translate(0,1)"
                          style={{ opacity: 1 }}
                        >
                          <line x2={6} y2={0} />
                          <text x={9} y={0} style={{ textAnchor: "start" }}>
                            <tspan x={9} dy={3}>
                              1
                            </tspan>
                          </text>
                        </g>
                        <path className="domain" d="M6,1H0V197H6" />
                      </g>
                    </g>
                    <g
                      transform="translate(0.5,224.5)"
                      style={{ visibility: "hidden" }}
                    >
                      <g
                        clipPath="url(https://wrraptheme.com/templates/iconic/dist/realestate/index.html#c3-1687342507787-clip-subchart)"
                        className="c3-chart"
                      >
                        <g className="c3-chart-bars" />
                        <g className="c3-chart-lines" />
                      </g>
                      <g
                        clipPath="url(https://wrraptheme.com/templates/iconic/dist/realestate/index.html#c3-1687342507787-clip)"
                        className="c3-brush"
                        style={{
                          pointerEvents: "all",
                          WebkitTapHighlightColor: "rgba(0, 0, 0, 0)"
                        }}
                      >
                        <rect
                          className="background"
                          x={0}
                          width="172.75"
                          style={{ visibility: "hidden", cursor: "crosshair" }}
                        />
                        <rect
                          className="extent"
                          x={0}
                          width={0}
                          style={{ cursor: "move" }}
                        />
                        <g
                          className="resize e"
                          transform="translate(0,0)"
                          style={{ cursor: "ew-resize", display: "none" }}
                        >
                          <rect
                            x={-3}
                            width={6}
                            height={6}
                            style={{ visibility: "hidden" }}
                          />
                        </g>
                        <g
                          className="resize w"
                          transform="translate(0,0)"
                          style={{ cursor: "ew-resize", display: "none" }}
                        >
                          <rect
                            x={-3}
                            width={6}
                            height={6}
                            style={{ visibility: "hidden" }}
                          />
                        </g>
                      </g>
                      <g
                        className="c3-axis-x"
                        transform="translate(0,0)"
                        clipPath="url(https://wrraptheme.com/templates/iconic/dist/realestate/index.html#c3-1687342507787-clip-xaxis)"
                        style={{ visibility: "hidden", opacity: 0 }}
                      >
                        <g
                          className="tick"
                          transform="translate(87, 0)"
                          style={{ opacity: 1 }}
                        >
                          <line x1={0} x2={0} y2={6} />
                          <text
                            x={0}
                            y={9}
                            transform=""
                            style={{ textAnchor: "middle", display: "block" }}
                          >
                            <tspan x={0} dy=".71em" dx={0}>
                              0
                            </tspan>
                          </text>
                        </g>
                        <path className="domain" d="M0,6V0H172.75V6" />
                      </g>
                    </g>
                    <g transform="translate(0,201)">
                      <g
                        className="c3-legend-item c3-legend-item-data1"
                        style={{
                          visibility: "visible",
                          cursor: "pointer",
                          opacity: 1
                        }}
                      >
                        <text
                          x="42.4677734375"
                          y={9}
                          style={{ pointerEvents: "none" }}
                        >
                          Sold
                        </text>
                        <rect
                          className="c3-legend-item-event"
                          x="28.4677734375"
                          y={-5}
                          width="56.0849609375"
                          height={23}
                          style={{ fillOpacity: 0 }}
                        />
                        <line
                          className="c3-legend-item-tile"
                          x1="26.4677734375"
                          y1={4}
                          x2="36.4677734375"
                          y2={4}
                          strokeWidth={10}
                          style={{
                            stroke: "rgb(121, 84, 173)",
                            pointerEvents: "none"
                          }}
                        />
                      </g>
                      <g
                        className="c3-legend-item c3-legend-item-data2"
                        style={{
                          visibility: "visible",
                          cursor: "pointer",
                          opacity: 1
                        }}
                      >
                        <text
                          x="98.552734375"
                          y={9}
                          style={{ pointerEvents: "none" }}
                        >
                          For Sale
                        </text>
                        <rect
                          className="c3-legend-item-event"
                          x="84.552734375"
                          y={-5}
                          width="59.7294921875"
                          height={23}
                          style={{ fillOpacity: 0 }}
                        />
                        <line
                          className="c3-legend-item-tile"
                          x1="82.552734375"
                          y1={4}
                          x2="92.552734375"
                          y2={4}
                          strokeWidth={10}
                          style={{
                            stroke: "rgb(231, 104, 134)",
                            pointerEvents: "none"
                          }}
                        />
                      </g>
                    </g>
                    <text className="c3-title" x="86.375" y={0} />
                  </svg>
                  <div
                    className="c3-tooltip-container"
                    style={{
                      position: "absolute",
                      pointerEvents: "none",
                      display: "none",
                      top: "180.422px",
                      left: "58.5px"
                    }}
                  >
                    <table className="c3-tooltip">
                      <tbody>
                        <tr className="c3-tooltip-name--data1">
                          <td className="name">
                            <span style={{ backgroundColor: "#7954ad" }} />
                            Male
                          </td>
                          <td className="value">73.0%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div class="col-xl-3 col-lg-4 col-md-6">
              <div class="card">
                  <div class="header">
                      <h2>Social Counter</h2>
                  </div>
                  <div class="body social_counter">                        
                      <ul class=" list-unstyled basic-list">
                          <li><i class="fa fa-facebook-square mr-1"></i> FaceBook <span class="badge badge-primary">16,785</span></li>
                          <li><i class="fa fa-twitter-square mr-1"></i> Twitter <span class="badge badge-default">2,365</span></li>
                          <li><i class="fa fa-linkedin-square mr-1"></i> Linkedin<span class="badge badge-success">9,021</span></li>
                          <li><i class="fa fa-behance-square mr-1"></i> Behance<span class="badge badge-info">1,725</span></li>
                          <li><i class="fa fa-dribbble mr-1"></i> Dribbble<span class="badge badge-info">11,725</span></li>
                      </ul>
                  </div>
              </div>
          </div> */}
          <div className="col-xl-6 col-lg-4 col-md-6">
            <div className="card">
              <div className="header">
                <h2>Ongoing Project</h2>
                <ul className="header-dropdown">
                  <li className="dropdown">
                    <a
                      href="javascript:void(0);"
                      className="dropdown-toggle"
                      data-toggle="dropdown"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                    />
                    <ul className="dropdown-menu dropdown-menu-right">
                      <li>
                        <a href="javascript:void(0);">Action</a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">Another Action</a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">Something else</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="body">
                <table className="table mb-0">
                  <thead>
                    <tr>
                      <th>Location</th>
                      <th>Lead</th>
                      <th>Progress</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <h6 className="mb-0">White Town</h6>
                        <span className="font-12 text-muted">
                          Due Date: 25 Jan 2023
                        </span>
                      </td>
                      <td>
                        <a href="agent-profile.html">
                          <img
                            src="../assets/images/xs/avatar1.jpg"
                            className="rounded-circle avatar"
                            alt=""
                          />
                          <span>Husaine Beck</span>
                        </a>
                      </td>
                      <td>
                        <div className="progress progress-xs">
                          <div
                            className="progress-bar progress-bar-warning"
                            role="progressbar"
                            style={{ width: "66%" }}
                            aria-valuenow={75}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h6 className="mb-0">Reddiyarpalayam</h6>
                        <span className="font-12 text-muted">
                          Due Date: 18 June 2021
                        </span>
                      </td>
                      <td>
                        <a href="agent-profile.html">
                          <img
                            src="../assets/images/xs/avatar2.jpg"
                            className="rounded-circle avatar"
                            alt=""
                          />
                          <span>Ajeeth</span>
                        </a>
                      </td>
                      <td>
                        <div className="progress progress-xs">
                          <div
                            className="progress-bar progress-bar-success"
                            role="progressbar"
                            style={{ width: "89%" }}
                            aria-valuenow={75}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h6 className="mb-0">Moolakulam</h6>
                        <span className="font-12 text-muted">
                          Due Date: 22 Nov 2024
                        </span>
                      </td>
                      <td>
                        <a href="agent-profile.html">
                          <img
                            src="../assets/images/xs/avatar3.jpg"
                            className="rounded-circle avatar"
                            alt=""
                          />
                          <span>Asha</span>
                        </a>
                      </td>
                      <td>
                        <div className="progress progress-xs">
                          <div
                            className="progress-bar progress-bar-danger"
                            role="progressbar"
                            style={{ width: "29%" }}
                            aria-valuenow={75}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Fragment>
  )
}

export default Dashboard;