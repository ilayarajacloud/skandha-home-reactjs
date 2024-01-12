import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateProjectLocation } from "../../features/redux/slice/locationSlice"
import { updatePlotFacing } from "../../features/redux/slice/plotFacingSlice";
import { axiosInstance } from '../../features/service/config';
import { toast } from 'react-toastify';


const property = {
  "plotNo": "",
  "propertyName": "",
  "propertyLocation": "",
  "plotFacing": "",
  "propertyDescription": "",
  "areaInSquareFeet": "",
  "north": "",
  "south": "",
  "east": "",
  "west": "",
  "splay": "",
  "areaInSouth": "",
  "eastBy": "",
  "westBy": "",
  "northBy": "",
  "southBy": "",
  "category": "",
  "status": "",
  "createdBy": "",
  "plotDimention": "",
}

const NewProperty = () => { 

  const dispatch = useDispatch()
  const [propertyState, setPropertyState] = useState(property)


  const location = useSelector((state, action) => {
    return state.location.projectLocation
  })

  const facing = useSelector((state) => {
    return state.facing.plotFacingList
  })


  const projectLocationApi = async () => {
    const { data } = await axiosInstance.get("ProjectLocationApi/get"); 
    console.log(data);
    dispatch(
      updateProjectLocation(data)
    )
  }

  const getPlotFacingApi = async () => {
    try {
      const { data } = await axiosInstance.get("PlotFacingApi/get")
      dispatch(
        updatePlotFacing(data)
      )
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    projectLocationApi();
    getPlotFacingApi();
  }, [])

  // Post method
  const onChangeHandler = (name, value) => {
    setPropertyState({
      ...propertyState,
      [name]: value
    })
  }

  const addProperty = async (e) => {
    alert("ji")
    e.preventDefault();

    const postPropety = new FormData();
    postPropety.append("plotNo", propertyState.plotNo)
    postPropety.append("propertyName", propertyState.propertyName)
    postPropety.append("propertyLocation", propertyState.propertyLocation)
    postPropety.append("plotFacing", propertyState.plotFacing)
    postPropety.append("propertyDescription", propertyState.propertyDescription)
    postPropety.append("areaInSquareFeet", propertyState.areaInSquareFeet)
    postPropety.append("north", propertyState.north)
    postPropety.append("south", propertyState.south)
    postPropety.append("east", propertyState.east)
    postPropety.append("west", propertyState.west)
    postPropety.append("splay", propertyState.splay)
    postPropety.append("areaInSouth", propertyState.areaInSouth)
    postPropety.append("westBy", propertyState.westBy)
    postPropety.append("northBy", propertyState.northBy)
    postPropety.append("southBy", propertyState.southBy)
    postPropety.append("category", propertyState.category)
    postPropety.append("status", propertyState.status)
    postPropety.append("createdBy", '1')
    // postPropety.append("plotDimention", propertyState.plotDimention)

    console.log(postPropety);
    try {
      const { data } = await axiosInstance.post(`PropertyApi/Post`, postPropety, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      toast("Property Add Successfully")
      setPropertyState(property)
    } catch (error) {
        console.log(error);
    }
    console.log(propertyState);
  }

  return (
    <div id="main-content">
      <div className="container-fluid">
        <div className="block-header">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <h2>Add Property</h2>
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="index.html">
                    <i className="fa fa-building-o" />
                  </a>
                </li>
                <li className="breadcrumb-item">Property</li>
                <li className="breadcrumb-item active">Add Property</li>
              </ul>
            </div>
          </div>
        </div>
        <form
          id="addProperties"
          className="myForm needs-validation"
          encType="multipart/form-data"
          noValidate=""
        >
          {/* Basic Information */}
          <div className="row clearfix">
            <div className="col-lg-12">
              <div className="card">
                <div className="header">
                  <h2>Basic Information</h2>
                </div>
                <div className="body">
                  <div className="row clearfix">
                    <div className="col-lg-12">
                      <div className="row clearfix">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="plotNo" className="form-label">
                              Plot Number
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              value={propertyState.plotNo}
                              onChange={(e) => onChangeHandler("plotNo", e.target.value)}
                            />
                            <div className="invalid-feedback">
                              Please provide a 'Plot Number'.
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="pname" className="form-label">
                              Property Name
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              value={propertyState.propertyName}
                              onChange={(e) => onChangeHandler("propertyName", e.target.value)}
                            />
                            <div className="invalid-feedback">
                              Please provide a 'Property Name'.
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="plocation" className="form-label">
                              Project Location
                            </label>
                            <select
                              className="form-control show-tick"
                              value={propertyState.propertyLocation}
                              onChange={(e) => onChangeHandler("propertyLocation", e.target.value)}
                            >
                              {
                                location.map((item) => (
                                  <option>{item.pLocation}</option>
                                ))
                              }
                            </select>
                            <div className="invalid-feedback">
                              Please provide a 'Location'.
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="plotFacing" className="form-label">
                              Plot Facing
                            </label>
                            <select
                              className="form-control show-tick"
                              value={propertyState.plotFacing}
                              onChange={(e) => onChangeHandler("plotFacing", e.target.value)}
                            >
                              {
                                facing.map((item) => (
                                  <option>{item.plotFacing}</option>
                                ))
                              }
                            </select>
                            <div className="invalid-feedback">
                              Please provide a 'Plotfacing'.
                            </div>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <label htmlFor="discription" className="form-label">

                              Property Description
                            </label>
                            <textarea
                              rows={5}
                              className="form-control"
                              value={propertyState.propertyDescription}
                              onChange={(e) => onChangeHandler("propertyDescription", e.target.value)}
                              defaultValue={""}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Property Information */}
          <div className="row clearfix">
            <div className="col-md-12">
              <div className="card">
                <div className="header">
                  <h2>Property Information</h2>
                </div>
                <div className="body">
                  <div className="row clearfix">
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label htmlFor="AreaSqrft" className="form-label">
                          Area In Squarefeet
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          value={propertyState.areaInSquareFeet}
                          onChange={(e) => onChangeHandler("areaInSquareFeet", e.target.value)}
                          required=""
                        />
                        <div className="invalid-feedback">
                          Please provide a 'Squarefeets'.
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label htmlFor="north" className="form-label">
                          Splay
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          value={propertyState.splay}
                          onChange={(e) => onChangeHandler("splay", e.target.value)}
                          required=""
                        />
                        <div className="invalid-feedback">
                          Please provide a 'Splay'.
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label htmlFor="east" className="form-label">
                          Area In East
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          value={propertyState.eastBy}
                          onChange={(e) => onChangeHandler("eastBy", e.target.value)}
                        />
                        <div className="invalid-feedback">
                          Please provide a 'East'.
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label htmlFor="west" className="form-label">
                          Area In West
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          value={propertyState.west}
                          onChange={(e) => onChangeHandler("west", e.target.value)}
                        />
                        <div className="invalid-feedback">
                          Please provide a 'West'.
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label htmlFor="eastwest" className="form-label">
                          Area In North
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          value={propertyState.north}
                          onChange={(e) => onChangeHandler("north", e.target.value)}
                        />
                        <div className="invalid-feedback">
                          Please provide a 'North'
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label htmlFor="eastwest" className="form-label">
                          Area In South
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          value={propertyState.south}
                          onChange={(e) => onChangeHandler("south", e.target.value)}
                        />
                        <div className="invalid-feedback">
                          Please provide a 'South'
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <div className="form-group">
                        <label htmlFor="plotimage" className="form-label">
                          Chose Plot Image
                        </label>
                        <input
                          type="file"
                          className="form-control"
                          value={propertyState.plotDimention}
                          onChange={(e) => onChangeHandler("plotDimention", e.target.value)}
                        />
                        <div className="invalid-feedback">
                          Please Upload a 'Plot Image'.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Boundaries */}
            <div className="col-md-12">
              <div className="card">
                <div className="header">
                  <h2>Boundaries</h2>
                </div>
                <div className="body">
                  <div className="row clearfix">
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label htmlFor="eastby" className="form-label">
                          East By
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          value={propertyState.east}
                          onChange={(e) => onChangeHandler("east", e.target.value)}
                          required=""
                        />
                        <div className="invalid-feedback">
                          Please provide a 'East By'.
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label htmlFor="westby" className="form-label">
                          West By
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          value={propertyState.westBy}
                          onChange={(e) => onChangeHandler("westBy", e.target.value)}
                        />
                        <div className="invalid-feedback">
                          Please provide a 'West By'.
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label htmlFor="northby" className="form-label">
                          North By
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          value={propertyState.northBy}
                          onChange={(e) => onChangeHandler("northBy", e.target.value)}
                        />
                        <div className="invalid-feedback">
                          Please provide a 'North By'.
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label htmlFor="southby" className="form-label">
                          South By
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          value={propertyState.southBy}
                          onChange={(e) => onChangeHandler("southBy", e.target.value)}
                        />
                        <div className="invalid-feedback">
                          Please provide a 'South By'.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Category */}
            <div className="col-md-12">
              <div className="card">
                <div className="body">
                  <div className="row clearfix">
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label htmlFor="pcategory" className="form-label">
                          Category
                        </label>
                        <select
                          className="form-control show-tick"
                          value={propertyState.category}
                          onChange={(e) => onChangeHandler("category", e.target.value)}
                        >
                          <option selected="" disabled="" value="">
                            Select Category
                          </option>
                          <option value="Premium">Premium</option>
                          <option value="Horizon">Horizon</option>
                          <option value="Normal">Normal</option>
                        </select>
                        <div className="invalid-feedback">
                          Please provide a 'Category'.
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label htmlFor="pstatus" className="form-label">
                          Status
                        </label>
                        <select
                          className="form-control show-tick"
                          value={propertyState.status}
                          onChange={(e) => onChangeHandler("status", e.target.value)}
                        >
                          <option value=""> Select Status </option>
                          <option value="Sold">Sold</option>
                          <option value="Available">Available</option>
                          <option value="Booked">Booked</option>
                        </select>
                        <div className="invalid-feedback">
                          Please provide a 'Status'.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row clearfix">
            <div className="col-lg-6 col-md-12">
              <div className="body">
                <div className="row clearfix">
                  <div className="col-sm-12">
                    <div className="form-group">
                      <button
                        type="submit"
                        className="btn btn-primary"
                        form="addProperties"
                        value="Submit"
                        onClick={addProperty}
                      >
                        Save
                      </button>
                      <a href="/skandha/index.html" className="btn btn-secondary">
                        Cancel
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
        {/* Form */}
      </div>
    </div>

  )
}

export default NewProperty