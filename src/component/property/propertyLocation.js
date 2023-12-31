import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateProjectLocation } from "../../features/redux/slice/locationSlice";
import { axiosInstance } from "../../features/service/config";
import { useNavigate } from 'react-router-dom';

const PropertyLocation = () => {

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [location, setLocation] = useState("");
  const [updateId, setUpdateId] = useState("")

  console.log(updateId);
  const handleShowModel = () => {
    setShowModal(true);
  }

  const handleCloseModel = () => {
    setShowModal(false)
  }

  const data = useSelector((state, action) => {
    return state.location.projectLocation
  })

  // Edit method
  const getValue = async (id) => {
    try {
      const { data } = await axiosInstance.get(`ProjectLocationApi/GetById/${id}`)
      console.log(data);
      setLocation(data.pLocation)
    } catch (error) {
      console.log(error);
    }
  }

  const onEditLocation = (id) => {
    setUpdateId(id)
    getValue(id);
    setShowModal(true);
  }

  const updateLocation = async () => {
    console.log(updateId, 'updateId');
    try {
      const { data } = await axiosInstance.put(`ProjectLocationApi/Put/${updateId}`, {location, "projectLocationId": updateId,"createdBy": "admin",
      "createdOn": "2023-12-27T12:32:48.503Z",
      "updatedOn": "2023-12-27T12:32:48.503Z" })
    } catch (error) {
      console.log(error);
    }
  }

  // Get method

  const projectLocationApi = async () => {
    const { data } = await axiosInstance.get("ProjectLocationApi/get");
    console.log(data);
    dispatch(
      updateProjectLocation(data)
    )
  }

  useEffect(() => {
    projectLocationApi();
  }, []);

  const onChangeHandler = (value) => {
    setLocation(value);
  }

  const addLocation = async (e) => {
    e.preventDefault();

    const { data } = await axiosInstance.post("ProjectLocationApi/Post", { pLocation: location, createdBy: "admin" })
    if (data) {
      alert("Add project Location Successfully");
      projectLocationApi()
      setLocation("")
      setShowModal(false)

    } else {
      alert("Somthing went wrong");
    }
  }

  const onDeleteLocation = async (id) => {
    try {
      const { data } = await axiosInstance.delete(`/ProjectLocationApi/Delete/${id}`)
      projectLocationApi();
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <div id="main-content">
        <div className="container-fluid">
          <div className="block-header">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12">
                <h2>Property</h2>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="index.html">
                      <i className="fa fa-user-circle-o" />
                    </a>
                  </li>
                  <li className="breadcrumb-item">Property</li>
                  <li className="breadcrumb-item active">Project Location</li>
                </ul>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="d-flex flex-row-reverse">
                  <div className="page_action">
                    <button
                      type="button"
                      className="btn btn-primary"
                      data-toggle="modal"
                      onClick={handleShowModel}
                    >
                      <i className="fa fa-download" />
                      Add Location
                    </button>
                    <div
                      className={`modal fade ${showModal ? 'show' : ''}`} id="exampleModal"
                      tabIndex={-1}
                      role="dialog"
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                      style={{ display: showModal ? 'block' : 'none' }}
                    >
                      <div className="modal-dialog" role="document">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                              Add Location
                            </h5>
                            <button
                              type="button"
                              className="close"
                              data-dismiss="modal"
                              aria-label="Close"
                              onClick={handleCloseModel}
                            >
                              <span aria-hidden="true">×</span>
                            </button>
                          </div>
                          <div className="modal-body">
                            <form>
                              <div className="form-group">
                                <label
                                  htmlFor="recipient-name"
                                  className="col-form-label"
                                >
                                  Location Name:
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  value={location}
                                  onChange={(e) => onChangeHandler(e.target.value)}
                                />
                              </div>
                            </form>
                          </div>
                          <div className="modal-footer">
                            <button
                              type="button"
                              className="btn btn-secondary"
                              data-dismiss="modal"
                              onClick={handleCloseModel}
                            >
                              Cancel
                            </button>
                            <button
                              type="button"
                              className="btn btn-primary"
                              onClick={updateId ? updateLocation : addLocation}
                            >
                              {updateId ? "Update" : "Add"}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-2 d-flex"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="header"></div>
            <div className="body">
              <div className="table-responsive">
                <table className="table table-hover mb-0 c_list">
                  <thead>
                    <tr>
                      <td>S.No</td>
                      <td>Location Name</td>
                      <td>Created By</td>
                      <td>Created On</td>
                      <td>Action</td>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      data.map((item, index) => {
                        return (
                          <tr key={item.projectLocationId}>
                            <td>{index + 1}</td>
                            <td>{item.pLocation}</td>
                            <td>{item.createdBy}</td>
                            <td>{item.createdOn}</td>
                            <td>
                              <button type="button" className="btn btn-info" title="Edit" onClick={() => onEditLocation(item.projectLocationId)}><i
                                className="fa fa-edit"></i></button>
                              <button type="button" data-type="confirm"
                                className="btn btn-danger js-sweetalert" title="Delete" onClick={() => onDeleteLocation(item.projectLocationId)}><i
                                  className="fa fa-trash-o"></i></button>
                            </td>
                          </tr>
                        )
                      })
                    }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default PropertyLocation