import React from 'react';
import './overview.css';
import MapImg from "../../assets/images/PLOT AREA.pdf";

const Overview = () => {
  return (
<div id="main-content">
  <div className="container-fluid">
    <div className="block-header">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12">
          <h2>Overview</h2>
          <ul className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="index.html">
                <i className="fa fa-eye" />
              </a>
            </li>
            <li className="breadcrumb-item">overview</li>
          </ul>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12">
          <div className="d-flex flex-row-reverse">
            <div className="p-2 d-flex"></div>
          </div>
        </div>
      </div>
    </div>
    <div className="row clearfix">
      <div className="col-lg-12">
        <div className="card">
          <div className="body">
            <div className="row clearfix">
              <div className="col-sm-3">
                <div className="form-group">
                  <h6>Properties</h6>
                  <select className="form-control filter-plots" id="location">
                    
                    filter-plots
                  </select>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="form-group">
                  <h6>Plot Facing</h6>
                  <select
                    className="form-control filter-plots"
                    id="direction"
                  ></select>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="form-group">
                  <h6>Area of sqr Ft</h6>
                  <select className="form-control filter-plots" id="sizeFilter">
                  </select>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="form-group">
                  <h6>Status</h6>
                  <select
                    className="form-control filter-plots"
                    id="statusFilter"
                  >
                    <option value="">-- Select Status --</option>
                    <option value="Sold">Sold</option>
                    <option value="Available">Available</option>
                    <option value="Booked">Booked</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="row justify-content-between">
              <div className="col-4">
                <button
                  type="button"
                  className="btn btn-info"
                  data-toggle="modal"
                  data-target="#exampleModal"
                  style={{ padding: "2px 7px" }}
                >
                  <i className="fa fa-location-arrow fa-2x" />
                  {/* Click to see Map Image */}
                </button>
              </div>
              <div className="col-2">
                <ul className="nav">
                  <li className="pl-3" style={{ color: "red" }}>
                    <i className="fa fa-circle text-danger" /> Sold
                  </li>
                  <li className="pl-3" style={{ color: "green" }}>
                    <i className="fa fa-circle text-success" /> Available
                  </li>
                  <li className="pl-3" style={{ color: "rgb(250, 174, 9)" }}>
                    <i className="fa fa-circle text-warning" /> Booked
                  </li>
                </ul>
              </div>
            </div>
            {/* Modal */}
            <div
              className="modal fade"
              id="exampleModal"
              tabIndex={-1}
              role="dialog"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-xl" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">
                      Real Plot Map Image
                    </h5>
                    <button
                      src={MapImg}
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">×</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <iframe
                      src="../assets/pdf/PLOT_AREA.pdf#toolbar=0"
                      con=""
                      width={1100}
                      height={500}
                      frameBorder={0}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div id="plot-container" />
          <div id="no-plot-container">
            <h3 className="text-center">No Plots are Available</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default Overview;