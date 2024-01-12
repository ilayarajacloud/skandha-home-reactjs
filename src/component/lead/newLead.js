import React, { useState, useEffect } from 'react';
import { axiosInstance } from "../../features/service/config"
import { updateProjectLocation } from "../../features/redux/slice/locationSlice"
import { updatePlotFacing } from "../../features/redux/slice/plotFacingSlice"
import { updateSourceList } from "../../features/redux/slice/sourceSlice"
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';

const leadPro = {
  "firstName": "",
  "lastName": "",
  "mobile": "",
  "email": "",
  "gender": "",
  "whatsApp": "",
  "address": "",
  "city": "",
  "working": "",
  "companyName": "",
  "jobTitle": "",
  "landExpectation": "",
  "expectedSqFt": "",
  "expectedBudget": "",
  "leadSource": "",
  "leadStatus": "",
  "typeOfPurchase": "",
  "purposeOfBuying": "",
  "recept": "",
  "advancedPay": "",
  "createdBy": "",
  "reason": "",
  "followup": "",
  "modeOfTransport": "",
  "pickupLocation": "",
  "pickupTime": "",
  "projectLocation": "",
}

const NewLead = () => {
  const [leadState, setLeadState] = useState(leadPro)
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const { id } = useParams()

  useEffect(() => {
    findNewleadApi(id)
  }, [id])

  const findNewleadApi = async (id) => {
    try {
      const { data } = await axiosInstance.get(`LeadApi/${id}`)
      setLeadState(data);
    } catch (error) {

    }
  }

  const location = useSelector((state) => {
    return state.location.projectLocation
  })

  const facing = useSelector((state) => {
    return state.facing.plotFacingList
  })

  const source = useSelector((state) => {
    return state.source.sourceList
  })


  const onChangeHandler = (name, value) => {
    setLeadState({
      ...leadState,
      [name]: value
    })
  }
  const addNewLead = async (e) => {
    e.preventDefault();
    if (id) {
       try {
        const { data } = await axiosInstance.put(`LeadApi/Put/${id}`, { ...leadState })
        toast("Update New Lead Suceess");
        alert("update successfully")
        navigate('/leadList')
       } catch (error) {
        console.log(error);
       }
    } else {
      try {
        const { data } = await axiosInstance.post("LeadApi/PostApi", { ...leadState })
        toast("Add New Lead Suceess");
        navigate('/leadList')
      } catch (error) {
        console.log(error);
      }
    }
  }

  const projectLocationApi = async () => {
    const { data } = await axiosInstance.get("ProjectLocationApi/get");
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

  const leadSourceApi = async () => {
    try {
      const { data } = await axiosInstance.get("LeadSourceApi/Get")
      dispatch(
        updateSourceList(data)
      )
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    projectLocationApi();
    getPlotFacingApi();
    leadSourceApi();
  }, [])
  return (
    <div id="main-content">
      <div className="container-fluid">
        <div className="block-header">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <h2>
                <b>Add Lead</b>
              </h2>
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="index.html">
                    <i className="fa fa-user-circle-o" />
                  </a>
                </li>
                <li className="breadcrumb-item">Lead</li>
                <li className="breadcrumb-item active">Add Lead</li>
              </ul>
            </div>
          </div>
        </div>
        {/* Form */}
        <form id="leadForm" className="myForm needs-validation" noValidate="">
          {/* New Lead */}
          <div className="row clearfix">
            <div className="col-lg-12">
              <div className="card">
                <div className="header">
                  <h2>New Lead</h2>
                </div>
                <div className="body">
                  <div className="row clearfix">
                    <div className="col-sm-3">
                      <div className="form-group">
                        <label htmlFor="fname" className="form-label">
                          First Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          value={leadState.firstName}
                          onChange={(e) => onChangeHandler("firstName", e.target.value)}
                        />
                        {leadState.firstName==0 && <span className='text-danger'>Please Enter Your Name</span>}
                      </div>
                    </div>
                    <div className="col-sm-3">
                      <div className="form-group">
                        <label htmlFor="lname" className="form-label">
                          Last Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          value={leadState.lastName}
                          onChange={(e) => onChangeHandler("lastName", e.target.value)}
                        />
                        {leadState.lastName ==0 && <span className="text-danger">
                          Please provide a 'Lastname'.
                        </span>}
                      </div>
                    </div>
                    <div className="col-sm-3">
                      <div className="form-group">
                        <label htmlFor="number" className="form-label">
                          {" "}
                          Number{" "}
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          value={leadState.mobile}
                          onChange={(e) => onChangeHandler("mobile", e.target.value)}
                        />
                        {leadState.mobile ==0 && <span className="text-danger">
                          Please provide a 'Number'.
                        </span>}
                      </div>
                    </div>
                    <div className="col-sm-3 ">
                      <div className="form-group">
                        <label htmlFor="email" className="form-label">
                          Email
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          value={leadState.email}
                          onChange={(e) => onChangeHandler("email", e.target.value)}
                        />
                        {leadState.email ==0 && <span className="text-danger">
                          Please provide a 'Email'.
                        </span>}
                      </div>
                    </div>
                    <div className="col-sm-3">
                      <div className="form-group">
                        <label htmlFor="gender" className="form-label">
                          Gender
                        </label>
                        <select className="form-control"
                          value={leadState.gender}
                          onChange={(e) => onChangeHandler("gender", e.target.value)}
                        >
                          <option selected="" disabled="" value="">
                            Choose...
                          </option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                        </select>
                        {leadState.email ==0 && <span className="text-danger">
                          Please provide a 'Email'.
                        </span>}
                      </div>
                    </div>
                    <div className="col-sm-3">
                      <div className="form-group">
                        <label htmlFor="wnumber" className="form-label">
                          {" "}
                          Whatsapp{" "}
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          value={leadState.whatsApp}
                          onChange={(e) => onChangeHandler("whatsApp", e.target.value)}
                        />
                           {leadState.email ==0 && <span className="text-danger">
                          Please provide a 'Email'.
                        </span>}
                      </div>
                    </div>
                    <div className="col-sm-3">
                      <div className="form-group">
                        <label htmlFor="address" className="form-label">
                          Address{" "}
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          value={leadState.address}
                          onChange={(e) => onChangeHandler("address", e.target.value)}
                        />
                        <div className="invalid-feedback">
                          Please provide a 'Address'.
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-3">
                      <div className="form-group">
                        <label htmlFor="city" className="form-label">
                          {" "}
                          City{" "}
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          value={leadState.city}
                          onChange={(e) => onChangeHandler("city", e.target.value)}
                        />
                        <div className="invalid-feedback">
                          Please provide a 'City'.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Occupation Details */}
          <div className="row clearfix">
            <div className="col-lg-6 col-md-12">
              <div className="card">
                <div className="header">
                  <h2> Occupation Details </h2>
                </div>
                <div className="body">
                  <div className="row clearfix">
                    <div className="col-sm-12">
                      <div className="form-group">
                        <label className="form-label"> Working </label>
                        <input
                          type="text"
                          className="form-control custom-select"
                          value={leadState.working}
                          onChange={(e) => onChangeHandler("working", e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <div className="form-group">
                        <label className="form-label"> Company Name </label>
                        <input
                          type="text"
                          className="form-control custom-select"
                          value={leadState.companyName}
                          onChange={(e) => onChangeHandler("companyName", e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <div className="form-group">
                        <label className="form-label"> Job Title </label>
                        <input
                          type="text"
                          className="form-control custom-select"
                          value={leadState.jobTitle}
                          onChange={(e) => onChangeHandler("jobTitle", e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Land expectation */}
            <div className="col-lg-6 col-md-12">
              <div className="card">
                <div className="header">
                  <h2> Land expectation </h2>
                </div>
                <div className="body">
                  <div className="row clearfix">
                    <div className="col-sm-12">
                      <div className="row clearfix">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="landFace" className="form-label">
                              {" "}
                              Direction as per Vasthu
                            </label>
                            <select
                              className="form-control show-tick"
                              value={leadState.landExpectation}
                              onChange={(e) => onChangeHandler("landExpectation", e.target.value)}
                            >
                              {
                                facing.map((item) => (
                                  <option>{item.plotFacing}</option>
                                ))
                              }
                            </select>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="projectlocation" className="form-label">
                              {" "}
                              Project Location{" "}
                            </label>
                            <select
                              className="form-control show-tick"
                              value={leadState.projectLocation}
                              onChange={(e) => onChangeHandler("projectLocation", e.target.value)}
                            >
                              {
                                location.map((item) => (
                                  <option>{item.pLocation}</option>
                                ))
                              }
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="col-mb-12">
                        <div className="form-group">
                          <label htmlFor="sqft" className="form-label">
                            {" "}
                            Expected square fts
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            value={leadState.expectedSqFt}
                            onChange={(e) => onChangeHandler("expectedSqFt", e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-mb-12">
                        <div className="form-group">
                          <label htmlFor="budget" className="form-label">
                            {" "}
                            Expected Budget
                          </label>
                          <input
                            type="number"
                            className="form-control"
                            value={leadState.expectedBudget}
                            onChange={(e) => onChangeHandler("expectedBudget", e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Enquiry Details */}
          <div className="row clearfix">
            <div className="col-md-12">
              <div className="card">
                <div className="header">
                  <h2> Enquiry Details </h2>
                </div>
                <div className="body">
                  <div className="row clearfix">
                    <div className="col-sm-3">
                      <div className="form-group">
                        <label htmlFor="leadSource" className="form-label">
                          {" "}
                          Lead Source{" "}
                        </label>
                        <select
                          className="form-control show-tick"
                          value={leadState.leadSource}
                          onChange={(e) => onChangeHandler("leadSource", e.target.value)}
                        >
                          {
                            source.map((item) => (
                              <option>{item.sourceName}</option>
                            ))
                          }
                        </select>
                        <div className="invalid-feedback">
                          Please provide a 'LeadSource'
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-3">
                      <div className="form-group">
                        <label htmlFor="leadStatus" className="form-label">
                          {" "}
                          Lead Status
                        </label>
                        <select
                          className="form-control show-tick"
                          value={leadState.leadStatus}
                          onChange={(e) => onChangeHandler("leadStatus", e.target.value)}
                        >
                          <option value="">Select Status</option>
                          <option value="Remind Later">Remind Later</option>
                          <option value="Request for Site Visit">
                            Request for Site Visit
                          </option>
                          <option value="Not Interested">Not Interested</option>
                        </select>
                        <div className="invalid-feedback">
                          Please provide a 'LeadStatus'.
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-3">
                      <div className="form-group">
                        <label htmlFor="">Followup</label>
                        <input
                          type="date"
                          className="form-control"
                          value={leadState.followup}
                          onChange={(e) => onChangeHandler("followup", e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-sm-3">
                      <div className="form-group">
                        <label htmlFor="typeOfPurchase" className="form-label">
                          {" "}
                          Purchase{" "}
                        </label>
                        <select
                          className="form-control show-tick"
                          value={leadState.purposeOfBuying}
                          onChange={(e) => onChangeHandler("purposeOfBuying", e.target.value)}
                        >
                          <option value="">Type of purchase</option>
                          <option value="Loan">Loan</option>
                          <option value="Investment">Own Investment</option>
                        </select>
                        <div className="invalid-feedback">
                          Please provide a 'Purchase'.
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <div className="form-group">
                        <h6>Reason if any :</h6>
                        <textarea
                          rows={3}
                          className="form-control"
                          value={leadState.reason}
                          onChange={(e) => onChangeHandler("reason", e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row clearfix">
            <div className="col-md-12">
              <div className="card" id="siteVisitFields">
                <div className="header">
                  <h2> Site Visit Information </h2>
                </div>
                <div className="body">
                  <div className="row clearfix">
                    <div className="col-sm-4">
                      <div className="form-group">
                        <h6>Mode of Transport</h6>
                        <select className="form-control"
                          value={leadState.modeOfTransport}
                          onChange={(e) => onChangeHandler("modeOfTransport", e.target.value)}
                        >
                          <option value="">---Select Mode of Transport---</option>
                          <option value="Own vehicle">Own vehicle</option>
                          <option value="Arrange cab">Arrange cab</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <label htmlFor="locationforvisit" className="form-label">
                        Pickup Location{" "}
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        value={leadState.pickupLocation}
                        onChange={(e) => onChangeHandler("pickupLocation", e.target.value)}
                      />
                    </div>
                    <div className="col-sm-4">
                      <label htmlFor="locationforvisit" className="form-label">
                        {" "}
                        Date &amp; Time{" "}
                      </label>
                      <input
                        type="datetime-local"
                        className="form-control"
                        value={leadState.pickupTime}
                        onChange={(e) => onChangeHandler("pickupTime", e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
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
                    form="leadForm"
                    value="Submit"
                    onClick={addNewLead}
                  >
                    Save
                  </button>
                  <a href="/skandha/index.html" className="btn btn-secondary">
                    Cancel
                  </a>
                </div>
                <ToastContainer autoClose={900} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


  )
}

export default NewLead;