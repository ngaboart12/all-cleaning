import React from 'react'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import Table from '@/components/reusable/tables/Table';

const AdminHome = () => {
  const bookings = [
    {
        "#": 1,
        id: 1,
        name: "Ethan Roberts",
        service: "Deep Cleaning",
        date: "17 June 2024",
        status: "Active",
        duration: "2 hours",
        description: "A comprehensive cleaning service focusing on every corner of your home for a spotless result.",
        actions: "Edit/Delete",
    },
    {
        "#": 2,
        id: 2,
        name: "Olivia Martinez",
        service: "Office Cleaning",
        date: "17 December 2024",
        status: "Active",
        duration: "4 hours",
        description: "Tailored cleaning solutions for offices, ensuring a clean and professional environment.",
        actions: "Edit/Delete",
    },
    {
        "#": 3,
        id: 3,
        name: "Mason Johnson",
        service: "Carpet Cleaning",
        date: "24 January 2025",
        status: "Inactive",
        duration: "1.5 hours",
        description: "Specialized cleaning for carpets to remove dirt, stains, and allergens effectively.",
        actions: "Edit/Delete",
    },
   
];

  const columns = [
    { field: '#', header: '#' },
    { field: 'name', header: 'Customer Name' },
    { field: 'service', header: 'Service Name' },
    { field: 'date', header: 'Estimated Date' },
    { field: 'duration', header: 'Duration' },
    { field: 'actions', header: 'Actions' },
  ];

  return (
    <div className='min-h-[100vh] px-[30px] flex flex-col gap-[20px] w-full bg-gray-100 py-4'>
      <div className='flex flex-row gap-[10px] w-full'>
        <div className=' grid grid-cols-2 gap-[10px] w-[50%]'>
          <div className='p-3 border bg-white rounded-[4px] flex flex-col gap-[4px]'>
            <span className='text-[16px] text-primary font-[600]'>Customers</span>
            <h1 className='text-[20px] text-black font-[500]'>104</h1>
          </div>
          <div className='p-3 border bg-white rounded-[4px] flex flex-col gap-[4px]'>
            <span className='text-[16px] text-primary font-[600]'>Users</span>
            <h1 className='text-[20px] text-black font-[500]'>104</h1>
          </div>
          <div className='p-3 border bg-white rounded-[4px] flex flex-col gap-[4px]'>
            <span className='text-[16px] text-primary font-[600]'>Bookings</span>
            <h1 className='text-[20px] text-black font-[500]'>104</h1>
          </div>
          <div className='p-3 border bg-white rounded-[4px] flex flex-col gap-[4px]'>
            <span className='text-[16px] text-primary font-[600]'>Revenue</span>
            <h1 className='text-[20px] text-black font-[400]'>104 $</h1>
          </div>
        </div>
        <div className=' flex flex-col bg-white rounded-[6px] p-4 w-[50%]'>
          <div className='w-full items-center justify-between  gap-[10px] flex flex-row'>
            <span className='font-[600] text-black text-[14px]'>Weekly Reports</span>
            <div className='cursor-pointer'>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.25 4.5C8.25 5.24168 8.03007 5.96671 7.61801 6.58339C7.20596 7.20008 6.62029 7.68072 5.93506 7.96455C5.24984 8.24838 4.49584 8.32264 3.76841 8.17795C3.04098 8.03325 2.3728 7.6761 1.84835 7.15165C1.3239 6.62721 0.966751 5.95902 0.822057 5.23159C0.677362 4.50416 0.751625 3.75016 1.03545 3.06494C1.31928 2.37972 1.79993 1.79405 2.41661 1.38199C3.0333 0.969935 3.75832 0.750002 4.5 0.750002C5.49456 0.750002 6.44839 1.14509 7.15165 1.84835C7.85491 2.55161 8.25 3.50544 8.25 4.5ZM13.5 8.25C14.2417 8.25 14.9667 8.03007 15.5834 7.61801C16.2001 7.20596 16.6807 6.62029 16.9646 5.93506C17.2484 5.24984 17.3226 4.49584 17.1779 3.76841C17.0333 3.04098 16.6761 2.3728 16.1517 1.84835C15.6272 1.3239 14.959 0.966751 14.2316 0.822057C13.5042 0.677362 12.7502 0.751625 12.0649 1.03545C11.3797 1.31928 10.794 1.79993 10.382 2.41661C9.96994 3.0333 9.75 3.75832 9.75 4.5C9.75 5.49456 10.1451 6.44839 10.8484 7.15165C11.5516 7.85491 12.5054 8.25 13.5 8.25ZM4.5 9.75C3.75832 9.75 3.0333 9.96994 2.41661 10.382C1.79993 10.794 1.31928 11.3797 1.03545 12.0649C0.751625 12.7502 0.677362 13.5042 0.822057 14.2316C0.966751 14.959 1.3239 15.6272 1.84835 16.1517C2.3728 16.6761 3.04098 17.0333 3.76841 17.1779C4.49584 17.3226 5.24984 17.2484 5.93506 16.9646C6.62029 16.6807 7.20596 16.2001 7.61801 15.5834C8.03007 14.9667 8.25 14.2417 8.25 13.5C8.25 12.5054 7.85491 11.5516 7.15165 10.8484C6.44839 10.1451 5.49456 9.75 4.5 9.75ZM16.5 12.75H14.25V10.5C14.25 10.3011 14.171 10.1103 14.0303 9.96967C13.8897 9.82902 13.6989 9.75 13.5 9.75C13.3011 9.75 13.1103 9.82902 12.9697 9.96967C12.829 10.1103 12.75 10.3011 12.75 10.5V12.75H10.5C10.3011 12.75 10.1103 12.829 9.96967 12.9697C9.82902 13.1103 9.75 13.3011 9.75 13.5C9.75 13.6989 9.82902 13.8897 9.96967 14.0303C10.1103 14.171 10.3011 14.25 10.5 14.25H12.75V16.5C12.75 16.6989 12.829 16.8897 12.9697 17.0303C13.1103 17.171 13.3011 17.25 13.5 17.25C13.6989 17.25 13.8897 17.171 14.0303 17.0303C14.171 16.8897 14.25 16.6989 14.25 16.5V14.25H16.5C16.6989 14.25 16.8897 14.171 17.0303 14.0303C17.171 13.8897 17.25 13.6989 17.25 13.5C17.25 13.3011 17.171 13.1103 17.0303 12.9697C16.8897 12.829 16.6989 12.75 16.5 12.75Z" fill="black" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full flex flex-row gap-[10px] items-center'>
        <div className='w-full flex flex-col gap-[20px] py-4 bg-white p-4 rounded-[10px]'>
          <div className='w-full flex flex-row items-center justify-between'>
            <span className='text-[16px] font-[700]'>Latest Orders</span>
            <div className='flex flex-row gap-[10px] items-center'>
              <div className='flex flex-row gap-[10px] items-center'>
                <div className='border p-4 rounded-[6px] px-[10px] cursor-pointer py-[10px] flex flex-row gap-[10px]'>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.5 5.83325H17.5" stroke="#292D32" stroke-linecap="round" />
                    <path d="M5 10H15" stroke="#292D32" stroke-linecap="round" />
                    <path d="M8.33333 14.1667H11.6667" stroke="#292D32" stroke-linecap="round" />
                  </svg>
                  <span className='text-[14px]'>Filter</span>

                </div>
              </div>
              <div className='flex flex-row gap-[10px] items-center'>
                <div className='border p-4 rounded-[6px] px-[10px] cursor-pointer py-[10px] flex flex-row gap-[10px]'>
                  <select className=' text-[14px]'>
                    <option>Recents</option>
                  </select>
                </div>
              </div>
              <a href='/admin/bookings' className='flex flex-row px-3 gap-[10px] items-center'>
                <span className='text-[14px] font-[600] text-primary'>View All</span>
              </a>
            </div>
          </div>
          <Table columns={columns} data={bookings} />

        </div>
      </div>


    </div>
  )
}

export default AdminHome