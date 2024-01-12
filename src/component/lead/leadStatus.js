import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { axiosInstance } from '../../features/service/config';
import { useDispatch, useSelector } from 'react-redux';
import { updateStatus } from "../../features/redux/slice/statusSlice";

const proStatus ={
  statusName: "",
    createdBy: "Admin",
    createdAt: new Date()
}

const LeadStatus = () => {
  
  const dispatch = useDispatch()
  const [showModel, setShowModel] = useState(false);
  const [statusState, setStatusState] = useState(proStatus)

  const [updateId, setUpdateId] = useState("")

  const handleShowModel = () => {
    setShowModel(true)
  }

  const handleCloseModel = () => {
    setShowModel(false)
  }

  const data = useSelector((state) => {
    return state.status.statusList
  })


  useEffect(() => {
    getstatusFromApi()
  }, [])

  const getstatusFromApi = async () => {
    try {
      const { data } = await axiosInstance.get("LeadStatusApi/Get")
      dispatch(
        updateStatus(data)
      )
    } catch (error) {
      console.log(error);
    }
  }

  const onChangeHandler = (name, value) => {
    setStatusState({
      ...statusState,
      [name]: value
    })
  }

  const addStatus = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axiosInstance.post("LeadStatusApi/Post", { ...statusState }, {headers: { 'Content-Type': "multipart/form-data" }})
      toast("Add Success");
      handleCloseModel();
      getstatusFromApi();
    } catch (error) {
      console.log(error);
    }
  }
  const onEditStatus = (id) => {
    findStatusApi(id)
    setUpdateId(id)
  }

  const findStatusApi = async (id) => {
    try {
      const { data } = await axiosInstance.get(`LeadStatusApi/${id}`)
      handleShowModel();
      setStatusState(data)
    } catch (error) {
      console.log(error);
    }
  }

  const update=async()=>{
    try{
     const {data} =await axiosInstance.put(`LeadStatusApi/Update/${updateId}`, {...statusState})
     toast("update Successfully");
     handleCloseModel();
     getstatusFromApi();
     setStatusState(proStatus)
     
    }catch(error){
      console.log(error);
    }
  }

  const onDeleteStatus = async (id) => {
    try {
      const { data } = await axiosInstance.delete(`LeadStatusApi/Delete/${id}`)
      toast("Delete successfully");
      getstatusFromApi();
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
                    className={`modal fade ${showModel ? 'show' : ''}`} id="exampleModal"
                    tabIndex={-1}
                    role="dialog"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                    style={{ display: showModel ? 'block' : 'none' }}
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
                                value={statusState.statusName}
                                onChange={(e) => onChangeHandler("statusName", e.target.value)}
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
                            onClick={updateId?update:addStatus}
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
                        <tr key={item.id}>
                          <td>{index + 1}</td>
                          <td>{item.statusName}</td>
                          <td>{item.createdBy}</td>
                          <td>{item.createdAt}</td>
                          <td>
                            <button type="button" className="btn btn-info" title="Edit" onClick={() => onEditStatus(item.id)}><i
                              className="fa fa-edit"></i></button>
                            <button type="button" data-type="confirm"
                              className="btn btn-danger js-sweetalert" title="Delete" onClick={() => onDeleteStatus(item.id)}><i
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

export default LeadStatus