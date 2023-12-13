import React, { useEffect, useState } from "react";
import LayoutAuth from "../../components/layout_auth";
import { useParams } from "react-router-dom";
export default function AppointmentEdit() {
    const params = useParams();

    const [guestName, setGuestName] = useState('');
    const [guestMobileNumber, setGuestMobileNumber] = useState('');
    const [guestEmail, setGuestEmail] = useState('');
    const [appointmentDate, setAppointmentDate] = useState('');
    const [notes, setNotes] = useState('');
    
    useEffect(() => {
        getAppointment();
    }, []);

    const editAppointment = async () => {

    }

    const getAppointment = async () => {
        let appointmentResponse = await fetch(`/api/appointments?id=${params.id}`);
        let appointmentResponseData = await appointmentResponse.json();

        setGuestName(appointmentResponseData.guestName ?? '');
        setGuestMobileNumber(appointmentResponseData.guestMobileNumber ?? '');
        setGuestEmail(appointmentResponseData.guestEmail ?? '');
        setAppointmentDate(appointmentResponseData.appointmentDate ?? '');
        setNotes(appointmentResponseData.notes ?? '');

        console.log([appointmentResponse, appointmentResponseData]);
        console.log('test');
    }

    const pageContent = () => {
        return (
            <div className="card">
                <div className="card-header">
                    <h4 className="card-title">Edit Appointment</h4>
                </div>
                <div className="card-body">
                    <form method="post" onSubmit={editAppointment}>
                        <div className="form-group mb-3">
                            <label>Guest Name</label>
                            <input type="text" className="form-control" id="guest_name"
                                onChange={(event) => {
                                    setGuestName(event.target.value)
                                }}
                                value={guestName}></input>
                        </div>

                        <div className="form-group mb-3">
                            <label>Guest Mobile Number</label>
                            <input type="text" className="form-control" id="guest_mobile_number"
                                onChange={(event) => {
                                    setGuestMobileNumber(event.target.value)
                                }} value={guestMobileNumber}></input>
                        </div>

                        <div className="form-group mb-3">
                            <label>Guest Email (optional) </label>
                            <input type="text" className="form-control" id="guest_email"
                            onChange={(event) => {
                                setGuestEmail(event.target.value)
                            }}
                            value={guestEmail}></input>
                        </div>
                        
                        <div className="form-group mb-3">
                            <label>Appointment Date </label>
                            <input type="date" className="form-control" id="date"
                            onChange={(event) => {
                                setAppointmentDate(event.target.value)
                            }} value={appointmentDate}></input>
                        </div>

                        <div className="form-group mb-3">
                            <label>Notes </label>
                            <textarea className="form-control" id="notes"
                            onChange={(event) => {
                                setNotes(event.target.value)
                            }} value={notes}></textarea>
                        </div>
                        
                        <div className="form-group">
                            <input type="submit" className="btn btn-primary btn-sm" value="Save Appointment"></input>
                        </div>
                    </form>
                </div>
            </div>
        );
    }

    return (
        <LayoutAuth element={pageContent}></LayoutAuth>
    );
}