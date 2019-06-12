import { Component, OnInit, EventEmitter } from '@angular/core';
import { NavController} from '@ionic/angular';

@Component({
  selector: 'app-kompetenz',
  templateUrl: './kompetenz.page.html',
  styleUrls: ['./kompetenz.page.scss'],
})
export class KompetenzPage implements OnInit {
  framing: any;
  framingPopupBlock: any;
  allocation: any;
  allocationPopupBlock: any;
  analytics: any;
  analyticsPopupBlock: any;
  preparation: any;
  preparationPopupBlock: any;
  rating: number;
  ratingChange: EventEmitter<number> = new EventEmitter();

  constructor(public navCtrl: NavController) {

  }
  ionViewDidEnter() {
    const frame = document.getElementById('Framing');
    const framepopup = document.getElementById('framingPopup');
    const allocat = document.getElementById('Allocation');
    const allocatpopup = document.getElementById('allocationPopup');
    const analyt = document.getElementById('Analytics');
    const analytpopup = document.getElementById('analyticsPopup');
    const prep = document.getElementById('Preparation');
    const preppopup = document.getElementById('preparationPopup');
    this.framingPopupBlock = framepopup;
    this.framing = frame;
    this.allocationPopupBlock = allocatpopup;
    this.allocation = allocat;
    this.analyticsPopupBlock = analytpopup;
    this.analytics = analyt;
    this.preparationPopupBlock = preppopup;
    this.preparation = prep;
    this.framing.addEventListener('mouseover', this.framingPopup);
    this.framing.addEventListener('mouseout', this.framingPopout);
    this.allocation.addEventListener('mouseover', this.allocationPopup);
    this.allocation.addEventListener('mouseout', this.allocationPopout);
    this.analytics.addEventListener('mouseover', this.analyticsPopup);
    this.analytics.addEventListener('mouseout', this.analyticsPopout);
    this.preparation.addEventListener('mouseover', this.preparationPopup);
    this.preparation.addEventListener('mouseout', this.preparationPopout);
  }
  framingPopout(evt) {
    this.framingPopupBlock.style.display = 'none';
  }
  framingPopup(evt) {
    const svg = document.getElementById('Framing');
    const popup = document.getElementById('framingPopup');
    this.framingPopupBlock = popup;
    this.framing = svg;
    const iconPos = this.framing.getBoundingClientRect();
    this.framingPopupBlock.style.marginLeft = (iconPos.right - 550) + 'px';
    /* Not optimized for Devices see Screen Width and Height */
    this.framingPopupBlock.style.top = (window.scrollY + iconPos.top - 280) + 'px';
    this.framingPopupBlock.style.display = 'block';
  }
  allocationPopout(evt) {
    this.allocationPopupBlock.style.display = 'none';
  }
  allocationPopup(evt) {
    const svg = document.getElementById('Allocation');
    const popup = document.getElementById('allocationPopup');
    this.allocationPopupBlock = popup;
    this.allocation = svg;
    const iconPos = this.allocation.getBoundingClientRect();
    this.allocationPopupBlock.style.marginLeft = (iconPos.right - 550) + 'px';
    /* Not optimized for Devices see Screen Width and Height */
    this.allocationPopupBlock.style.top = (window.scrollY + iconPos.top - 280) + 'px';
    this.allocationPopupBlock.style.display = 'block';
  }
  analyticsPopout(evt) {
    this.analyticsPopupBlock.style.display = 'none';
  }
  analyticsPopup(evt) {
    const svg = document.getElementById('Analytics');
    const popup = document.getElementById('analyticsPopup');
    this.analyticsPopupBlock= popup;
    this.analytics = svg;
    const iconPos = this.analytics.getBoundingClientRect();
    this.analyticsPopupBlock.style.marginLeft = (iconPos.right - 550) + 'px';
    /* Not optimized for Devices see Screen Width and Height */
    this.analyticsPopupBlock.style.top = (window.scrollY + iconPos.top - 310) + 'px';
    this.analyticsPopupBlock.style.display = 'block';
  }
  preparationPopout(evt) {
    this.preparationPopupBlock.style.display = 'none';
  }
  preparationPopup(evt) {
    const svg = document.getElementById('Preparation');
    const popup = document.getElementById('preparationPopup');
    this.preparationPopupBlock = popup;
    this.preparation = svg;
    const iconPos = this.preparation.getBoundingClientRect();
    this.preparationPopupBlock.style.marginLeft = (iconPos.right - 580) + 'px';
    /* Not optimized for Devices see Screen Width and Height */
    this.preparationPopupBlock.style.top = (window.scrollY + iconPos.top - 280) + 'px';
    this.preparationPopupBlock.style.display = 'block';
  }

  ngOnInit() {
  }

  nextPage($event: MouseEvent) {
    this.navCtrl.navigateRoot('/kompetenz-framing');
  }
}

