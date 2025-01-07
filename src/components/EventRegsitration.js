// import React, { useState } from 'react';
// import "./css/registration_form.css"

// const RegisterForm = () => {
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         department: '',
//         year: '',
//         mobile: '',
//         receipt: null
//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     const handleFileChange = (e) => {
//         setFormData({ ...formData, receipt: e.target.files[0] });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const data = new FormData();
//         Object.keys(formData).forEach((key) => {
//             data.append(key, formData[key]);
//         });

//         // You can replace this with your API endpoint or form submission logic
//         console.log('Form submitted:', formData);
//         alert('Form submitted successfully!');
//     };

//     return (
//         <div id="register">
//             <div className="register-form-container">
//             <h2>Register for Tech Trivia</h2>
//             <form onSubmit={handleSubmit}>
//                 <div>
//                     <label htmlFor="name">Name:</label>
//                     <input
//                         type="text"
//                         id="name"
//                         name="name"
//                         value={formData.name}
//                         onChange={handleChange}
//                         required
//                         style={{ display: 'block', width: '100%' }}
//                     />
//                 </div>

//                 <div style={{ marginBottom: '15px' }}>
//                     <label htmlFor="email">Email:</label>
//                     <input
//                         type="email"
//                         id="email"
//                         name="email"
//                         value={formData.email}
//                         onChange={handleChange}
//                         required
//                         style={{ display: 'block', width: '100%' }}
//                     />
//                 </div>

//                 <div style={{ marginBottom: '15px' }}>
//                     <label htmlFor="department">Department:</label>
//                     <select
//                         id="department"
//                         name="department"
//                         value={formData.department}
//                         onChange={handleChange}
//                         required
//                         style={{ display: 'block', width: '100%' }}
//                     >
//                         <option value="">Select Department</option>
//                         <option value="Comp">Computer</option>
//                         <option value="IT">IT</option>
//                         <option value="AIDS">AIDS</option>
//                         <option value="Mechanical">Mechanical</option>
//                         <option value="E&TC">E&TC</option>
//                         <option value="Electrical">Electrical</option>
//                     </select>
//                 </div>

//                 <div style={{ marginBottom: '15px' }}>
//                     <label htmlFor="year">Year:</label>
//                     <select
//                         id="year"
//                         name="year"
//                         value={formData.year}
//                         onChange={handleChange}
//                         required
//                         style={{ display: 'block', width: '100%' }}
//                     >
//                         <option value="">Select Year</option>
//                         <option value="1">1st Year</option>
//                         <option value="2">2nd Year</option>
//                         <option value="3">3rd Year</option>
//                         <option value="4">4th Year</option>
//                     </select>
//                 </div>

//                 <div style={{ marginBottom: '15px' }}>
//                     <label htmlFor="mobile">Mobile Number:</label>
//                     <input
//                         type="tel"
//                         id="mobile"
//                         name="mobile"
//                         value={formData.mobile}
//                         onChange={handleChange}
//                         required
//                         style={{ display: 'block', width: '100%' }}
//                     />
//                 </div>

//                 <div style={{ marginBottom: '15px' }}>
//                     <label htmlFor="receipt">Upload Receipt:</label>
//                     <input
//                         type="file"
//                         id="receipt"
//                         name="receipt"
//                         onChange={handleFileChange}
//                         accept="image/*"
//                         required
//                         style={{ display: 'block', width: '100%' }}
//                     />
//                 </div>

//                 <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#112363', color: '#fff', border: 'none', cursor: 'pointer', width:300}}>Submit</button>
//             </form>
//         </div>
//         </div>
//     );
// };

// export default RegisterForm;

import React, { useState } from 'react';
import "./css/registration_form.css";
import img from"../images/QR_Payment.png"

const RegisterForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        department: '',
        year: '',
        mobile: '',
        receipt: null,
        paymentScreenshot: null,
    });
    const [showReceiptUpload, setShowReceiptUpload] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        const { name, files } = e.target;
        setFormData({ ...formData, [name]: files[0] });
    };

    const handleCheckboxChange = (e) => {
        setShowReceiptUpload(e.target.checked);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData();
        Object.keys(formData).forEach((key) => {
            data.append(key, formData[key]);
        });

        // Replace this with your API endpoint or form submission logic
        console.log('Form submitted:', formData);
        alert('Form submitted successfully!');
    };

    return (
        <div id="register">
            <div className="register-form-container">
                <h2>Register for Tech Trivia</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            style={{ display: 'block', width: '100%' }}
                        />
                    </div>

                    <div style={{ marginBottom: '15px' }}>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            style={{ display: 'block', width: '100%' }}
                        />
                    </div>

                    <div style={{ marginBottom: '15px' }}>
                        <label htmlFor="department">Department:</label>
                        <select
                            id="department"
                            name="department"
                            value={formData.department}
                            onChange={handleChange}
                            required
                            style={{ display: 'block', width: '100%' }}
                        >
                            <option value="">Select Department</option>
                            <option value="Comp">Computer</option>
                            <option value="IT">IT</option>
                            <option value="AIDS">AIDS</option>
                            <option value="Mechanical">Mechanical</option>
                            <option value="E&TC">E&TC</option>
                            <option value="Electrical">Electrical</option>
                        </select>
                    </div>

                    <div style={{ marginBottom: '15px' }}>
                        <label htmlFor="year">Year:</label>
                        <select
                            id="year"
                            name="year"
                            value={formData.year}
                            onChange={handleChange}
                            required
                            style={{ display: 'block', width: '100%' }}
                        >
                            <option value="">Select Year</option>
                            <option value="1">1st Year</option>
                            <option value="2">2nd Year</option>
                            <option value="3">3rd Year</option>
                            <option value="4">4th Year</option>
                        </select>
                    </div>

                    <div style={{ marginBottom: '15px' }}>
                        <label htmlFor="mobile">Mobile Number:</label>
                        <input
                            type="tel"
                            id="mobile"
                            name="mobile"
                            value={formData.mobile}
                            onChange={handleChange}
                            required
                            style={{ display: 'block', width: '100%' }}
                        />
                    </div>

                    <div style={{ marginBottom: '15px', display: 'flex', alignItems: 'center' }}>
                        <input
                            type="checkbox"
                            id="payment-confirmation"
                            name="paymentConfirmation"
                            onChange={handleCheckboxChange}
                            style={{ marginRight: '10px', width: '20px', height: '20px', cursor: 'pointer' }}
                        />
                        <label
                            htmlFor="payment-confirmation"
                            style={{ fontSize: '16px', color: '#333', cursor: 'pointer' }}
                        >
                            Do you have ACES membership?
                        </label>
                    </div>


                    {!showReceiptUpload ? (
                        <div>
                            <p>Scan the QR code to make the payment:</p>
                            <img
                                src={img}
                                alt="QR Code"
                                style={{ width: '500px', height: '700px' ,marginBottom:'50px'}}
                            />
                            <div style={{ marginBottom: '15px' }}>
                                <label htmlFor="paymentScreenshot">Upload Payment Screenshot:</label>
                                <input
                                    type="file"
                                    id="paymentScreenshot"
                                    name="paymentScreenshot"
                                    onChange={handleFileChange}
                                    accept="image/*"
                                    required
                                    style={{ display: 'block', width: '100%' }}
                                />
                            </div>
                        </div>
                    ) : (
                        <div style={{ marginBottom: '15px' }}>
                            <label htmlFor="receipt">Upload Receipt:</label>
                            <input
                                type="file"
                                id="receipt"
                                name="receipt"
                                onChange={handleFileChange}
                                accept="image/*"
                                required
                                style={{ display: 'block', width: '100%' }}
                            />
                        </div>
                    )}

                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                        <button
                            type="submit"
                            style={{
                                padding: '10px 20px',
                                backgroundColor: '#112363',
                                color: '#fff',
                                border: 'none',
                                cursor: 'pointer',
                                width: 200,
                            }}
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RegisterForm;

