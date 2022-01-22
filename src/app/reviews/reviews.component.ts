import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Suggestion } from './Suggestion';

@Component({
  templateUrl: './reviews.component.html',
  styleUrls: [ './reviews.component.css' ]
})
export class ReviewsComponent  {
  model:any = { }
  // keep track of if we're creating or editing a review
  reviewBeingEdited; // keep track of what review is being edited

  editing = false;
  creating = false;
  isSubmitted = false;

  numbers = [1,2,3,4,5] // being clever about displaying stars on the review

  reviews: any[] = [
    { flop: "Cats", stars: 3, review: "Fantastic flop! Loved the graphics and the singing!!!" },
    { flop: "Spider-Man 3", stars: 5, review: "Loved the dancing. Some of the best" },
    { flop: "Twilight", stars: 2, review: "Those Vampires were just too scary." },
  ]

  flopList = [
    {title: "Battlefield Earth"},
    {title: "Santa Clause Conquers the Martians"},
    {title: "The Room"},
    {title: "Howard the Duck"},
    {title: "Jack and Jill"},
    {title: "Cats"},
    {title: "Dudley Do-Right"},
    {title: "Batman and Robin"},
    {title: "Catwoman"},
    {title: "The Last Airbender"},
    {title: "Spider-Man 3"},
    {title: "Transformers: Revenge of the Fallen"},
    {title: "Twilight"},
    {title: "Wing Commander"},
  ]

  constructor() { }

  ngOnInit() {
  }

  editReview(review) {
    this.reviewBeingEdited = review;
    this.editing = true;
    this.model = {...review};
  }

  resetForm(form) {
    // reset the form
    form.markAsPristine();
    form.markAsUntouched();

    this.model = {};
    this.reviewBeingEdited = {};

    this.editing = false;
    this.creating = false;
    this.isSubmitted = false;
  }

  submitForm(form) {

    // update the edited review, or create a new one
    this.isSubmitted = true;
    
    if (form.valid) {
      if (this.creating) {
        this.createReview(form);
      } else if (this.editing) {
        this.updateReview(form);
      }
      this.resetForm(form);
    }
  }

  createReview(form) {
    this.reviews.push(this.model);
  }

  updateReview(form) {
    this.reviewBeingEdited.flop = this.model.flop;
    this.reviewBeingEdited.stars = this.model.stars;
    this.reviewBeingEdited.review = this.model.review;
  }


  cancel(form) {
    // cancel the edit/create and hide the form
    this.resetForm(form);
  }

}





