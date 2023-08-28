
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllJobType } from '../../redux/slices/jobTypeSlice';
import JobTypeTable from '../../Components/JobTypeTable/JobTypeTable';
import { Drawer } from 'antd';
import FormAddMJobType from '../../Components/FormJobType/FormAddJobType';

const JobTypeManage = () => {
  const [jobTypes, setJobTypes] = useState([]);
  const [formKey, setFormKey] = useState(0);



  const dispatch = useDispatch();
  //edit
  const [formData, setFormData] = useState({});
  const { jobTypeData } = useSelector((state) => state.jobTypes);
  const [values, setValues] = useState({});
  const loadJobType = (jobType) => {
    setValues(jobType);
  };
  useEffect(() => {
    dispatch(getAllJobType());
  }, [dispatch]);

  //Drawers 1
  const [drawer1Visible, setDrawer1Visible] = useState(false);
  const [open1, setOpen1] = useState(false);
  const formRef = useRef();
  const showDrawer1 = () => {
    setFormData();
    setOpen1(true);
  };
  const onClose1 = () => {
    setOpen1(false);
    setFormData({});
  };



  return (<div >
    <button
      className='bg-green-600 px-5 py-2 text-white rounded-lg mb-5 ' onClick={showDrawer1} >
      <i class="fa-solid fa-plus"></i>  ADD NEW
    </button>
    {/* <AdminSearch onSearch={handleSearch} /> */}

    <Drawer
      title="Job Type"
      width={720}
      onClose={onClose1}
      open={open1}
      bodyStyle={{ paddingBottom: 80 }}>
        <FormAddMJobType/>
      {/* <FormAddJobType formData={data} formKey={formKey} jobType={values} /> */}
    </Drawer>
    <JobTypeTable showDrawer1={showDrawer1} />

  </div>)
}
export default JobTypeManage
