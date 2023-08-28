import React, { useEffect, useState } from 'react'
import { Form, Input, DatePicker, Switch, Upload, Button, Col, Row, Space, message } from 'antd';
import { Formik, useFormik } from 'formik';
import { serviceServ } from '../../services/serviceServices';
import { getAllService } from '../../redux/slices/serviceSlice';
import { useDispatch } from 'react-redux';
import moment from 'moment';


const FormEditService = (props) => {
  const congViecID = props.serviceId;
  const [congViec, setCongViec] = useState([]);
  useEffect(() => {
    serviceServ.getServiceDetail(congViecID)
      .then((res) => {
        setCongViec(res.data.content);
      })
      .catch((err) => {
      });
  }, [congViecID]);


  const [messageApi, contextHolder] = message.useMessage();
  const dispatch = useDispatch();

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      id: congViec.id,
      maCongViec: congViec.maCongViec,
      maNguoiThue: congViec.maNguoiThue,
      ngayThue: congViec.ngayThue,
      hoanThanh: congViec.hoanThanh,
    },

    onSubmit: async (values) => {
      try {
        const { id, ...restOfValues } = values;
        const res = await serviceServ.updateService(id, restOfValues);
        messageApi.success("Sửa Công Việc Thành Công");
        dispatch(getAllService());
        formik.resetForm();
      }
      catch (error) {
        messageApi.error(
          error.response.data.content
            ? error.response.data.content
            : "Không hợp lệ"
        );
        formik.resetForm();
      }
    },
  });

  const { handleSubmit, handleChange, values } = formik

  return <>
    {contextHolder}
    <form onSubmit={handleSubmit}>
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
        <div className="w-full">
          <label htmlFor="id" className="block mb-2 text-sm font-medium text-gray-900 ">ID</label>
          <input value={formik.values.id}
            onChange={handleChange}
            type="text"
            name="id"
            readOnly
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5" />
        </div>
        <div className="w-full">
          <label htmlFor="maCongViec" className="block mb-2 text-sm font-medium text-gray-900">Mã Công Việc</label>
          <input
            value={formik.values.maCongViec}
            onChange={handleChange}
            type="text"
            name="maCongViec"
            id="maCongViec"
            placeholder="Xin Nhập Mã Công Việc - 2 chữ số"
            minLength="1"
            maxLength="2"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5" />
        </div>
        <div className="w-full">
          <label htmlFor="maNguoiThue" className="block mb-2 text-sm font-medium text-gray-900">Mã Người Thuê</label>
          <input
            value={formik.values.maNguoiThue}
            onChange={handleChange}
            type="text"
            name="maNguoiThue"
            id="maNguoiThue"
            placeholder="Xin Nhập Mã Người Thuê - 4 chữ số"
            minLength="1"
            maxLength="4"
            pattern="^[0-9]{4}$"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5" />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="ngayThue" className="block mb-2 text-sm font-medium text-gray-900">
            Ngày Thuê Công Việc
          </label>
          <input
            type="date"
            name="ngayThue"
            id="ngayThue"
            placeholder="Xin Nhập Ngày Thuê"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            onChange={handleChange}
            value={moment(formik.values.ngayThue).format('YYYY-MM-DD')}
          />
        </div>

        <div className="w-full flex items-center">
          <label htmlFor="hoanThanh" className="me-2 flex items-center mb-2 text-sm font-medium text-gray-900">
            Hoàn Thành
          </label>
          <Switch
            checked={formik.values.hoanThanh}
            onChange={(value) => { formik.setFieldValue('hoanThanh', value) }}
            name="hoanThanh"
            id="hoanThanh"
            className="form-checkbox h-5 w-5 text-primary-600 "
          />
        </div>
      </div>
      <button type="submit" className="bg-yellow-600 px-5 py-2 text-white rounded-lg mt-4 mb-5 hover:bg-yellow-800">
        Edit Service
      </button>
    </form>
  </>
}

export default FormEditService