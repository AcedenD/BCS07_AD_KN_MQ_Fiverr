
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllService } from '../../redux/slices/serviceSlice';
import ServiceTable from '../../Components/ServiceTable/ServiceTable';
import { Drawer } from 'antd';
import FormAddService from '../../Components/FormServices/FormAddService';

const ServiceManage = () => {
  const [services, setServices] = useState([]);
  const [formKey, setFormKey] = useState(0);



  const dispatch = useDispatch();
  //edit
  const [formData, setFormData] = useState({});
  const { serviceData } = useSelector((state) => state.services);
  const [values, setValues] = useState({});
  const loadService = (service) => {
    setValues(service);
  };

  useEffect(() => {
    dispatch(getAllService());
  }, [dispatch]);

  //Drawers

  const [drawerVisible, setDrawerVisible] = useState(false);

  const [open, setOpen] = useState(false);
  const formRef = useRef();


  const showDrawer = (serviceData) => {
    setFormData(serviceData);
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
      <i class="fa-solid fa-plus"></i>  Thêm Service
    </button>
    {/* <AdminSearch onSearch={handleSearch} /> */}

    <Drawer
      title="Service"
      width={720}
      onClose={onClose}
      open={open}
      bodyStyle={{ paddingBottom: 80 }}>
        <FormAddService/>
      {/* <FormAddService formData={formData} formKey={formKey} service={values} /> */}
    </Drawer>
    <ServiceTable showDrawer={showDrawer} />

  </div>)
}
export default ServiceManage
