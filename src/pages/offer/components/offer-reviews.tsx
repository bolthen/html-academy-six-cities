import React from 'react';
import {OfferComment} from '../../../models/offer-comment.ts';
import {OfferReviewItem} from './offer-review-item.tsx';
import {OfferReviewForm} from './offer-review-form.tsx';

interface IOfferReviewsProps {
  comments: OfferComment[];
  offerId: string;
}

export const OfferReviews: React.FC<IOfferReviewsProps> = ({comments, offerId}) => {
  const sortedComments = [...comments]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 10);

  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{comments.length}</span></h2>
      <ul className="reviews__list">
        {sortedComments.map((comment) => (<OfferReviewItem comment={comment} key={comment.id}/>))}
      </ul>
      <OfferReviewForm offerId={offerId}/>
    </section>
  );
};
