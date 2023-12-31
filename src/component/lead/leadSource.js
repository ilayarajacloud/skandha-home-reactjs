import React, { useEffect, useState } from 'react'
import { axiosInstance } from '../../features/service/config';
import { useDispatch, useSelector } from 'react-redux';
import { updateSourceList } from "../../features/redux/slice/sourceSlice";
import { ToastContainer, toast } from 'react-toastify';


const LeadSource = () => {
  const names = "admin";

  const [showModal, setShowModel] = useState(false);
  const [updateId, setUpdateId] = useState("")
  const [sourceState, setSourceState] = useState({
    sourceName: "",
    createdAt: new Date(),
    createdBy: names
  })
  console.log(updateId);

  const dispatch = useDispatch();
  const data = useSelector((state) => {
    return state.source.sourceList
  })

  console.log(data);

  const handleShowModel = () => {
    setShowModel(true)
  }

  const handleCloseModel = () => {
    setShowModel(false)
  }

  // Post method

  const onChangeHandler = (name, value) => {
    setSourceState({
      ...sourceState,
      [name]: value
    })
  }
  const addSource = (e) => {
    e.preventDefault();
    try {
      const { data } = axiosInstance.post("LeadSourceApi/Post", { ...sourceState })
      toast("succeess")
      handleCloseModel()
      getSourceApi()
    } catch (error) {
      console.log(error);
    }
  }

  //Get method

  useEffect(() => {
    getSourceApi();
  }, [])

  const getSourceApi = async () => {
    try {
      const { data } = await axiosInstance.get("LeadSourceApi/Get")
      dispatch(
        updateSourceList(data)
      )
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  // Delete
  const onDeleteSource = (id) => {
    deleteSourceApi(id);
  }

  const deleteSourceApi = async (id) => {
    try {
      const { data } = axiosInstance.delete(`LeadSourceApi/Delete/${id}`)
      toast("Delete")
      getSourceApi()
    } catch (error) {
      console.log(error);
    }
  }

  // Update
  const onEditSource = (id) => {
    setUpdateId(id)
    handleShowModel()
    updateSourceApi(id)
  }

  const updateSourceApi = async (updateId) => {
    console.log(updateId);
    try {
      const { data } = await axiosInstance.get(`LeadSourceApi/${updateId}`)
      console.log(data);
      setSourceState(data);
    } catch (error) {
      console.log(error);
    }
  }


  return (
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
                            Add Source
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
                                value={sourceState.source}
                                onChange={(e) => onChangeHandler("sourceName", e.target.value)}
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
                            onClick={addSource}
                          >
                            {updateId ? "Update" : "Add"}
                          </button>
                          <ToastContainer />
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
                        <tr key={item.id}>
                          <td>{index + 1}</td>
                          <td>{item.sourceName}</td>
                          <td>{item.createdBy}</td>
                          <td>{item.createdAt}</td>
                          <td>
                            <button type="button" className="btn btn-info" title="Edit" onClick={() => onEditSource(item.id)}><i
                              className="fa fa-edit"></i></button>
                            <button type="button" data-type="confirm"
                              className="btn btn-danger js-sweetalert" title="Delete" onClick={() => onDeleteSource(item.id)}><i
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
      <ToastContainer autoClose={900} />
    </div>

  )
}

export default LeadSource