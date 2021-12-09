import React from 'react'
import { Formik, Form, Field , ErrorMessage} from 'formik'

const encode = (data) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}
const ContactFormEN = () => {
  const [success, setSuccess] = React.useState(false);
  if (success) {
    return <div className='py-52  text-xl text-left'>Thank you for sending your message. <br/> We will get back to you ASAP!</div>;
  }
    return (
       

          
        <div className='w-full lg:w-1/2  lg:mr-20'>
            <h3 className='text-gray-2 text-lg'>Fill out the form, send us a message and find out more</h3>
            <Formik 
            
                initialValues={{
                name: '',
               
                email: '',
                message: '',
                }}
                onSubmit={(values, actions) => {
                fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: encode({ "form-name": "contact", ...values })
                })
                .then(() => {
                setSuccess(true)
                actions.resetForm()
                })
                .catch(() => {
                  setSuccess(false)
                alert('Error');
                })
                .finally(() => actions.setSubmitting(false))
                }} 

                validate={values =>{
                const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
                const errors = {};
                if(!values.name) {
                errors.name = '* Your Name Required'
                }
               
                if(!values.email || !emailRegex.test(values.email)) {
                errors.email = '* Valid Name Required '
                } 
                if(!values.message) {
                errors.message = '* Message Required'
                }
                return errors;
                }}>

                <Form className="font-body w-full pt-6 flex flex-col" name="contact" data-netlify={true}>
                    <div className="flex flex-col mb-2">
                        <label className="text-base w-full text-body text-gray-2" htmlFor='name'>Full Name<span className='text-red-500 text-lg'>*</span></label>
                        <Field className=" border border-dark-blue px-2 py-2 focus:outline-none focus:border-dark-blue focus:ring-1 focus:ring-dark-blue" name='name' />
                        <ErrorMessage component="div" className="text-red-500  mt-2" name="name"  />
                    </div>

                   
                    
                    <div  className="flex flex-col mb-4">
                    <label className="text-base w-full text-body text-gray-2" htmlFor='email'>Email<span className='text-red-500 text-lg'>*</span></label>
                    <Field className=" border border-dark-blue px-2 py-2 focus:outline-none focus:border-dark-blue focus:ring-1 focus:ring-dark-blue" name='phone' name='email' />
                    <ErrorMessage component="div" className="text-red-500  mt-2" name="email" />
                    </div>

                    <div className="flex flex-col mb-4">
                    <label className="text-base w-full text-body text-gray-2" htmlFor='message'>Message<span className='text-red-500 text-lg'>*</span></label>
                    <Field className="  px-2 py-2 focus:outline-none focus:border-dark-blue focus:ring-1 focus:ring-dark-blue" name='message' component='textarea' />
                    <ErrorMessage component="div" className="text-red-500  mt-2" name="message" />
                    </div>

                    <button className="btn-prim w-52 mt-4 mx-auto lg:ml-0" type='submit'>Send</button>

                </Form>


                </Formik>

                </div>
        
    )
}
export default ContactFormEN