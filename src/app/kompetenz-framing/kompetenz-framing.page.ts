import {Component, EventEmitter, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';
import {Rating} from '../models/rating';
import {KompetenzAllocationPage} from '../kompetenz-allocation/kompetenz-allocation.page';
import {RatingService} from '../service/ratingservice';
import {Ratings} from '../models/ratings';

@Component({
  selector: 'app-kompetenz-framing',
  templateUrl: './kompetenz-framing.page.html',
  styleUrls: ['./kompetenz-framing.page.scss'],
})
export class KompetenzFramingPage implements OnInit {
  rat: Rating[] = [];
  ratings: Ratings;
  ratingChange: EventEmitter<Rating> = new EventEmitter();
  constructor(public navCtrl: NavController, public ratingService: RatingService) {
    this.rat.push(new Rating(0, 1, 1));
    this.rat.push(new Rating(0, 2, 2));
    this.rat.push(new Rating(0, 2, 3));
    this.rat.push(new Rating(0, 2, 4));
    this.rat.push(new Rating(0, 2, 5));
    this.rat.push(new Rating(0, 2, 6));
    this.rat.push(new Rating(0, 2, 7));
  }

  ngOnInit() {
  }

    nextPage($event: MouseEvent) {
      this.ratings = new Ratings(1, this.rat);
      this.ratingService.setData(this.ratings);
      console.log(this.ratingService.makeFramingArray());
      this.navCtrl.navigateRoot('/kompetenz-allocation');
    }
  rate(rate: number, index: number) {
    this.rat[index].rate = rate;
    this.ratingChange.emit(this.rat[index]);
/*    this.rating = index;
    this.ratingChange.emit(this.rating);*/
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
}
enum COLORS {
  GREY = '#E0E0E0',
  GREEN = '#76FF03',
  YELLOW = '#FFCA28',
  RED = '#DD2C00'
}
