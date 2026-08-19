'use client';

import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import type { RateTier, BookingFormValues } from '@/types/service';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceTitle: string;
  selectedTier: RateTier;
}

const timeSlots = [
  '10:00 AM',
  '11:30 AM',
  '01:00 PM',
  '02:30 PM',
  '04:00 PM',
  '05:30 PM',
  '07:00 PM',
  '08:30 PM',
];

const bookingSchema = Yup.object().shape({
  guestName: Yup.string()
    .min(2, 'Name must be at least 2 characters')
    .required('Guest name is required'),
  email: Yup.string()
    .email('Please enter a valid email')
    .required('Email is required for confirmation'),
  phone: Yup.string()
    .matches(/^[0-9+ ]{7,16}$/, 'Please enter a valid phone number')
    .required('Phone number is required for WhatsApp reminders'),
  bookingDate: Yup.string().required('Please select a preferred date'),
  timeSlot: Yup.string().required('Please choose an available time slot'),
  guestsCount: Yup.number().min(1).max(4).required(),
});

export default function BookingModal({
  isOpen,
  onClose,
  serviceTitle,
  selectedTier,
}: BookingModalProps) {
  const [isBooked, setIsBooked] = useState(false);

  const formik = useFormik<BookingFormValues>({
    initialValues: {
      guestName: '',
      email: '',
      phone: '',
      bookingDate: '',
      timeSlot: '02:30 PM',
      durationTier: selectedTier.duration,
      guestsCount: 1,
      specialRequests: '',
    },
    validationSchema: bookingSchema,
    onSubmit: async () => {
      // Simulate booking submission
      await new Promise((resolve) => setTimeout(resolve, 600));
      setIsBooked(true);
    },
  });

  if (!isOpen) return null;

  return (
    <div
      className="modal fade show d-block"
      tabIndex={-1}
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.65)', zIndex: 1060 }}
    >
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content border-0 shadow-lg rounded-4 overflow-hidden">
          {/* Modal Header */}
          <div
            className="modal-header text-white p-4 border-0"
            style={{ background: 'linear-gradient(135deg, #142620 0%, #234539 100%)' }}
          >
            <div>
              <span className="badge bg-warning text-dark text-uppercase small px-2 py-1 mb-1">
                Sanctuary Reservation
              </span>
              <h3 className="modal-title h5 fw-bold mb-0 text-white">{serviceTitle}</h3>
              <div className="small text-white text-opacity-75">
                {selectedTier.label} • {selectedTier.duration} (${selectedTier.price})
              </div>
            </div>
            <button
              type="button"
              className="btn-close btn-close-white"
              aria-label="Close"
              onClick={() => {
                setIsBooked(false);
                formik.resetForm();
                onClose();
              }}
            />
          </div>

          <div className="modal-body p-4 bg-light">
            {isBooked ? (
              <div className="text-center py-4">
                <div
                  className="rounded-circle bg-success text-white d-inline-flex align-items-center justify-content-center mb-3 shadow"
                  style={{ width: '64px', height: '64px' }}
                >
                  <i className="bi bi-check2-circle fs-2"></i>
                </div>
                <h4 className="h4 fw-bold" style={{ color: '#142620' }}>
                  Reservation Confirmed!
                </h4>
                <p className="text-muted small mx-auto mb-4" style={{ maxWidth: '440px' }}>
                  Thank you, <strong>{formik.values.guestName}</strong>. Your sanctuary reservation
                  for <strong>{formik.values.bookingDate}</strong> at{' '}
                  <strong>{formik.values.timeSlot}</strong> has been received.
                </p>

                <div className="p-3 bg-white rounded-3 border mb-4 text-start small">
                  <div className="d-flex justify-content-between mb-1">
                    <span className="text-muted">Treatment:</span>
                    <strong>{serviceTitle}</strong>
                  </div>
                  <div className="d-flex justify-content-between mb-1">
                    <span className="text-muted">Duration & Rate:</span>
                    <strong>
                      {selectedTier.duration} • ${selectedTier.price}
                    </strong>
                  </div>
                  <div className="d-flex justify-content-between">
                    <span className="text-muted">Confirmation Sent To:</span>
                    <strong>{formik.values.email}</strong>
                  </div>
                </div>

                <div className="d-flex justify-content-center gap-2">
                  <button
                    type="button"
                    className="btn btn-spa-primary px-4 py-2"
                    onClick={() => {
                      setIsBooked(false);
                      formik.resetForm();
                      onClose();
                    }}
                  >
                    Done
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={formik.handleSubmit} noValidate>
                <div className="row g-3">
                  {/* Guest Name */}
                  <div className="col-12 col-md-6">
                    <label htmlFor="guestName" className="form-label small fw-semibold">
                      Full Name *
                    </label>
                    <input
                      id="guestName"
                      name="guestName"
                      type="text"
                      placeholder="Eleanor Vance"
                      className={`form-control ${
                        formik.touched.guestName && formik.errors.guestName ? 'is-invalid' : ''
                      }`}
                      value={formik.values.guestName}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.guestName && formik.errors.guestName && (
                      <div className="invalid-feedback">{formik.errors.guestName}</div>
                    )}
                  </div>

                  {/* Phone */}
                  <div className="col-12 col-md-6">
                    <label htmlFor="phone" className="form-label small fw-semibold">
                      Phone Number (WhatsApp) *
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+1 555 123 4567"
                      className={`form-control ${
                        formik.touched.phone && formik.errors.phone ? 'is-invalid' : ''
                      }`}
                      value={formik.values.phone}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.phone && formik.errors.phone && (
                      <div className="invalid-feedback">{formik.errors.phone}</div>
                    )}
                  </div>

                  {/* Email */}
                  <div className="col-12 col-md-6">
                    <label htmlFor="email" className="form-label small fw-semibold">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="name@example.com"
                      className={`form-control ${
                        formik.touched.email && formik.errors.email ? 'is-invalid' : ''
                      }`}
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.email && formik.errors.email && (
                      <div className="invalid-feedback">{formik.errors.email}</div>
                    )}
                  </div>

                  {/* Booking Date */}
                  <div className="col-12 col-md-6">
                    <label htmlFor="bookingDate" className="form-label small fw-semibold">
                      Preferred Date *
                    </label>
                    <input
                      id="bookingDate"
                      name="bookingDate"
                      type="date"
                      className={`form-control ${
                        formik.touched.bookingDate && formik.errors.bookingDate ? 'is-invalid' : ''
                      }`}
                      value={formik.values.bookingDate}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      min={new Date().toISOString().split('T')[0]}
                    />
                    {formik.touched.bookingDate && formik.errors.bookingDate && (
                      <div className="invalid-feedback">{formik.errors.bookingDate}</div>
                    )}
                  </div>

                  {/* Time Slot Selection */}
                  <div className="col-12">
                    <label className="form-label small fw-semibold d-block mb-2">
                      Select Available Time Slot *
                    </label>
                    <div className="d-flex flex-wrap gap-2">
                      {timeSlots.map((slot) => {
                        const isSlotSelected = formik.values.timeSlot === slot;
                        return (
                          <button
                            key={slot}
                            type="button"
                            className={`btn btn-sm py-2 px-3 ${
                              isSlotSelected ? 'btn-dark' : 'btn-outline-secondary bg-white'
                            }`}
                            onClick={() => formik.setFieldValue('timeSlot', slot)}
                          >
                            <i className="bi bi-clock me-1"></i>
                            {slot}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Special Requests */}
                  <div className="col-12">
                    <label htmlFor="specialRequests" className="form-label small fw-semibold">
                      Special Requests / Aromatic Preferences (Optional)
                    </label>
                    <textarea
                      id="specialRequests"
                      name="specialRequests"
                      rows={2}
                      placeholder="e.g. Extra focus on neck & shoulders, prefer gentle pressure, lavender aroma..."
                      className="form-control"
                      value={formik.values.specialRequests}
                      onChange={formik.handleChange}
                    />
                  </div>
                </div>

                <div className="mt-4 pt-3 border-top d-flex justify-content-between align-items-center">
                  <div>
                    <div className="small text-muted">Total Due at Sanctuary:</div>
                    <strong className="h5 text-dark mb-0">${selectedTier.price}</strong>
                  </div>
                  <div className="d-flex gap-2">
                    <button
                      type="button"
                      className="btn btn-outline-secondary"
                      onClick={onClose}
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="btn btn-spa-book-glow px-4"
                      disabled={formik.isSubmitting}
                    >
                      {formik.isSubmitting ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2" />
                          Confirming...
                        </>
                      ) : (
                        'Confirm Reservation'
                      )}
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
