
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllJobType } from '../../redux/slices/jobTypeSlice';
import JobTypeTable from '../../Components/JobTypeTable/JobTypeTable';
import { Drawer } from 'antd';

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

  //Drawers

  const [drawerVisible, setDrawerVisible] = useState(false);

  const [open, setOpen] = useState(false);
  const formRef = useRef();


  const showDrawer = (jobTypeData) => {
    setFormData(jobTypeData);
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
    setFormData({});
    setFormKey(prevKey => prevKey + 1);
  };


  return (<div >
    <button
      className='bg-green-600 px-5 py-2 text-white rounded-lg mb-5 ' onClick={showDrawer} >
      <i class="fa-solid fa-plus"></i>  Thêm Job
    </button>
    {/* <AdminSearch onSearch={handleSearch} /> */}

    <Drawer
      title="Job Type"
      width={720}
      onClose={onClose}
      open={open}
      bodyStyle={{ paddingBottom: 80 }}>
      {/* <FormAddJobType formData={formData} formKey={formKey} jobType={values} /> */}
    </Drawer>
    <JobTypeTable showDrawer={showDrawer} />

  </div>)
}
export default JobTypeManage
