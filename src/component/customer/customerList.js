import React, { useEffect } from 'react';
import { axiosInstance } from '../../features/service/config';
import { useDispatch, useSelector } from 'react-redux';
import { updateCustomerList } from '../../features/redux/slice/customerListSlice';

const CustomerList = () => {
    const dispatch = useDispatch()

    const data = useSelector((state) => {
        return state.customer.customerList
    })

    console.log(data);
    useEffect(() => {
        getCustomerListApi();
    }, [])
    const getCustomerListApi = async () => {
        try {
            const { data } = await axiosInstance.get("https://app.mycllc.ca/skandha-api/CustomersApi/GetQueary")
            dispatch(
                updateCustomerList(data)
            )
            console.log(data);
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div id="main-content">
            <div className="container-fluid">
                <div className="block-header">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <h2>Customers</h2>
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <a href="index.html">
                                        <i className="fa fa-group" />
                                    </a>
                                </li>
                                <li className="breadcrumb-item">Customers</li>
                                <li className="breadcrumb-item active">Customer details</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row clearfix">
                    <div className="col-24">
                        <div className="card">
                            <div className="table-responsive">
                                <table
                                    className="table table-hover mb-0"
                                    style={{ width: "100%" }}
                                    id="property-datatable"
                                >
                                    <thead>
                                        <tr>
                                            <th>S.No</th>
                                            <th>Name</th>
                                            <th>Contact</th>
                                            <th>Plot.No</th>
                                            <th>Payment</th>
                                            <th>Address</th>
                                            <th>kyc</th>
                                            <th>Registration Date</th>
                                            <th>Sale Deed</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            data.map((item, index) => {
                                                return (
                                                    <tr>
                                                        <td>{index + 1}</td>
                                                        <td>{item.name}</td>
                                                        <td>{item.number}</td>
                                                        <td>{item.plotNo}</td>
                                                        <td>{item.paymentDetailes}</td>
                                                        <td>{item.address}</td>
                                                        <td>{item.kyc}</td>
                                                        <td>{item.registrationDate}</td>
                                                        <td>{item.saleDeed}</td>
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

export default CustomerList