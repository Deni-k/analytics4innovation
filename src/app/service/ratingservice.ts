import { Injectable } from '@angular/core';
import {Rating} from '../models/rating';
import {Ratings} from '../models/ratings';

@Injectable()
export class RatingService {
    data: Ratings[] = [];
    categoryKompetenz: Number[];
    categoryTechnik: Number[];
    categoryLaw: Number[];
    constructor() {

}
    setData(data) {
        this.data.push(data);
    }
    makeFramingArray() {
        this.categoryKompetenz = [];
        this.categoryTechnik = [];
        this.categoryLaw = [];
        this.data.forEach((element) => {
            if (element.phase === 1) {
                element.ratingarray.forEach((obj) => {
                    if (obj.category === 1) {
                        this.categoryKompetenz.push(obj.rate);
                    }
                    if (obj.category === 2) {
                        this.categoryTechnik.push(obj.rate);
                    }
                    if (obj.category === 3) {
                        this.categoryLaw.push(obj.rate);
                    }
                });
            }
        });
        return [this.categoryKompetenz, this.categoryTechnik, this.categoryLaw];
    }
    makeAllocationArray() {
        this.categoryKompetenz = [];
        this.categoryTechnik = [];
        this.categoryLaw = [];
        this.data.forEach((element) => {
            if (element.phase === 2) {
                element.ratingarray.forEach((obj) => {
                    if (obj.category === 1) {
                        this.categoryKompetenz.push(obj.rate);
                    }
                    if (obj.category === 2) {
                        this.categoryTechnik.push(obj.rate);
                    }
                    if (obj.category === 3) {
                        this.categoryLaw.push(obj.rate);
                    }
                });
            }
        });
        return [this.categoryKompetenz, this.categoryTechnik, this.categoryLaw];
    }
    makeAnalyticsArray() {
        this.categoryKompetenz = [];
        this.categoryTechnik = [];
        this.categoryLaw = [];
        this.data.forEach((element) => {
            if (element.phase === 3) {
                element.ratingarray.forEach((obj) => {
                    if (obj.category === 1) {
                        this.categoryKompetenz.push(obj.rate);
                    }
                    if (obj.category === 2) {
                        this.categoryTechnik.push(obj.rate);
                    }
                    if (obj.category === 3) {
                        this.categoryLaw.push(obj.rate);
                    }
                });
            }
        });
        return [this.categoryKompetenz, this.categoryTechnik, this.categoryLaw];

    }
    makePreparationArray() {
        this.categoryKompetenz = [];
        this.categoryTechnik = [];
        this.categoryLaw = [];
        this.data.forEach((element) => {
            if (element.phase === 1) {
                element.ratingarray.forEach((obj) => {
                    if (obj.category === 1) {
                        this.categoryKompetenz.push(obj.rate);
                    }
                    if (obj.category === 2) {
                        this.categoryTechnik.push(obj.rate);
                    }
                    if (obj.category === 3) {
                        this.categoryLaw.push(obj.rate);
                    }
                });
            }
        });
        return [this.categoryKompetenz, this.categoryTechnik, this.categoryLaw];
    }
}
