import { Text, Img } from "..";
import React from "react";

export default function Pagination({
  currentPage = 1,
  totalPages = 10,
  onPageChange,
  ...props
}) {
  const pageNumbers = [];

  // Tạo danh sách số trang
  for (let i = 1; i <= totalPages; i++) {
    if (i <= 2 || i === totalPages || (i >= currentPage - 1 && i <= currentPage + 1)) {
      pageNumbers.push(i);
    }
  }

  // Loại bỏ các số trùng lặp
  const uniqueNumbers = [...new Set(pageNumbers)];

  return (
    <div {...props} className={`${props.className} flex items-center justify-center w-[48%] md:w-full mt-6 gap-[22px]`}>
      {/* Nút lùi */}
      <Img 
        src="images/img_clock.svg" 
        alt="Previous Page" 
        className="h-[50px] w-[50px] cursor-pointer" 
        onClick={() => currentPage > 1 && onPageChange(currentPage - 1)} 
      />
      
      {/* Hiển thị số trang */}
      {uniqueNumbers.map((number, index) => (
        <React.Fragment key={number}>
          <Text
            onClick={() => onPageChange(number)}
            className={`ml-[10px] flex h-[40px] w-[40px] items-center justify-center rounded-[20px] cursor-pointer 
              ${number === currentPage ? 'bg-green-a700 text-gray-100_01' : 'border border-solid border-gray-100_01 bg-gray-100_01 text-gray-900'}`}
          >
            {number}
          </Text>
          {/* Hiển thị dấu "..." nếu cần */}
          {index === uniqueNumbers.length - 1 && number !== totalPages && totalPages > 3 && (
            (number < totalPages - 1) && <Text className="ml-[10px] text-gray-900">...</Text>
          )}
        </React.Fragment>
      ))}

      {/* Hiển thị trang cuối cùng nếu không có dấu "..." */}
      {totalPages > 2 && !uniqueNumbers.includes(totalPages) && (
        <Text 
          onClick={() => onPageChange(totalPages)} 
          className={`ml-[10px] flex h-[40px] w-[40px] items-center justify-center rounded-[20px] cursor-pointer 
            ${totalPages === currentPage ? 'bg-green-a700 text-gray-100_01' : 'border border-solid border-gray-100_01 bg-gray-100_01 text-gray-900'}`}
        >
          {totalPages}
        </Text>
      )}

      {/* Nút tiến */}
      <Img 
        src="images/img_arrow_right.svg" 
        alt="Next Page" 
        className="h-[50px] w-[50px] cursor-pointer" 
        onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)} 
      />
    </div>
  );
}
