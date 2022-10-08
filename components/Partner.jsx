import { useState } from "react"
import { AiFillCloseCircle } from 'react-icons/ai';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from "react-redux";
import { setDonor } from "../store/Splice";
import { usePaystackPayment } from 'react-paystack';

const Partner = () => {
  const [toggle, setToggle] = useState(false)
  const dispatch = useDispatch()
  const allInfo = useSelector(state=>state.mainStore)
  const config = {
    email: allInfo.donor.email,
    amount: allInfo.donor.amount*100,
    publicKey: process.env.NEXT_PUBLIC_ANALYTICS_ID,
    currency: 'NGN',
  };
  const onSuccess = (reference) => {
    console.log(reference);
  };

  const onClose = () => {
    console.log('closed')
  }

  const PaystackHookExample = () => {
    const initializePayment = usePaystackPayment(config);
    return (
      <div>
          <button type="submit" className="w-full bg-yellow-900 text-white py-1 rounded font-medium" onClick={() => {
              initializePayment(onSuccess, onClose)
          }}>Donate</button>
      </div>
    );
  };
  const formik = useFormik({
    initialValues: {
      email: '',
      name: '',
      amount: '',
    },
    onSubmit: (values) => {
      dispatch(setDonor(values))
    },
    validationSchema: yup.object({
      name: yup.string().trim().required('Fullname is required'),
      email: yup.string().email('Must be a valid email').required('Email is required'),
      amount: yup.string().trim().required('Amount is required'),
    }),
  });
  return (
    <div className='w-full flex justify-center items-center flex-col my-4'>
        <button onClick={()=>setToggle(true)} className='bg-yellow-900 w-full p-2 text-2xl sm:text-3xl text-white'>
          Donate for Widows</button>
          {toggle&&(
            <form className="w-full p-5 fixed z-40 flex justify-center items-center h-screen top-0 bg-black/30" onSubmit={formik.handleSubmit}>
              <div className="w-full md:w-96 rounded h-fit p-3 bg-white">
                <AiFillCloseCircle className="text-yellow-900 ml-auto text-2xl" onClick={()=>setToggle(false)}/>
                <h2 className="text-center text-yellow-700 text-xl font-medium mt-2">Donate for Widows</h2>
                <span className="flex flex-col mt-3 px-2">
                  <p className="text-yellow-700 text-sm">Email Address</p>
                  <input type="email" placeholder="example@mail.com" id="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} className="bg-white border border-gray-300 rounded outline-none w-full text-sm px-2.5 py-2 mt-1.5" />
                  {formik.touched.email&&formik.errors.email && (<p className="text-red-500 text-xs ml-2">{formik.errors.email}</p>)}
                </span>
                <span className="flex flex-col mt-3 px-2">
                  <p className="text-yellow-700 text-sm">Full Name</p>
                  <input type="text" placeholder="e.g Joe Doe" id="name" value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur} className="bg-white border border-gray-300 rounded outline-none w-full text-sm px-2.5 py-2 mt-1.5" />
                  {formik.touched.name&&formik.errors.name && (<p className="text-red-500 text-xs ml-2">{formik.errors.name}</p>)}
                </span>
                <span className="flex flex-col mt-3 px-2">
                  <p className="text-yellow-700 text-sm">Amount</p>
                  <input type="number" placeholder="Donate" id="amount" value={formik.values.amount} onChange={formik.handleChange} onBlur={formik.handleBlur} className="bg-white border border-gray-300 rounded outline-none w-full text-sm px-2.5 py-2 mt-1.5" />
                  {formik.touched.amount&&formik.errors.amount && (<p className="text-red-500 text-xs ml-2">{formik.errors.amount}</p>)}
                </span>
                <span className="flex flex-col mt-4 mb-3 px-2">
                  <PaystackHookExample />
                </span>
              </div>
            </form>
          )}
    </div>
  )
}

export default Partner