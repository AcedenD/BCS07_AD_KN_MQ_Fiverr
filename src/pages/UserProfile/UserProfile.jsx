import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Card } from 'antd';
import FormUserProfile from "../../Components/FormUserProfile/FormUserProfile";
import UserJobCard from "../../Components/UserJobCard/UserJobCard";
import { layDanhSachDaThue } from '../../redux/slices/serviceSlice';

const UserProfile = () => {
  const [services, setServices] = useState([]);
  const [formKey, setFormKey] = useState(0);
  const dispatch = useDispatch();
   //edit
   const [formData, setFormData] = useState({});
   const { layDanhSachDaThueData } = useSelector((state) => state.services);
   const [values, setValues] = useState({});
   const loadService = (service) => {
     setValues(service);
   };
   useEffect(() => {
     dispatch(layDanhSachDaThue());
   }, [dispatch]);
  
  return (
    <div>
     <Row>
     <Col xs={24} sm={24} md={8} xl={8}>
    <FormUserProfile />
  </Col>
  <Col xs={24} sm={24} md={16} xl={16}>
    <div>
    <Card>
    <div className="flex justify-between items-center">
        <div className="font-bold">
            It seems that you don't have any active Gigs.
        </div>
        <button className="font-bold py-2 px-5 bg-green-600 text-white rounded-lg hover:bg-green-700 duration-500" 
                title="Delete">
            Create a new Gig
        </button>
    </div>
</Card>

   
    </div>
  <UserJobCard/>
  </Col>
  </Row>
  </div>
    
  );
};

export default UserProfile;
