import { useForm } from "react-hook-form";




const AddItem = () => {
    const { register, handleSubmit } = useForm();
    
    const onSubmit = data => {
        const url =`https://technical-backend-code.vercel.app/products/`;
    

        
        fetch(url,{
            method: 'POST',
        headers: {
            'content-type': 'application/json'   
        },
        body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
            console.log(result);
            
           
        })
        };
       
    return (
        <div className=' w-72 lg:w-96  mx-auto'>
        <h2 className="w-64 lg:w-96 ml-10 lg:ml-32 mt-4 text-lg italic font-medium text-amber-400">This is add service</h2>
        <form className=' grid grid-cols-1 gap-4 mt-10 ' onSubmit={handleSubmit(onSubmit)}>
  <input className=' border-2  border-orange-400 border-double rounded-full px-3 py-3 mb-2' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
  <textarea className='border-2  border-orange-400 border-double rounded-full px-3 py-2 mb-2' placeholder='Description' {...register("description")} />
  <input className='border-2  border-orange-400 border-double rounded-full px-3 py-3 mb-2' placeholder='Price' type="number" {...register("price")} />
  <input className='border-2  border-orange-400 border-double rounded-full px-3 py-3 mb-2' placeholder='Quantity' type="number" {...register("quantity")} />
  <input className='border-2  border-orange-400 border-double rounded-full px-3 py-3 mb-2' placeholder='PhotoURL' type="text" {...register("img")} />
  <input className='border-2  border-orange-400 border-double rounded-full px-3 py-3 mb-2' placeholder='Supplier Name' type="text" {...register("supplier")} />
  <input className= "w-36 mx-auto text-white text-xl border-2 border-blue-200 rounded-full  bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ...  px-3 py-3 mb-2" type="submit" value="Add Service" />
</form>
    </div>
    );
};

export default AddItem;


