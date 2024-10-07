import React from 'react';

type Header = {
  key: string;
  title: string;
};

type Props = {
  headers: Header[];
  data: Record<string, any>[];
};

const InfoTable = ({ headers, data }: Props) => {
  return (
    <div className='flex w-full'>
      <table className='w-full'>
        <thead>
          <tr className='h-10'>
            {headers.map((header, index) => (
              <th className='text-start px-3 text-[14px] text-[#777777] font-[400]' key={index}>
                {header.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, rowIndex) => (
            <tr className={` ${rowIndex %2== 0 ? "bg-[#FAFAFA]" : "bg-white"} h-10`} key={rowIndex}>
              {headers.map((header, colIndex) => (
                <td className={` ${header.key == "Price" && "font-[700]"} px-3 text-start text-[14px] text-[#000000]`} key={colIndex}>
                  {item[header.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InfoTable;
