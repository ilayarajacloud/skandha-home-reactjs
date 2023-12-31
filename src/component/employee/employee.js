import React, { useEffect, useState } from 'react';
import { axiosInstance } from '../../features/service/config';
import { useDispatch, useSelector } from 'react-redux';
import { updateEmplyeeList } from "../../features/redux/slice/emplyoeeListSlice"
import { Link, Navigate, useNavigate } from 'react-router-dom';


const Employee = () => {
  const navigate = useNavigate()
  const [showModal, setShowModal] = useState(false);

  const dispatch = useDispatch();
  const data = useSelector((state) => {
    return state.employee.employeeList
  })
  console.log(data, "datadatadata");
  const getEmployeeApi = async () => {
    try {
      const { data } = await axiosInstance.get("EmployeeApi/GetEmployee");
      dispatch(
        updateEmplyeeList(data)
      )
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getEmployeeApi();
  }, [])

// const onEditEmplyee=async(id)=>{
//   Lin(`/newemployee/${id}`)
// }

const onDeleteEmployee=async(id)=>{
  console.log(id);
  try{
    const {data} = await axiosInstance.delete(`EmployeeApi/Delete/${id}`)
    getEmployeeApi();
  }catch(error){
    console.log(error);
  }
}

  return (
    <div id="main-content">
      <div className="container-fluid">
        <div className="block-header">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <h2>Lists Of Employees</h2>
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="index.html">
                    <i className="fa fa-user-circle-o" />
                  </a>
                </li>
                <li className="breadcrumb-item">Employees</li>
                <li className="breadcrumb-item active">Employees List</li>
              </ul>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="d-flex flex-row-reverse">
                <div className="page_action">
                  <a
                    // href="/skandha/employees/employee.html"
                    href='#'
                    className="btn btn-primary"
                    onClick={() => setShowModal(true)}
                  >
                    Add Employees
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row clearfix">
          <div className="col-24">
            <div className="card">
              {/* <div class="body">
                      </div> */}
              <div className="table-responsive">
                <table
                  className="table table-hover mb-0"
                  style={{ width: "100%" }}
                  id="employee-datatable"
                >
                  <thead>
                    <tr>
                      <th>S.No</th>
                      <th>Name</th>
                      <th>Contact</th>
                      <th>Location</th>
                      <th>Role</th>
                      <th>Gender</th>
                      <th>Address</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      data.map((item, index) => {
                        return (
                          <tr key={item.id}>
                            <td>{index + 1}</td>
                            <td>{item.firstName}</td>
                            <td>{item.mobile}</td>
                            <td>{item.projectLocation}</td>
                            <td>{item.role}</td>
                            <td>{item.gender}</td>
                            <td>{item.address}</td>
                            <td>
                              <Link to={`/newemployee/${item.employeeId}`}>
                              <button type="button" class="btn btn-info" title="Edit"><i
                                class="fa fa-edit"></i></button>
                              </Link>
                              
                              <button type="button" data-type="confirm" onClick={()=>onDeleteEmployee(item.employeeId)}
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
        <div className="modal" id="email-modal" style={{ display: showModal ? 'block' : 'none' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              {/* Modal Header */}
              <div className="modal-header">
                <h4 className="modal-title">Mail</h4>
                <button type="button" className="close" data-dismiss="modal" onClick={() => setShowModal(false)}>
                  ×
                </button>
              </div>
              {/* Modal body */}
              <div className="modal-body">
                {/* <div class="form-group">
                        <label for="email">To:</label>
                        <input type="email" class="form-control" placeholder="Enter email" id="email">
                      </div> */}
                <div className="form-group">
                  <label htmlFor="subject">Subject:</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Subject"
                    id="subject"
                  />
                </div>
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
                <button
                  type="button"
                  className="btn btn-default"
                  data-dismiss="modal"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Employee