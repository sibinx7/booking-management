'use client';

import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import type { ServiceReview, ReviewFormValues } from '@/types/service';

interface ServiceReviewsProps {
  initialReviews: ServiceReview[];
  rating: number;
  reviewCount: number;
  serviceTitle: string;
}

const reviewSchema = Yup.object().shape({
  authorName: Yup.string()
    .min(2, 'Name must be at least 2 characters')
    .required('Please enter your name'),
  rating: Yup.number().min(1, 'Please select a star rating').max(5).required(),
  treatmentDuration: Yup.string().required(),
  comment: Yup.string()
    .min(10, 'Review comment must be at least 10 characters')
    .required('Please share your experience feedback'),
});

export default function ServiceReviews({
  initialReviews,
  rating,
  reviewCount,
  serviceTitle,
}: ServiceReviewsProps) {
  const [reviewsList, setReviewsList] = useState<ServiceReview[]>(initialReviews);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [hoverRating, setHoverRating] = useState<number>(0);
  const [successNotice, setSuccessNotice] = useState<string | null>(null);

  const formik = useFormik<ReviewFormValues>({
    initialValues: {
      authorName: '',
      rating: 5,
      treatmentDuration: '90 mins',
      comment: '',
    },
    validationSchema: reviewSchema,
    onSubmit: async (values) => {
      const reviewId = `rev-${values.authorName.toLowerCase().replace(/[^a-z0-9]/g, '')}-${reviewsList.length + 1}`;
      const newReview: ServiceReview = {
        id: reviewId,
        authorName: values.authorName,
        rating: Number(values.rating),
        date: 'Just now',
        treatmentDuration: values.treatmentDuration,
        verifiedGuest: true,
        comment: values.comment,
      };

      setReviewsList((prev) => [newReview, ...prev]);
      setSuccessNotice('Thank you! Your sanctuary review has been posted.');
      formik.resetForm();
      setIsFormOpen(false);
    },
  });

  return (
    <section className="mb-5">
      {/* Header & Rating Breakdown */}
      <div className="card p-4 p-md-5 rounded-4 border-0 shadow-sm mb-4 bg-white">
        <div className="row g-4 align-items-center">
          <div className="col-12 col-md-5 text-center text-md-start border-md-end">
            <h2 className="h4 fw-bold mb-1" style={{ color: '#142620' }}>
              Guest Experiences & Reviews
            </h2>
            <p className="text-muted small mb-3">
              Verified testimonials from honored sanctuary guests
            </p>

            <div className="d-flex align-items-center justify-content-center justify-content-md-start gap-3">
              <div className="display-4 fw-bold" style={{ color: '#d4af37' }}>
                {rating}
              </div>
              <div>
                <div className="d-flex text-warning mb-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <i
                      key={star}
                      className={`bi ${
                        star <= Math.round(rating) ? 'bi-star-fill' : 'bi-star'
                      } me-1`}
                    ></i>
                  ))}
                </div>
                <div className="small text-muted">
                  Based on {reviewsList.length || reviewCount} verified reviews
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-7 text-center text-md-end">
            <button
              type="button"
              className="btn btn-spa-book-glow px-4 py-2"
              onClick={() => {
                setIsFormOpen(!isFormOpen);
                setSuccessNotice(null);
              }}
            >
              <i className="bi bi-pencil-square me-2"></i>
              {isFormOpen ? 'Close Review Form' : 'Write a Guest Review'}
            </button>
          </div>
        </div>
      </div>

      {successNotice && (
        <div
          className="alert alert-success d-flex align-items-center py-3 px-4 mb-4 border-0 shadow-sm rounded-3"
          role="alert"
        >
          <i className="bi bi-check-circle-fill me-2 fs-5"></i>
          <div>{successNotice}</div>
        </div>
      )}

      {/* Post Review Form */}
      {isFormOpen && (
        <div className="card p-4 p-md-5 rounded-4 border-0 shadow-sm mb-4 bg-white">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h3 className="h5 fw-bold mb-0" style={{ color: '#142620' }}>
              Post Your Experience for {serviceTitle}
            </h3>
            <span className="badge bg-light text-dark border">Verified Guest</span>
          </div>

          <form onSubmit={formik.handleSubmit} noValidate>
            <div className="row g-3">
              {/* Star Rating Interactive Selector */}
              <div className="col-12">
                <label className="form-label small fw-semibold d-block">
                  Your Star Rating *
                </label>
                <div className="d-flex align-items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => {
                    const isFilled = star <= (hoverRating || formik.values.rating);
                    return (
                      <button
                        key={star}
                        type="button"
                        className="btn btn-link p-1 text-decoration-none"
                        onMouseEnter={() => setHoverRating(star)}
                        onMouseLeave={() => setHoverRating(0)}
                        onClick={() => formik.setFieldValue('rating', star)}
                      >
                        <i
                          className={`bi ${isFilled ? 'bi-star-fill text-warning' : 'bi-star text-muted'} fs-3`}
                        ></i>
                      </button>
                    );
                  })}
                  <span className="ms-2 fw-bold text-dark">
                    {hoverRating || formik.values.rating} / 5 Stars
                  </span>
                </div>
              </div>

              {/* Author Name */}
              <div className="col-12 col-md-6">
                <label htmlFor="authorName" className="form-label small fw-semibold">
                  Your Full Name *
                </label>
                <input
                  id="authorName"
                  name="authorName"
                  type="text"
                  placeholder="Eleanor Vance"
                  className={`form-control ${
                    formik.touched.authorName && formik.errors.authorName ? 'is-invalid' : ''
                  }`}
                  value={formik.values.authorName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.authorName && formik.errors.authorName && (
                  <div className="invalid-feedback">{formik.errors.authorName}</div>
                )}
              </div>

              {/* Treatment Duration */}
              <div className="col-12 col-md-6">
                <label htmlFor="treatmentDuration" className="form-label small fw-semibold">
                  Treatment Duration Experienced
                </label>
                <select
                  id="treatmentDuration"
                  name="treatmentDuration"
                  className="form-select"
                  value={formik.values.treatmentDuration}
                  onChange={formik.handleChange}
                >
                  <option value="60 mins">60 mins</option>
                  <option value="90 mins">90 mins</option>
                  <option value="120 mins">120 mins</option>
                  <option value="150 mins">150 mins</option>
                </select>
              </div>

              {/* Comment */}
              <div className="col-12">
                <label htmlFor="comment" className="form-label small fw-semibold">
                  Detailed Experience & Impressions *
                </label>
                <textarea
                  id="comment"
                  name="comment"
                  rows={4}
                  placeholder="Share details about the atmosphere, therapist technique, aroma preferences, and relaxation level..."
                  className={`form-control ${
                    formik.touched.comment && formik.errors.comment ? 'is-invalid' : ''
                  }`}
                  value={formik.values.comment}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.comment && formik.errors.comment && (
                  <div className="invalid-feedback">{formik.errors.comment}</div>
                )}
              </div>
            </div>

            <div className="mt-4 d-flex justify-content-end gap-2">
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={() => setIsFormOpen(false)}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="btn btn-spa-primary px-4"
                disabled={formik.isSubmitting || !formik.isValid}
              >
                Publish Review
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Reviews Feed List */}
      <div className="row g-3">
        {reviewsList.map((rev) => (
          <div key={rev.id} className="col-12">
            <div className="card p-4 rounded-4 border bg-white shadow-sm">
              <div className="d-flex justify-content-between align-items-start mb-2">
                <div className="d-flex align-items-center gap-3">
                  <div
                    className="rounded-circle d-flex align-items-center justify-content-center text-white fw-bold"
                    style={{
                      width: '44px',
                      height: '44px',
                      background: 'linear-gradient(135deg, #142620 0%, #234539 100%)',
                    }}
                  >
                    {rev.authorName.charAt(0)}
                  </div>
                  <div>
                    <div className="fw-bold text-dark d-flex align-items-center gap-2">
                      <span>{rev.authorName}</span>
                      {rev.verifiedGuest && (
                        <span className="badge bg-success bg-opacity-10 text-success border border-success border-opacity-25 small">
                          <i className="bi bi-patch-check-fill me-1"></i> Verified
                        </span>
                      )}
                    </div>
                    <div className="small text-muted">
                      {rev.date} • {rev.treatmentDuration}
                    </div>
                  </div>
                </div>

                <div className="d-flex text-warning">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <i
                      key={s}
                      className={`bi ${s <= rev.rating ? 'bi-star-fill' : 'bi-star'} small me-1`}
                    ></i>
                  ))}
                </div>
              </div>

              <p className="text-muted mb-0 small mt-2" style={{ lineHeight: '1.7' }}>
                &ldquo;{rev.comment}&rdquo;
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
