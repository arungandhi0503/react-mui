import React from 'react';
import Grid from '@mui/material/Grid2';
import { useNavigate } from 'react-router-dom';
function FormRegistration() {
    const navigate = useNavigate();
    // const [currentValue, setCurrentValue] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const updateState = () => {
        console.log();
    };

    const handleCancel = (e) => {
        e.preventDefault();
        navigate('/');
    };
    return (<div className="container">
        <Grid container spacing={4} sx={{
            justifyContent: 'center',
            p: 2,
            m: 'auto',
        }}>
            <Grid spacing={4} size={{ xs: 12, md: 6 }}>

                <h2>Registration</h2>
                <form>
                    <div className='form-row mt-2'>
                        <div className='form-group col-md-6'>
                            <label htmlFor='inputEmail4'>Email</label>
                            <input type='email' className='form-control' id='inputEmail4' />
                        </div>
                        <div className='form-group col-md-6 mt-2'>
                            <label htmlFor='inputPassword4'>Password</label>
                            <input type='password' className='form-control' id='inputPassword4' />
                        </div>
                    </div>
                    <div className='form-group mt-2'>
                        <label htmlFor='inputAddress'>Address</label>
                        <input
                            type='text'
                            className='form-control'
                            id='inputAddress'
                            placeholder='1234 Main St'
                        />
                    </div>
                    <div className='form-group mt-2'>
                        <label htmlFor='inputAddress2'>Address 2</label>
                        <input
                            type='text'
                            className='form-control'
                            id='inputAddress2'
                            placeholder='Apartment, studio, or floor'
                        />
                    </div>
                    <div className='form-row mt-2'>
                        <div className='form-group col-md-6'>
                            <label htmlFor='inputCity'>City</label>
                            <input type='text' className='form-control' id='inputCity' />
                        </div>
                        <div className='form-group col-md-4 mt-2'>
                            <label htmlFor='inputState'>State</label>
                            <select className='form-control' onChange={updateState} defaultValue={'Choose'}>
                                <option>Choose...</option>
                                <option>Chennai</option>
                                <option>Mumbai</option>
                            </select>
                        </div>
                        <div className='form-group col-md-2 mt-2'>
                            <label htmlFor='inputZip'>Zip</label>
                            <input type='text' className='form-control' id='inputZip' />
                        </div>
                    </div>
                    <div className='form-group mt-2'>
                        <div className='form-check'>
                            <input className='form-check-input' type='checkbox' id='gridCheck' />
                            <label className='form-check-label' htmlFor='gridCheck'>
                                Check me out
                            </label>
                        </div>
                    </div>
                    <div className="mt-2">
                        <button type='submit' onClick={handleSubmit} className='btn btn-primary'>
                            Submit
                        </button>
                        <button type='submit' onClick={handleCancel} className='btn btn-secondary ms-1'>
                            Cancel
                        </button>
                    </div>
                </form>

            </Grid></Grid>
    </div >
    );
}

export default FormRegistration;
