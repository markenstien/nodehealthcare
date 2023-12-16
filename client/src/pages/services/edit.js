import { useEffect, useState } from 'react';
import LayoutAuth from '../../components/layout_auth';
import PageControlButton from '../../components/page_control_button';
import { getData, postData } from '../../assets/js/utils';
import { useParams } from 'react-router-dom';

export default function ServiceEdit() {
    const params = useParams();

    const [service, setService] = useState('');
    const [serviceName, setServiceName] = useState('');
    const [serviceDescription, setServiceDescription] = useState('');
    const [serviceAmount, setServiceAmount] = useState('');

    const fireAction = async (event) => {
        event.preventDefault();

        console.log({
            serviceName : serviceName,
            serviceAmount : serviceAmount,
            serviceDescription : serviceDescription
        });
        
        let response = await postData('/api/services/' + params.id, 'PUT', {
            serviceName : serviceName,
            serviceAmount : serviceAmount,
            serviceDescription : serviceDescription
        });

        if(response) {
            window.location.href = '/services/index';
        }
    }
    
    
    const pageContent = () => {
        return (
            <div className='col-md-6 mx-auto'>
                <div className="card">
                    <div className="card-header">
                        <h4 className="card-title">Edit Service</h4>
                    </div>
                    <div className="card-body">
                        <form onSubmit={fireAction}>
                            <div className='form-group'>
                                <label className='form-label'>Service Name</label>
                                <input type='text' className='form-control' 
                                    onChange={(event) => {
                                        setServiceName(event.target.value)
                                    }}
                                    value={serviceName}></input>
                            </div>

                            <div className='form-group'>
                                <label className='form-label'>Service Description</label>
                                <textarea className='form-control'
                                onChange={(event) => {
                                    setServiceDescription(event.target.value)
                                }}
                                value={serviceDescription}></textarea>
                            </div>

                            <div className='form-group'>
                                <label className='form-label'>Service Amount</label>
                                <input type='text' className='form-control' 
                                    onChange={(event) => {
                                        setServiceAmount(event.target.value)
                                    }}
                                    value={serviceAmount}></input>
                            </div>

                            <div className='form-group'>
                                <input type='submit' className='btn btn-primary btn-sm mt-3' value={'Save Changes'}></input>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }

    const pageButtons = [
        <PageControlButton url={'/services/index'} label={'Services'}></PageControlButton>
    ];  

    const fetchService = async() => {
        let response = await getData('/api/services/?id=' + params.id);
        setService(response);
        setServiceName(response.serviceName ?? '');
        setServiceDescription(response.serviceDescription ?? '');
        setServiceAmount(response.serviceAmount ?? '');
    }

    useEffect(() => {
        fetchService();
    }, []);
    return (
        <LayoutAuth element={pageContent} pageTitle='Service Management'
        pageButtons={pageButtons}></LayoutAuth>
    );
}