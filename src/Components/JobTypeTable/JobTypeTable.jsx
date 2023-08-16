
import React, { useRef, useState } from 'react'
import { Drawer, Space, Table, Tag } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { jobTypeServ } from '../../services/jobTypeServices';
import { getAllJobType } from '../../redux/slices/jobTypeSlice';
import FormEditMJobType from '../FormJobType/FormEditJobType';

const JobTypeTable = () => {
const { jobTypeData } = useSelector((state) => state.jobTypes);
console.log(jobTypeData);

  const dispatch = useDispatch();
  const ref = useRef();

  const columns = [
    {

      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Job Type',
      dataIndex: 'tenLoaiCongViec',
      key: 'tenLoaiCongViec',


    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <button
            className="py-2 px-5 bg-red-600 text-white rounded-lg hover:bg-red-700 suration-500"
            title="Xóa"
            onClick={() => {
              const userConfirmed = window.confirm(
                "Do you really want to delete?"
              );
              if (userConfirmed) {
                jobTypeServ
                  .deleteJobType(record.id)
                  .then((res) => {
                    alert("delete successful");
                    dispatch(getAllJobType());
                  })
                  .catch((err) => {
                    console.log(err);
                    alert("There is a problem deleting");
                  });
              }
            }}
          >
            <i class="fa-solid fa-trash-can"></i>
          </button>
          <button
      className='py-2 px-5 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 suration-500'
      title="Sửa" onClick={showDrawer2} >
      <i class="fa-solid fa-pen-to-square"></i>
    </button>
          {/* <NavLink
            to={`/admin/jobType/edit?jobTypeId=${record.jobType}`} 
            className='py-2 px-5 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 suration-500'
            title="Sửa"
          >
             <i class="fa-solid fa-pen-to-square"></i>
          </NavLink> */}
        </Space>
      ),
    },
  ];

    //Drawers 2
    const [drawer2Visible, setDrawer2Visible] = useState(false);
    const [open2, setOpen2] = useState(false);
    const formRef = useRef();
    const showDrawer2 = (jobTypeData) => {
      // setFormData(jobTypeData);
      setOpen2(true);
    };
    const onClose2 = () => {
      setOpen2(false);
      // setFormData({});
      // setFormKey(prevKey => prevKey + 1);
    };

  return (
    <>
    
    <Drawer
      title="Job Type"
      width={720}
      onClose={onClose2}
      open={open2}
      bodyStyle={{ paddingBottom: 80 }}>
        <FormEditMJobType/>
      {/* <FormAddJobType formData={data} formKey={formKey} jobType={values} /> */}
    </Drawer>
    <Table columns={columns} dataSource={jobTypeData} />
</>
  )
}


export default JobTypeTable;
