import React, { useEffect, useState }  from 'react'
import {  message  } from 'antd';
import { useFormik } from 'formik';
import { jobTypeServ } from '../../services/jobTypeServices';
import { getAllJobType } from '../../redux/slices/jobTypeSlice';
import { useDispatch } from 'react-redux';

const FormEditMJobType= (props) => {
  const jobID = props.jobId;
  const [loaiCongViec, setLoaiCongViec] = useState([]);
  useEffect(() => {
    jobTypeServ.getJobTypeDetail(jobID)
      .then((res) => {
        setLoaiCongViec(res.data.content);
      })
      .catch((err) => {
      });
  }, [jobID]);

const [messageApi, contextHolder] = message.useMessage();
const dispatch = useDispatch();

  const formik = useFormik({
    enableReinitialize:true,
    initialValues: {
    id: loaiCongViec.id,
    tenLoaiCongViec: loaiCongViec.tenLoaiCongViec,
    },
    
    onSubmit: async (values) => {
      try{
        const { id, ...restOfValues } = values;
        const res = await jobTypeServ.updateJobType(id, restOfValues);
        messageApi.success("Sửa Công Việc Thành Công");
        dispatch(getAllJobType());
        formik.resetForm();}
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

const{handleSubmit, handleChange, values} =formik

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
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5"
              readOnly/>
        </div>
        <div className="w-full">
          <label htmlFor="tenLoaiCongViec" className="block mb-2 text-sm font-medium text-gray-900">Job Type</label>
          <input 
          value={formik.values.tenLoaiCongViec}
          onChange={handleChange}
          type="text" 
          name="tenLoaiCongViec"
          id="tenLoaiCongViec"
          placeholder="Xin Nhập Tên Công Việc"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5" />
        </div>        
      </div>
      <button type="submit" className="bg-yellow-600 px-5 py-2 text-white rounded-lg mt-4 mb-5 hover:bg-yellow-800">
        Edit Job Type
      </button>
    </form></>
  
}

export default FormEditMJobType
