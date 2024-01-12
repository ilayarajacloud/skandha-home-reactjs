import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { axiosInstance } from "../../features/service/config";
import { useDispatch, useSelector } from 'react-redux';
import { updatePlotFacing } from "../../features/redux/slice/plotFacingSlice";

const PropertyPlotFacing = () => {

  const [showModel, setShowModel] = useState(false);
  const [plotState, setPlotState] = useState({
    plotFacing: ""
  })
  const [updateId, setUpdateId] = useState("");
  console.log(updateId);

  const dispatch = useDispatch();
  const data = useSelector((state) => {
    return state.facing.plotFacingList
  })

  const handleShowModel = () => {
    setShowModel(true)
  }
  const handleCloseModel = () => {
    setShowModel(!true)
  }
  const onChangeHandler = (name, value) => {
    setPlotState({
      ...plotState,
      [name]: value
    })
  }

  useEffect(() => {
    getPlotFacingApi()
  }, [])

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

  const addPlotFacing = async (e) => {
    e.preventDefault()
    try {
      const { data } = await axiosInstance.post(`PlotFacingApi/post`, { ...plotState })
      toast("Add property Facing Successfully");
      handleCloseModel()
      getPlotFacingApi()
    } catch (error) {
      console.log(error);
    }
  }

  const onDeleteFacing = async (id) => {
    try {
      const { data } = await axiosInstance.delete(`PlotFacingApi/Delete/${id}`)
      toast("Delete Successfully");
      getPlotFacingApi();
    } catch (error) {
      console.log(error);
    }
  }

  const onEditFacing = (id) => {
    getplotFcaingApi(id)
    setUpdateId(id)
  }

  const getplotFcaingApi=async(id)=>{
    try {
      const {data} =await axiosInstance.get(`PlotFacingApi/${id}`)
      setPlotState(data);
      handleShowModel()
    } catch (error) {
      console.log(error);
    }
  }

  const updatePlotFacing =async () => {
    try {
     const {data} =await axiosInstance.put(`PlotFacingApi/Update/${updateId}`, {...plotState})
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
                <li className="breadcrumb-item active">Plot Facing</li>
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
                    Add Plot Facing
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
                            Add Plot Facing
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
                                Plot Facing
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                value={plotState.plotFacing}
                                onChange={(e) => onChangeHandler("plotFacing", e.target.value)}
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
                            onClick={updateId ? updatePlotFacing : addPlotFacing}
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
                    <td>Plot Facing</td>
                    <td>Created By</td>
                    <td>Created On</td>
                    <td>Action</td>
                  </tr>
                </thead>
                <tbody>
                  {
                    data.map((item, index) => {
                      return (
                        <tr key={item.plotFacingId}>
                          <td>{index + 1}</td>
                          <td>{item.plotFacing}</td>
                          <td>{item.createdBy}</td>
                          <td>{item.createdOn}</td>
                          <td>
                            <button type="button" className="btn btn-info" title="Edit" onClick={() => onEditFacing(item.plotFacingId)}><i
                              className="fa fa-edit"></i></button>
                            <button type="button" data-type="confirm"
                              className="btn btn-danger js-sweetalert" title="Delete" onClick={() => onDeleteFacing(item.plotFacingId)}><i
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
    </div>)
}

export default PropertyPlotFacing