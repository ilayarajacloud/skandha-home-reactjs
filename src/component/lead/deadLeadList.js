import React, { useEffect } from 'react'
import { axiosInstance } from '../../features/service/config';
import {updateDeadList} from '../../features/redux/slice/deadListSlice';
import { useDispatch, useSelector } from 'react-redux';

const DeadLeadList = () => {
const dispatch = useDispatch();

const data = useSelector((state)=>{
  return state.deadlist.deadList
})

console.log(data);

  useEffect(() => {
    getDeadListFromApi()
  }, [])

  const getDeadListFromApi = async () => {
    try {
      const { data } = await axiosInstance.get("https://app.mycllc.ca/skandha-api/LeadApi/GetDeadLead")
      console.log(data);
      dispatch(
        updateDeadList(data)
      )
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
                <h2>Manage Lead</h2>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="index.html">
                      <i className="fa fa-user-circle-o" />
                    </a>
                  </li>
                  <li className="breadcrumb-item">Leads</li>
                  <li className="breadcrumb-item active">Manage Lead</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row clearfix">
            <div className="col-24">
              <div className="card">
                <div className="body">
                  <div className="row">
                    <div className="col-lg-3 col-md-4 col-sm-6">
                      <div className="form-group">
                        <select className="form-control show-tick">
                          <option value="">Agent</option>
                          <option value={10}>Ajith</option>
                          <option value={10}>Husaine</option>
                          <option value={20}>Selva</option>
                          <option value={20}>Sudhakar</option>
                          <option value={20}>Sasi</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                      <div className="form-group">
                        <select className="form-control show-tick">
                          <option value="">Status</option>
                          <option value={10}>Enquiry</option>
                          <option value={20}>Interested</option>
                          <option value={30}>Ready to Purchase</option>
                          <option value={40}>Followup Later</option>
                          <option value={50}>Purchased</option>
                          <option value={60}>Not Interested</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                      <div className="input-group mb-3">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            <i className="fa fa-calendar" />
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control datetime"
                          placeholder="Ex: 30/07/2016 23:59"
                        />
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                      <div className="form-group">
                        <select className="form-control show-tick">
                          <option value="">Source</option>
                          <option value={10}>Newspaper Ad</option>
                          <option value={10}>Holdings</option>
                          <option value={20}>Social Media</option>
                          <option value={20}>Flyers</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="table-responsive">
                  <table
                    className="table table-hover mb-0"
                    style={{ width: "100%" }}
                    id="lead-datatable"
                  >
                    <thead>
                      <tr>
                        <th>S.No</th>
                        <th>Name</th>
                        <th>Contact</th>
                        <th>Location</th>
                        <th>Expected Sq.ft</th>
                        <th>Expected budget</th>
                        <th>Status</th>
                        <th>Reason</th>
                        <th>Source</th>
                        <th>Created On</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        data.map((item, index)=>{
                          return(
                            <tr key={item.id}>
                              <td>{index+1}</td>
                              <td>{item.firstName}</td>
                              <td>{item.mobile}</td>
                              <td>{item.address}</td>
                              <td>{item.expectedSqFt}</td>
                              <td>{item.expectedBudget}</td>
                              <td>{item.leadStatus}</td>
                              <td>{item.reason}</td>
                              <td>{item.leadSource}</td>
                              <td>{item.createdOn}</td>
                              <td>
                              <button type="button" class="btn btn-info" title="Edit"><i
                                class="fa fa-edit"></i></button>
                              <button type="button" data-type="confirm"
                                class="btn btn-danger js-sweetalert" title="Delete"><i
                                  class="fa fa-trash-o"></i></button>
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
      </div>

      <div className="modal" id="buyNowModal">
        <div className="modal-dialog">
          <div className="modal-content">
            {/* Modal Header */}
            <div className="modal-header">
              <h4 className="modal-title">Buy Now</h4>
              <button type="button" className="close" data-dismiss="modal">
                ×
              </button>
            </div>
            {/* Modal body */}
            <div className="modal-body">
              <div className="form-group">
                <label htmlFor="sel1">Select Plot Number</label>
                <select className="form-control" id="sel1"></select>
              </div>
              <div className="form-group">
                <label htmlFor="pwd">Payment</label>
                <input type="number" className="form-control" id="inputAmount" />
              </div>
            </div>
            {/* Modal footer */}
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                data-dismiss="modal"
                id="sendPayment"
              >
                Submit
              </button>
              <button type="button" className="btn btn-danger" data-dismiss="modal">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="modal" id="email-modal">
        <div className="modal-dialog">
          <div className="modal-content">
            {/* Modal Header */}
            <div className="modal-header">
              <h4 className="modal-title">Mail</h4>
              <button type="button" className="close" data-dismiss="modal">
                ×
              </button>
            </div>
            {/* Modal body */}
            <div className="modal-body">
              <div className="form-group">
                <label htmlFor="email">To:</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                  id="email"
                />
              </div>
              {/* <div class="form-group">
                <label for="subject">Subject:</label>
                <input type="text" class="form-control" placeholder="Enter Subject" id="subject">
              </div> */}
              <div className="form-group">
                <label htmlFor="message">Message:</label>
                <textarea
                  className="form-control"
                  placeholder="Enter Message"
                  id="message"
                  defaultValue={""}
                />
              </div>
            </div>
            {/* Modal footer */}
            <div className="modal-footer">
              <button type="button" className="btn btn-default" data-dismiss="modal">
                Cancel
              </button>
              <button type="submit" className="btn btn-primary" id="sendEmail">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default DeadLeadList