import React, { useEffect, useState } from 'react'
import { axiosInstance } from '../../features/service/config';
import { useNavigate, useParams } from 'react-router-dom';


const NewEmplyee = () => {
  const { id } = useParams();

  const editMethod = async (id) => {
    try {
      const { data } = await axiosInstance.get(`EmployeeApi/${id}`);
      console.log(data);
      setInputEmployee(data)
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    editMethod(id)
  }, [id])

  const navigate = useNavigate();
  const [inputEmployee, setInputEmployee] = useState({
    "firstName": "",
    "lastName": "",
    "mobile": "",
    "email": "",
    "gender": "",
    "whatsApp": "",
    "address": "",
    "city": "",
    "projectLocation": "",
    "role": "",
    "password": "",
  });
  const onChangeHandler = (name, value) => {
    setInputEmployee({
      ...inputEmployee,
      [name]: value
    })
  }
  const addNewEmployee = async (e) => {
    e.preventDefault();
    try {
      if (id) {
      const{data} =await axiosInstance.put(`EmployeeApi/Put/${id}`, {...inputEmployee})
      alert("update successfully");
      navigate("/employee")
      } else {
        const { data } = await axiosInstance.post("EmployeeApi/PostEmloyee", { ...inputEmployee })
        alert("add successfully");
        navigate("/employee");
      }
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
              <h2>
                <b>Add Employee</b>
              </h2>
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="index.html">
                    <i className="fa fa-user-circle-o" />
                  </a>
                </li>
                <li className="breadcrumb-item">Employee</li>
                <li className="breadcrumb-item active">Add Employee</li>
              </ul>
            </div>
          </div>
        </div>
        {/* Form */}
        <form id="leadForm" className="myForm needs-validation">
          {/* New Lead */}
          <div className="row clearfix">
            <div className="col-lg-12">
              <div className="card">
                <div className="header">
                  <h2>New Employee</h2>
                </div>
                <div className="body">
                  <div className="row clearfix">
                    <div className="col-sm-4">
                      <div className="form-group">
                        <label htmlFor="fname" className="form-label">
                          First Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          value={inputEmployee.firstName}
                          onChange={(e) => onChangeHandler("firstName", e.target.value)}
                        />
                        <div className="invalid-feedback">
                          Please provide a 'Firstname'.
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="form-group">
                        <label htmlFor="lname" className="form-label">
                          Last Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          value={inputEmployee.lastName}
                          onChange={(e) => onChangeHandler("lastName", e.target.value)}
                        />
                        <div className="invalid-feedback">
                          Please provide a 'Lastname'.
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="form-group">
                        <label htmlFor="number" className="form-label">
                          {" "}
                          Number{" "}
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          value={inputEmployee.mobile}
                          onChange={(e) => onChangeHandler("mobile", e.target.value)}
                        />
                        <div className="invalid-feedback">
                          Please provide a 'Number'.
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4 ">
                      <div className="form-group">
                        <label htmlFor="email" className="form-label">
                          Email
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          value={inputEmployee.email}
                          onChange={(e) => onChangeHandler("email", e.target.value)}
                        />
                        <div className="invalid-feedback">
                          Please provide a 'Email'.
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="form-group">
                        <label htmlFor="gender" className="form-label"
                        >
                          Gender
                        </label>
                        <select className="form-control"
                          value={inputEmployee.gender}
                          onChange={(e) => onChangeHandler("gender", e.target.value)}
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
                    <div className='col-sm-4'>
                      <div className='form-group'>
                        <label className='form-label'>
                          Whatsapp No
                        </label>
                        <input
                          type='text'
                          className='form-control'
                          value={inputEmployee.whatsApp}
                          onChange={(e) => onChangeHandler("whatsApp", e.target.value)}
                        />
                      </div>
                    </div>
                    <div className='col-sm-4'>
                      <div className='form-group'>
                        <label className='form-label'>
                          Project Location
                        </label>
                        <select className='form-control'
                          value={inputEmployee.projectLocation}
                          onChange={(e) => onChangeHandler("projectLocation", e.target.value)}
                        >
                          <option value="" selected="">
                            Choose
                          </option>
                          <option value="Thindivanam">Thindivanam</option>
                        </select>
                      </div>
                    </div>
                    <div className='col-sm-4'>
                      <div className='form-group'>
                        <label className='form-label'>
                          Address
                        </label>
                        <input
                          type='text'
                          className='form-control'
                          value={inputEmployee.address}
                          onChange={(e) => onChangeHandler("address", e.target.value)}
                        />
                      </div>
                    </div>
                    <div className='col-sm-4'>
                      <div className='form-group'>
                        <label className='form-label'>
                          City
                        </label>
                        <input
                          type='text'
                          className='form-control'
                          value={inputEmployee.city}
                          onChange={(e) => onChangeHandler("city", e.target.value)}
                        />
                      </div>
                    </div>
                    <div className='col-sm-4'>
                      <div className='form-group'>
                        <label className='form-label'>
                          Role
                        </label>
                        <input
                          type='text'
                          className='form-control'
                          value={inputEmployee.role}
                          onChange={(e) => onChangeHandler("role", e.target.value)}
                        />
                      </div>
                    </div>
                    <div className='col-sm-4'>
                      <div className='form-group'>
                        <label className='form-label'>
                          Password
                        </label>
                        <input
                          type='text'
                          className='form-control'
                          value={inputEmployee.password}
                          onChange={(e) => onChangeHandler("password", e.target.value)}
                        />
                      </div>
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
                    onClick={addNewEmployee}
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

export default NewEmplyee;