import React, { useState, useEffect } from 'react';
import { axiosInstance } from "../../features/service/config"
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateProjectLocation } from '../../features/redux/slice/locationSlice';

const NewLead = () => {

  const navigate = useNavigate()
  const { id } = useParams();
  const dispatch = useDispatch();
  console.log("id", id);

  const location = useSelector((state, action) => {
    return state.location.projectLocation
  })

  const projectLocationApi = async () => {
    const { data } = await axiosInstance.get("https://app.mycllc.ca/skandha-api/ProjectLocationApi/get");
    console.log(data);
    dispatch(
      updateProjectLocation(data)
    )
  }
  useEffect(() => {
    projectLocationApi();
  }, [])
  console.log(location);

  // step 1 Initialvalue

  const [newLead, setNewLead] = useState({
    // firstName: "",
    // lastName: "",
    // mobile: "",
    // email: "",
    // gender: "",
    // whatsApp: "",
    // address: "",
    // city: "",
    // working: "",
    // companyName: "",
    // jobTitle: "",
    // landExpectation: "",
    // expectedSqFt: "",
    // expectedBudget: "",
    // leadSource: "",
    // leadStatus: "",
    // typeOfPurchase: "",
    // purposeOfBuying: "",
    // projectLocation: "",
    // modeOfTransport: "",
    // pickupLocation: "",
    // pickupTime: "",
    // reason: "",
    // createdBy: "",
    // isCustomer: "",
    // recept: "",
    // registrationDate: "2023-07-26T10:45:01.014Z",
    // advancedPay: ""
      "firstName": "string",
      "lastName": "string",
      "mobile": "string",
      "email": "string",
      "gender": "string",
      "whatsApp": "string",
      "address": "string",
      "city": "string",
      "working": "string",
      "companyName": "string",
      "jobTitle": "string",
      "landExpectation": "string",
      "expectedSqFt": "string",
      "expectedBudget": 0,
      "leadSource": "string",
      "leadStatus": "string",
      "typeOfPurchase": "string",
      "purposeOfBuying": "string",
      "isCustomer": true,
      "recept": "string",
      "registrationDate": "2023-12-22T12:32:30.145Z",
      "advancedPay": "string",
      "createdBy": "string",
      "reason": "string",
      "createdOn": "2023-12-22T12:32:30.145Z",
      "lastUpdatedOn": "2023-12-22T12:32:30.145Z",
      "followup": "2023-12-22T12:32:30.145Z",
      "modeOfTransport": "string",
      "pickupLocation": "string",
      "pickupTime": "2023-12-22T12:32:30.145Z",
      "projectLocation": "string",
      "isCheckboxDisabled": true
  })

  // step 2 update the value based on user input
  const onChangeHandler = (name, value) => {
    console.log(name);
    console.log(value);
    setNewLead({
      ...newLead,
      [name]: value
    })
  }

  // Step 3 submit form

  const addNewLead = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axiosInstance.post("LeadApi/PostApi", { ...newLead });
      debugger;
    } catch (error) {
      console.log(error)
    }
  }

  // const addNewLead = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const { data } = await axiosInstance.post("LeadApi/PostApi", newLead);
  //     if (data?.id) {
  //       alert("Lead Added sucessfully");
  //       navigate("/leadlist");
  //     } else {
  //       alert("Somthing went wrong");
  //     }
  //     console.log(data, "getValue");
  //     // dispatch(
  //     //   updateLeadList(data),
  //     // )
  //     console.log(newLead, "newlead");
  //   } catch (e) {
  //     alert(e.message)
  //   }
  // }

  // const updateLead = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const { data } = await axiosInstance.put(`/LeadApi/Put/${id}`, newLead);
  //     console.log(data);
  //     if (data) {
  //       alert("Lead updated sucessfully");
  //       navigate("/leadlist");
  //     } else {
  //       alert("Somthing went wrong");
  //     }
  //     console.log(data, "getValue");
  //     // dispatch(
  //     //   updateLeadList(data),
  //     // )
  //     console.log(newLead, "newlead");
  //   } catch (e) {
  //     alert(e.message)
  //   }
  // }


  // const getLeadListFromApi = async (id) => {
  //   try {
  //     const { data } = await axiosInstance.get(`LeadApi/${id}`);
  //     console.log(data, "getValue");
  //     setNewLead({
  //       ...data
  //     })
  //   } catch (e) {
  //     alert(e.message)
  //   }
  // }

  // useEffect(() => {
  //   if (id) getLeadListFromApi(id)
  // }, [])
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
                          value={newLead.firstName}
                          onChange={(e) => onChangeHandler("firstName", e.target.value)}
                        />
                        <div className="invalid-feedback">
                          Please provide a 'Firstname'.
                        </div>
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
                          value={newLead.lastName}
                          onChange={(e) => onChangeHandler("lastName", e.target.value)}
                        />
                        <div className="invalid-feedback">
                          Please provide a 'Lastname'.
                        </div>
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
                          value={newLead.mobile}
                          onChange={(e) => onChangeHandler("mobile", e.target.value)}
                        />
                        <div className="invalid-feedback">
                          Please provide a 'Number'.
                        </div>
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
                          value={newLead.email}
                          onChange={(e) => onChangeHandler("email", e.target.value)}
                        />
                        <div className="invalid-feedback">
                          Please provide a 'Email'.
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-3">
                      <div className="form-group">
                        <label htmlFor="gender" className="form-label">
                          Gender
                        </label>
                        <select className="form-control"
                          onChange={(e) => onChangeHandler('gender', e.target.value)}
                          value={newLead.gender}
                        >
                          <option selected="" disabled="" value="">
                            Choose...
                          </option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                        </select>
                        <div className="invalid-feedback">
                          Please select a 'Gender'.
                        </div>
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
                          value={newLead.whatsApp}
                          onChange={(e) => onChangeHandler('whatsApp', e.target.value)}
                        />
                        <div className="invalid-feedback">
                          Please provide a 'Whatsapp number'.
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-3">
                      <div className="form-group">
                        <label htmlFor="address" className="form-label">
                          {" "}
                          Address{" "}
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          value={newLead.address}
                          onChange={(e) => onChangeHandler('address', e.target.value)}
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
                          value={newLead.city}
                          onChange={(e) => onChangeHandler('city', e.target.value)}
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
                          value={newLead.working}
                          onChange={(e) => onChangeHandler('working', e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <div className="form-group">
                        <label className="form-label"> Company Name </label>
                        <input
                          type="text"
                          className="form-control custom-select"
                          value={newLead.companyName}
                          onChange={(e) => onChangeHandler('companyName', e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <div className="form-group">
                        <label className="form-label"> Job Title </label>
                        <input
                          type="text"
                          className="form-control custom-select"
                          value={newLead.jobTitle}
                          onChange={(e) => onChangeHandler('jobTitle', e.target.value)} />
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
                              value={newLead.landExpectation}
                              onChange={(e) => onChangeHandler('landExpectation', e.target.value)}
                            >
                              <option selected="" disabled="" value="">
                                Select Direction
                              </option>
                              <option value="North Facing">North Facing</option>
                              <option value="South Facing">South facing</option>
                              <option value="East Facing">East Facing</option>
                              <option value="West Facing">West Facing</option>
                              <option value="West Facing">Not Applicable</option>
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
                              value={newLead.projectLocation}
                              onChange={(e) => onChangeHandler('projectLocation', e.target.value)}
                            >
                              {
                                location.map((item) => (
                                  <option>
                                    {item.pLocation}
                                  </option>
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
                            value={newLead.expectedSqFt}
                            onChange={(e) => onChangeHandler('expectedSqFt', e.target.value)}
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
                            type="text"
                            className="form-control"
                            value={newLead.expectedBudget}
                            onChange={(e) => onChangeHandler('expectedBudget', e.target.value)}
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
                          value={newLead.leadSource}
                          onChange={(e) => onChangeHandler('leadSource', e.target.value)}
                        ></select>
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
                          value={newLead.leadStatus}
                          onChange={(e) => onChangeHandler('leadStatus', e.target.value)}
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
                          value={newLead.followup}
                          onChange={(e) => onChangeHandler('followup', e.target.value)}
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
                          value={newLead.typeOfPurchase}
                          onChange={(e) => onChangeHandler('typeOfPurchase', e.target.value)}
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
                          value={newLead.reason}
                          onChange={(e) => onChangeHandler('reason', e.target.value)}
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
                          value={newLead.modeOfTransport}
                          onChange={(e) => onChangeHandler('modeOfTransport', e.target.value)}
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
                        value={newLead.pickupLocation}
                        onChange={(e) => onChangeHandler('pickupLocation', e.target.value)}
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
                        value={newLead.pickupTime}
                        onChange={(e) => onChangeHandler('pickupTime', e.target.value)}
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
                    onClick={addNewLead}
                  >
                    Save
                  </button>
                  <a href="/skandha/index.html" className="btn btn-primary">
                    Cancel
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewLead;