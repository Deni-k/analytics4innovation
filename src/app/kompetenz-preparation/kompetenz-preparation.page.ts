import {Component, EventEmitter, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';
import {Rating} from '../models/rating';
import {Ratings} from '../models/ratings';
import {RatingService} from '../service/ratingservice';
@Component({
  selector: 'app-kompetenz-preparation',
  templateUrl: './kompetenz-preparation.page.html',
  styleUrls: ['./kompetenz-preparation.page.scss'],
})
export class KompetenzPreparationPage implements OnInit {
  rat: Rating[] = [];
  ratings: Ratings;
  ratingChange: EventEmitter<Rating> = new EventEmitter();
  constructor(public navCtrl: NavController, public ratingService: RatingService) {
    this.rat.push(new Rating(0, 1, 1));
    this.rat.push(new Rating(0, 2, 2));
    this.rat.push(new Rating(0, 2, 3));
    this.rat.push(new Rating(0, 2, 4));
    this.rat.push(new Rating(0, 3, 5));
    this.rat.push(new Rating(0, 3, 6));
    this.rat.push(new Rating(0, 3, 7));
  }

  ngOnInit() {
  }

  rate(rate: number, index: number) {
    this.rat[index].rate = rate;
    this.ratingChange.emit(this.rat[index]);
  }
  isAboveRating(rate: number, index: number): boolean {
    return rate > this.rat[index].rate;
  }

  getColor(index: number, rate: number) {
    if (this.isAboveRating(rate, index)) {
      return COLORS.GREY;
    }
    switch (this.rat[index].rate) {
      case 1:
      case 2:
        return COLORS.RED;
      case 3:
        return COLORS.YELLOW;
      case 4:
      case 5:
        return COLORS.GREEN;
      default:
        return COLORS.GREY;
    }
  }

  nextPage($event: MouseEvent) {
    this.ratings = new Ratings(4, this.rat);
    this.ratingService.setData(this.ratings);
    console.log(this.ratingService.makePreparationArray());
    this.navCtrl.navigateRoot('/kompetenz-ergebnis');
  }
}
enum COLORS {
  GREY = '#E0E0E0',
  GREEN = '#76FF03',
  YELLOW = '#FFCA28',
  RED = '#DD2C00'
}
