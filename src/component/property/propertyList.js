import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { axiosInstance } from '../../features/service/config';
import { updatePropertyList } from '../../features/redux/slice/propertyListSlice';

const PropertyList = () => {
  const dispatch = useDispatch();

  const datas = useSelector((state) => {
    return state.listPropertyReducer.propertyList
  })
  console.log(datas);

  useEffect(() => {
    getPropertyListApi();
  }, [])


  const getPropertyListApi = async () => {
    try {
      const { data } = await axiosInstance.get("https://app.mycllc.ca/skandha-api/PropertyApi/Get");
      dispatch(
        updatePropertyList(data)
      )
      // console.log(data);
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
              <h2>Properties</h2>
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="index.html">
                    <i className="fa fa-building-o" />
                  </a>
                </li>
                <li className="breadcrumb-item">Property</li>
                <li className="breadcrumb-item active">Properties</li>
              </ul>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="d-flex flex-row-reverse">
                <div className="page_action">
                  <a href="/property/newproperty.html" className="btn btn-primary">
                    New Property
                  </a>
                  {/* <a href="properties.html" class="btn btn-secondary">Property Grid</a> */}
                </div>
                <div className="p-2 d-flex"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="body">
                <div className="row">
                  <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        id="plotNumber"
                        placeholder="Plot No"
                      />
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="form-group">
                      <select
                        className="form-control show-tick filter-property"
                        id="propLocation"
                      >
                        <option value="">Location</option>
                        <option value="Pondichery">Pondichery</option>
                        <option value="Chennai">Chennai</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="form-group">
                      <select
                        className="form-control show-tick filter-property"
                        id="propStatus"
                      >
                        <option value="">Status</option>
                        <option value="Sold">Sold</option>
                        <option value="Available">For Sale</option>
                        <option value="Booked">Booked</option>
                        <option value="Sold">Sold</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="form-group">
                      <select
                        className="form-control show-tick filter-property"
                        id="propCategory"
                      >
                        <option value="">Category</option>
                        <option value="Premium">Premium</option>
                        <option value="Horizon">Horizon</option>
                        <option value="Normal">Normal</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="table-responsive">
                <table
                  className="table table-hover mb-0"
                  style={{ width: "100%" }}
                  id="property-datatable"
                >
                  <thead>
                    <tr>
                      <th className="border-top-0">S.No</th>
                      <th className="border-top-0">Plot Num</th>
                      <th className="border-top-0">Title</th>
                      <th className="border-top-0">Location</th>
                      <th className="border-top-0">Plot Facing</th>
                      <th className="border-top-0">Area(sq.f)</th>
                      <th className="border-top-0">North</th>
                      <th className="border-top-0">South</th>
                      <th className="border-top-0">East</th>
                      <th className="border-top-0">West</th>
                      <th className="border-top-0">Category</th>
                      <th className="border-top-0">Status</th>
                      <th className="border-top-0">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      datas.map((item, index) => {
                        return (
                          <tr>
                            <td>{index + 1}</td>
                            <td>{item.plotNo}</td>
                            <td>{item.propertyName}</td>
                            <td>{item.propertyLocation}</td>
                            <td>{item.plotFacing}</td>
                            <td>{item.areaInSquareFeet}</td>
                            <td>{item.north}</td>
                            <td>{item.south}</td>
                            <td>{item.east}</td>
                            <td>{item.west}</td>
                            <td>{item.category}</td>
                            <td>{item.status}</td>
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
  )
}

export default PropertyList