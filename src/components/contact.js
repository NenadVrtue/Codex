import React from 'react'
import { Formik, Form, Field , ErrorMessage} from 'formik'

const encode = (data) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}
const ContactForm = () => {
  const [success, setSuccess] = React.useState(false);
  if (success) {
    return <div className='py-52 text-center'>Forma poslana</div>;
  }
    return (
        <section className="py-20 flex flex-col items-center max-w-2xl mx-auto">

          

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
                errors.name = '* Name Required'
                }
               
                if(!values.email || !emailRegex.test(values.email)) {
                errors.email = '* Valid Email Required'
                } 
                if(!values.message) {
                errors.message = '* Message Required'
                }
                return errors;
                }}>
                <Form className="font-body px-2 w-full my-8 flex flex-col" name="contact" data-netlify={true}>
                    <div className="flex flex-col mb-4">
                        <label className="text-base w-full text-body text-main-blue mb-4" htmlFor='name'>Full Name:</label>
                        <Field className=" border-2 border-main-blue px-2 py-2 focus:outline-none focus:border-main-red focus:ring-1 focus:ring-main-red" name='name' />
                        <ErrorMessage component="div" className="text-main-red  mt-2" name="name"  />
                    </div>

                   
                    
                    <div  className="flex flex-col mb-4">
                    <label className="text-base w-full text-body text-main-blue mb-4" htmlFor='email'>Email:</label>
                    <Field className=" border-2 border-main-blue py-2 px-2 focus:outline-none focus:border-main-red focus:ring-1 focus:ring-main-red" name='phone' name='email' />
                    <ErrorMessage component="div" className="text-main-red  mt-2" name="email" />
                    </div>

                    <div className="flex flex-col mb-4">
                    <label className="text-base w-full text-body text-main-blue mb-4" htmlFor='message'>Message:</label>
                    <Field className=" border-2 border-main-blue py-2 px-2 focus:outline-none focus:border-main-red focus:ring-1 focus:ring-main-red" name='message' component='textarea' />
                    <ErrorMessage component="div" className="text-main-red  mt-2" name="message" />
                    </div>

                    <button className="w-4/5 sm:w-48 flex items-center justify-center px-4 py-1 border-4 border-main-red text-sub font-medium font-body text-white bg-main-red hover:bg-main-red-hover hover:border-main-red-hover  mt-4 " type='submit'>Send</button>

                </Form>


                </Formik>

           
        </section>
    )
}
export default ContactForm