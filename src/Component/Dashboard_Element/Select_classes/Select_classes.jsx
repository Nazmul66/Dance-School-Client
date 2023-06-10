import './Select_classes.css'
import { RiDeleteBin6Line } from 'react-icons/ri';
import useBooked from '../../../CustomLoader/useBooked';
import Swal from 'sweetalert2';

const Select_classes = () => {
    const [ book, refetch ] = useBooked();
    // console.log(book)

    const handleDelete = (id) =>{
    //   console.log("hello", id)
      Swal.fire({
        title: 'Are you sure? Do you want to delete',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
            fetch(`http://localhost:5000/course/${id}`,{
                method: "DELETE"
            })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if(data.deletedCount > 0){
                    refetch();
                    Swal.fire(
                        'Deleted!',
                        'Your item has been deleted.',
                        'success'
                    )
                }
            })
        }
      })

    }

    const total = book.reduce(( sum, item ) => item.price + sum, 0)


    return (
        <div className='py-10 px-5 '>
         <div className='max-w-[850px] mx-auto'>
             <div className='bg-[#FFF] p-[30px]'>
                 <div className='flex lg:flex-row flex-col justify-between items-center mb-7'>
                    <h3 className='text-2xl font-bold uppercase text-[#151515] lg:mb-0 mb-3'>Total Bookings: {book?.length || 0}</h3>
                    <h4 className='text-2xl font-bold uppercase text-[#151515] lg:mb-0 mb-3'>total price: ${total}</h4>
                     {/* <button className='bg-[royalblue] rounded-lg px-2 py-2 text-[#FFF]'>PAY</button> */}
                 </div>

                 <div className="overflow-x-auto w-full">
                     <table className=" w-full">
                         {/* head */}
                     <thead>
                         <tr className='text-center bg-[royalblue] text-[#FFF] font-semibold'>
                             <th className='p-4 whitespace-nowrap text-[14px]'>No.</th>
                             <th className='p-4 whitespace-nowrap text-[14px]'>IMAGE</th>
                             <th className='p-4 whitespace-nowrap text-[14px]'>Dance Name</th>
                             <th className='p-4 whitespace-nowrap text-[14px]'>PRICE</th>
                             <th className='p-4 whitespace-nowrap text-[14px]'>ACTION</th>
                             <th className='p-4 whitespace-nowrap text-[14px]'>PAY</th>
                         </tr>
                     </thead>
                     <tbody>
                     {/* row 1 */}
                     {
                         book.map((items, index) =><tr key={index} className='border-b-[1px] border-[#e8e8e8] text-center'>
                             <td className='p-4 whitespace-nowrap'>{index + 1}</td>
                             <td className='p-4 whitespace-nowrap'>
                               <img src={items?.image} alt="" className='w-[50px] h-[50px] mx-auto' />
                             </td>
                             <td className='text-[#737373] p-4 whitespace-nowrap'>{items?.name}</td>
                             <td className='text-[#737373] p-4 whitespace-nowrap'>${items?.price}</td>
                             <td className='p-4 whitespace-nowrap'><button onClick={()=> handleDelete(items._id) } className="bg-[#B91C1C] text-[#FFF] px-4 py-3 rounded-[5px]"><RiDeleteBin6Line /></button></td>
                             <td className='text-[#737373] p-4 whitespace-nowrap'>
                                 <button className='bg-[royalblue] rounded-lg px-2 py-2 text-[#FFF]'>PAY</button>
                             </td>
                         </tr>)
                     }
                     </tbody>
                         
                      </table>
                     </div>
             </div>
         </div>
        </div>
    );
};

export default Select_classes;