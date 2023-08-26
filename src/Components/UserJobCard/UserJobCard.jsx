
import React, { useRef, useState } from 'react'
import { Space, Card, Col, Row, Typography } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { serviceServ } from '../../services/serviceServices';
import { layDanhSachDaThue } from '../../redux/slices/serviceSlice';


const UserJobCard = () => {
  const { danhSachDaThueData } = useSelector((state) => state.services);
  const dispatch = useDispatch();
  const ref = useRef();

  const { Title, Text } = Typography;

  const handleDelete = (id) => {
    const userConfirmed = window.confirm("Do you really want to delete?");
    if (userConfirmed) {
      serviceServ
      .deleteService(id)
        .then((res) => {
          alert('Delete successful');
          dispatch(layDanhSachDaThue());
        })
        .catch((err) => {
          alert("There is a problem deleting");
        });
    }
  };
  return (
    <>
      <div className="card-container">
        {danhSachDaThueData.map((record) => (
          <Card key={record.id} className="mt-4">
            <Row>
              <Col xs={24} sm={24} md={8} xl={8}>
                <img src={record.congViec.hinhAnh} alt="Job" className="rounded" />
                <div >
                  <Space direction="horizontal" >
                    <Text type="warning" style={{ fontSize: '20px' }}><i class="fa-solid fa-star"></i> {record.congViec.saoCongViec}</Text>
                    <Text type="secondary" style={{ fontSize: '18px' }}>({record.congViec.danhGia})</Text>
                  </Space>
                </div>
              </Col>
              <Col xs={24} sm={24} md={16} xl={16} className='p-2'>
                <Title level={4} >
                  {record.congViec.tenCongViec}
                </Title>
                <p>{record.congViec.moTaNgan}</p>

                <div style={{ textAlign: 'right' }}>
                  <p style={{ fontSize: '30px' }}>${record.congViec.giaTien}</p></div>
                <div style={{ textAlign: 'right' }}>
                  <button
                    className="font-bold py-2 px-5 me-3 bg-red-600 text-white rounded-lg hover:bg-red-700 duration-500"
                    title="Delete"
                    onClick={() => handleDelete(record.id)}
                  >
                    Delete
                  </button>
                  <NavLink
                className="font-bold py-2 px-5 bg-green-600 text-white rounded-lg hover:bg-green-700 duration-500"
                title="More Detail"
                to={`/jobDetail/${record.congViec.id}`} 
              >
                More Detail
              </NavLink>
                </div>
              </Col>
            </Row>
          </Card>
        ))}
      </div>
    </>
  )
}


export default UserJobCard
  ;
